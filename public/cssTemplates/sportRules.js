function createCss(c){
    
    let css = `
    /* Rules page */
    .logo {
        background: url('images/ClientLogo/${c.fileName}/big.png') no-repeat;
        width: 115px;
        height: 36px;
        background-size: contain;
    }
    @media screen and (max-width: 1024px) {
        .logo {
            background: url('images/ClientLogo/${c.fileName}/sm.png') no-repeat;
            width: 30px;
            height: 30px;
            background-size: contain;
        }
    }
    body {
        background-color: ${c.primaryBg};
    }
    header{ 
        background-color: ${c.widgetBg}; 
        box-shadow: 3px 1px 4px #000;
    }
    .languages .select-list,
    .langRow{ 
        background-color: ${c.widgetBg2}; 
    }
    .langRow .txt{
        color: ${c.widgetTxt2};
    }
    .langRow:hover{ 
         background-color: ${c.widgetBg3};
    }
    .expandable-list{ 
         background-color: ${c.primaryBg}; 
    }
    .expandable-list .menuleft .menuleftа,
    .main-col{
        background-color: ${c.widgetBg}; 
        color: ${c.widgetTxt};
    }
    .expandable-list .menuleft .menuleftа:hover{
        background-color: ${c.widgetBg2};
    }
    .expandable-list .menuleft ul li a{ 
        background-color: ${c.widgetBg2}; 
        color: ${c.widgetTxt2};
    }
    .expandable-list .menuleft ul li a:hover{
        background-color: ${c.widgetBg3};
    }
    .expandable-list .menuleft ul li.active a{
        background-color: ${c.widgetBg2}; 
    }
    .content-head{ 
        color: ${c.brand};
    }
    .mob_nav{
        color: ${c.widgetTxt2};  
    }
    .subMenu .arrow,
    .languages #selLang > a:after{
        color: ${c.widgetTxt2};
    }
  
  `

    style.innerHTML = css

    return css

}