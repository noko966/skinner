var express = require('express')
var app = express()
var mime = require('mime');
var fs = require('fs');
const PORT = 9999
const path = require('path')

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, "public")))


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


const renderNavigation = (req, res, next) => {
    req.nav = `
    <div class="nik_skinner_link_wrapper">
        <a class="nik_skinner_link" href="/sportWeb">sport web</a>
        <a class="nik_skinner_link" href="/sportMobile">sport mobile</a>
        <a class="nik_skinner_link" href="/sportRules">sport rules</a>
    </div>
    `
    next()
}

app.use(renderNavigation)

const renderMobileView = (req, res) => {
    res.render("sportMobile", {
        nav: req.nav
    })
}

const renderWebView = (req, res) => {
    res.render("sportWeb", {
        nav: req.nav
    })
}

const renderRules = (req, res) => {
    res.render("sportRules", {
        nav: req.nav
    })
}

app.get("/", renderWebView)
app.get("/sportMobile",  renderMobileView)
app.get("/sportWeb",  renderWebView)
app.get("/sportRules",  renderRules)



app.post("/req/:id", (req, res) => {
    let id = req.params.id
    let config = req.body.data


    var writeStream = fs.createWriteStream(`${id}.css`)
    writeStream.write(config)
    res.setHeader('Content-Type', 'text/css');    
    writeStream.end()



    res.status(200).json({OK: true})
})

app.get('/download/:id', function(req, res){
    let id = req.params.id
    
    const file = `${__dirname}/${id}.css`;
    res.download(file);
});


app.listen(PORT)

