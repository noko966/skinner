
class Skinner {
    constructor(cb){
        this.skinnerContainer = this.createControlsWrapper()

        this.cb = cb

        this.skin = {
            primaryBg:"#161616",
            isDark:false,
            primaryTxt:"#ffffff",
            primaryTxt2:"#cccccc",

            isWidget:false,
            widgetBg:"#333333",
            widgetBg2:"#353535",
            widgetBg3:"#373737",

            widgetTxt:"#ffffff",
            widgetTxt2:"#999999",


            accent:"#ffb700",
            accentBg:"#ffb700",
            accent2:"#f14100",
            accentTxt:"#000000",
            isAccentGradient:false,

            brand:"#f14100",
            brandBg:"#f14100",
            brandTxt:"#ffffff",
            isBrandGradient:false,

            isOddBg:false,
            oddBg:"#000000",
            oddTxt:"#ffffff",

            isSportHeaderBg:false,
            sportHeaderBg:"#ffb700",
            sportHeaderTxt:"#000000",


            isSubHeaderBg:false,
            subHeaderBg:"#000000",
            subHeaderTxt:"#ffffff",

            isTabBg:false,
            tabBg:"#ffb700",
            tabTxt:"#000000",

            isHeaderBg:false,
            headerBg:"#ffb700",
            headerTxt:"#000000",

            isShowMoreBg:false,
            showMoreBg:"#ffb700",
            showMoreTxt:"#000000",

            isBetslipBg:false,
            betslipBg:"#333333",
            betslipBg2:"#444444",
            betslipTxt:"#ffffff",
            betslipTxt2:"#999999",

        }



        this.modifyColor = this.modifyColor.bind(this);

        this.cb(this.skin)
    }

    init(){
        this.createHTML()
        this.applyInitialValues()
        this.createDownloadButton()
    }

    async modifyColor(key, value){
        this.skin[key] = value
        this.applyInitialValues()
        this.generateTheme()
        this.cb(this.skin)
    }

    modifyKey(key, value){
        this.skin[key] = value;
        this.generateTheme()
        this.applyInitialValues()
        this.cb(this.skin)
    }

    generateTheme(){
        this.skin.primaryTxt = guessVisibleColor(this.skin.primaryBg)
        this.skin.primaryTxt2 = this.skin.primaryTxt === "#000" ? tinycolor(this.skin.primaryTxt).lighten(20).toString() : tinycolor(this.skin.primaryTxt).darken(20).toString()
        this.skin.primaryBg2 = this.skin.isDark ? tinycolor(this.skin.primaryBg).darken(10).toString() : tinycolor(this.skin.primaryBg).lighten(10).toString()
        this.skin.widgetBg = this.skin.isWidget ? this.skin.widgetBg : this.skin.primaryBg2
        this.skin.widgetBg2 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(20).toString() : tinycolor(this.skin.widgetBg).lighten(20).toString()
        this.skin.widgetBg3 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(25).toString() : tinycolor(this.skin.widgetBg).lighten(25).toString()

        this.skin.widgetBgHov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()
        this.skin.widgetBg2Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(7).toString() : tinycolor(this.skin.widgetBg).lighten(7).toString()
        this.skin.widgetBg3Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()

        this.skin.widgetTxt = guessVisibleColor(this.skin.widgetBg)
        this.skin.widgetTxt2 = this.skin.widgetTxt === "#000" ? tinycolor(this.skin.widgetTxt).lighten(20).toString() : tinycolor(this.skin.widgetTxt).darken(20).toString()

        this.skin.brandTxt = guessVisibleColor(this.skin.brand)
        this.skin.brandBg = this.skin.isBrandGradient ? `linear-gradient(0deg, ${this.skin.brand} 0%, ${this.skin.brand2} 100%);` : this.skin.brand

        this.skin.accentTxt = guessVisibleColor(this.skin.accent)
        this.skin.accentBg = this.skin.isAccentGradient ? `linear-gradient(0deg, ${this.skin.accent} 0%, ${this.skin.accent2} 100%);` : this.skin.accent

        this.skin.oddBg = this.skin.isOddBg ? this.skin.oddBg : this.skin.primaryBg
        this.skin.oddTxt = guessVisibleColor(this.skin.oddBg)

        this.skin.showMoreBg = this.skin.isShowMoreBg ? this.skin.showMoreBg : this.skin.primaryBg
        this.skin.showMoreTxt = guessVisibleColor(this.skin.showMoreBg)

        this.skin.headerBg = this.skin.isHeaderBg ? this.skin.headerBg : this.skin.accent
        this.skin.headerTxt = guessVisibleColor(this.skin.headerBg)

        this.skin.sportHeaderBg = this.skin.isSportHeaderBg ? this.skin.sportHeaderBg : this.skin.accent
        this.skin.sportHeaderTxt = guessVisibleColor(this.skin.sportHeaderBg)

        this.skin.subHeaderBg = this.skin.isSportHeaderBg ? this.skin.subHeaderBg : this.skin.widgetBg2
        this.skin.subHeaderTxt = guessVisibleColor(this.skin.subHeaderBg)

        this.skin.tabBg = this.skin.isTabBg ? this.skin.tabBg : this.skin.accent
        this.skin.tabTxt = guessVisibleColor(this.skin.tabBg)

        this.skin.betslipBg = this.skin.isBetslipBg ? this.skin.betslipBg : this.skin.widgetBg
        this.skin.betslipBg2 = this.skin.isDark ? tinycolor(this.skin.betslipBg).darken(7).toString() : tinycolor(this.skin.betslipBg).lighten(7).toString()
        this.skin.betslipTxt = guessVisibleColor(this.skin.betslipBg)
        this.skin.betslipTxt2 = this.skin.betslipTxt === "#000" ? tinycolor(this.skin.betslipTxt).lighten(20).toString() : tinycolor(this.skin.betslipTxt).darken(20).toString()
        
    }

    applyInitialValues(){
        this.primaryBg.picker.value = this.skin.primaryBg
        this.primaryBg.checkBox.checked = this.skin.isDark
        this.widgetBg.picker.value = this.skin.widgetBg
        this.widgetBg.checkBox.checked = this.skin.isWidget
        this.skin.isWidget ? this.widgetBg.picker.disabled = false : this.widgetBg.picker.disabled = true
        
        this.accent.picker.value = this.skin.accent
        this.accent.picker2.value = this.skin.accent2
        this.skin.isAccentGradient ? this.accent.picker2.disabled = false : this.accent.picker2.disabled = true

        this.brand.picker.value = this.skin.brand
        this.brand.picker2.value = this.skin.brand2
        this.skin.isBrandGradient ? this.brand.picker2.disabled = false : this.brand.picker2.disabled = true

        this.skin.isOddBg ? this.oddBg.picker.disabled = false : this.oddBg.picker.disabled = true
        this.oddBg.picker.value = this.skin.oddBg

        this.skin.isSportHeaderBg ? this.sportHeaderBg.picker.disabled = false : this.sportHeaderBg.picker.disabled = true
        this.sportHeaderBg.picker.value = this.skin.sportHeaderBg

        this.skin.isSubHeaderBg ? this.subHeaderBg.picker.disabled = false : this.subHeaderBg.picker.disabled = true
        this.subHeaderBg.picker.value = this.skin.subHeaderBg

        this.skin.isTabBg ? this.tabBg.picker.disabled = false : this.tabBg.picker.disabled = true
        this.tabBg.picker.value = this.skin.tabBg

        this.skin.isBetslipBg ? this.betslipBg.picker.disabled = false : this.betslipBg.picker.disabled = true
        this.betslipBg.picker.value = this.skin.betslipBg

        this.skin.isShowMoreBg ? this.showMoreBg.picker.disabled = false : this.showMoreBg.picker.disabled = true
        this.betslipBg.picker.value = this.skin.betslipBg

        this.skin.isHeaderBg ? this.headerBg.picker.disabled = false : this.headerBg.picker.disabled = true
        this.headerBg.picker.value = this.skin.headerBg
    }
    
    createHTML(){
        this.primaryBg = this.createControl("primaryBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isDark", e.target.checked)},
            (e)=> {this.modifyColor("primaryBg", e.target.value)}
        )
        this.widgetBg = this.createControl("widgetBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isWidget", e.target.checked)},
            (e)=> {this.modifyColor("widgetBg", e.target.value)}
        )
        this.accent = this.createControl("accent", this.skinnerContainer, 
            (e)=> {this.modifyKey("isAccentGradient", e.target.checked)},
            (e)=> {this.modifyColor("accent", e.target.value)},
            (e)=> {this.modifyColor("accent2", e.target.value)},
        )
        this.brand = this.createControl("brand", this.skinnerContainer, 
            (e)=> {this.modifyKey("isBrandGradient", e.target.checked)},
            (e)=> {this.modifyColor("brand", e.target.value)},
            (e)=> {this.modifyColor("brand2", e.target.value)},
        )
        this.oddBg = this.createControl("oddBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isOddBg", e.target.checked)},
            (e)=> {this.modifyColor("oddBg", e.target.value)}
        )
        this.sportHeaderBg = this.createControl("sportHeaderBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isSportHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("sportHeaderBg", e.target.value)}
        )
        this.subHeaderBg = this.createControl("subHeaderBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isSubHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("subHeaderBg", e.target.value)}
        )
        this.tabBg = this.createControl("tabBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isTabBg", e.target.checked)},
            (e)=> {this.modifyColor("tabBg", e.target.value)}
        )
        this.betslipBg = this.createControl("betslipBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isBetslipBg", e.target.checked)},
            (e)=> {this.modifyColor("betslipBg", e.target.value)}
        )
        this.showMoreBg = this.createControl("showMoreBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isShowMoreBg", e.target.checked)},
            (e)=> {this.modifyColor("showMoreBg", e.target.value)}
        )
        this.headerBg = this.createControl("headerBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("headerBg", e.target.value)}
        )
        this.borderRadius = this.createRangeControl("borderRadius", this.skinnerContainer, 
            (e)=> {this.modifyKey("borderRadius", e.target.value)}
        )
        this.makeTournamentBackground = this.createRangeControl("tournaments bg", this.skinnerContainer, 
            (e)=> {this.modifyKey("makeTournamentBackground", e.target.checked)}, "range"
        )
    }

    createControlsWrapper(){
        let main = document.createElement('div')
        main.className = "nik_skinner_control_wrapper"
        document.body.appendChild(main)
        return main
    }

    createDownloadButton(){
        this.btnWrapper = document.createElement('div')
        this.btnWrapper.className = "nik_skinner_download_button_wrapper"
        let downloadBtn = document.createElement('button')
        downloadBtn.innerText = "download css"
        downloadBtn.className = "nik_skinner_download_button"
        this.skinnerContainer.appendChild(this.btnWrapper)
        this.btnWrapper.appendChild(downloadBtn)
        downloadBtn.addEventListener('click', () => {
            this.makeDownloadRequest(this.cb, this.skin);
        })
        

    }

    async makeDownloadRequest(cb, argument){
        const skin = cb(argument)
        try {
            const data = await fetch(`/req` + window.location.pathname, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: skin})
            })
            if (data.status === 200) {
                window.location.replace(`/download` + window.location.pathname)
            }
        } catch (error) {
            console.log(error)
        }
        
        
    }

    createRangeControl(label, parent, checkboxCallback, type){
        let _type = type
        let _label = document.createElement('label')
        _label.className = "nik_skinner_control_group_label"
        _label.htmlFor = label
        _label.innerText = label

        this.wrapper = document.createElement('div')
        this.wrapper.className = "nik_skinner_control_group"

        let range = document.createElement('input')
        if(_type){
          range.type = "checkbox"
          range.className = "nik_skinner_control_group_checkbox"
        }
        else{
          range.type = "range"
          range.className = "nik_skinner_control_group_range"
        }
        
        range.id = label
        range.addEventListener("change", checkboxCallback)

        this.wrapper.appendChild(_label)
        this.wrapper.appendChild(range)
        parent.appendChild(this.wrapper)
    }

    createControl(label, parent, checkboxCallback, pickerCallback, isAccentGradient=false){
        let _label = document.createElement('label')
        _label.className = "nik_skinner_control_group_label"
        _label.htmlFor = label
        _label.innerText = label

        let wrapper = document.createElement('div')
        wrapper.className = "nik_skinner_control_group"
        let checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        checkBox.className = "nik_skinner_control_group_checkbox"
        checkBox.id = label

        checkBox.addEventListener("change", checkboxCallback)
        let picker = document.createElement('input')
        picker.type = "color"
        picker.className = "nik_skinner_control_group_picker"
        picker.addEventListener("change", pickerCallback)
        wrapper.appendChild(_label)
        wrapper.appendChild(checkBox)
        wrapper.appendChild(picker)
        parent.appendChild(wrapper)

        let picker2
        if(isAccentGradient){
            picker2 = document.createElement('input')
            picker2.type = "color"
            picker2.className = "nik_skinner_control_group_picker"
            wrapper.appendChild(picker2)
            picker2.addEventListener("change", isAccentGradient)
        }

        return {
            picker,
            picker2,
            checkBox
        }
    }
}

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.setAttribute('type', 'text/css');
head.appendChild(style);

var s = new Skinner(createCss)

s.init()


function addActiveClassToNavigation(){
    let nav = document.querySelectorAll('.nik_skinner_link')

    for (let i = 0; i < nav.length; i++) {
        if(`/${nav[i].href.split('/')[3]}` === window.location.pathname){
            nav[i].classList.add("nik_skinner_link-active")
        }
    }

    
}

addActiveClassToNavigation();







