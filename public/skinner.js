
class Skinner {
    constructor(cb){
        this.skinnerContainer = this.createControlsWrapper()

        this.cb = cb

        this.skin = {
            primaryBg:"#161616",
            isDark:false,
            primaryTxt:"#ffffff",
            primaryTxt2:"#cccccc",

            isWidgetBg:false,
            isWidgetGradient:false,
            widgetBg_g:"#555555",
            widgetBg:"#333333",
            widgetG:"#333333",
            widgetBg2:"#353535",
            widgetBg3:"#373737",
            widgetTxt:"#ffffff",
            widgetTxt2:"#999999",

            isAccentBg:false,
            isAccentGradient:false,
            accentBg:"#ffb700",
            accentG:"#ffb700",
            accentBg2:"#ffb700",
            accentBg_g:"#f14100",
            accentTxt:"#000000",

            isBrandBg:false,
            isBrandGradient:false,
            brandBg:"#f14100",
            brandG:"#f14100",
            brandBg2:"#f14100",
            brandBg_g:"#f14100",
            brandTxt:"#000000",

            isOddBg:false,
            isOddGradient:false,
            oddBg:"#000000",
            oddBg_g:"#000000",
            oddG:"#000000",
            oddTxt:"#fff",

            isHeaderBg:false,
            isHeaderGradient:false,
            headerBg:"#000000",
            headerBg_g:"#000000",
            headerG:"#000000",
            headerTxt:"#fff",

            isSubHeaderBg:false,
            isSubHeaderGradient:false,
            subHeaderBg:"#161616",
            subHeaderBg_g:"#161616",
            subHeaderG:"#161616",
            subHeaderTxt:"#fff",

            isTabBg:false,
            isTabGradient:false,
            tabBg:"#333333",
            tabBg_g:"#333333",
            tabG:"#333333",
            tabTxt:"#fff",

            isShowMoreBg:false,
            isShowMoreGradient:false,
            showMoreBg:"#161616",
            showMoreBg_g:"#161616",
            showMoreG:"#161616",
            showMoreTxt:"#fff",

            isBetSlipBg:false,
            isBetSlipGradient:false,
            betSlipBg:"#161616",
            betSlipBg2:"#333333",
            betSlipBg_g:"#161616",
            betSlipG:"#161616",
            betSlipTxt:"#fff",
            betSlipTxt2:"#ccc",

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
        console.log(this.skin);
    }

    modifyKey(key, value){
        this.skin[key] = value;
        this.generateTheme()
        this.applyInitialValues()
        this.cb(this.skin)
    }

    generateTheme(){
        this.skin.primaryTxt = guessVisibleColor(this.skin.primaryBg)
        this.skin.primaryBg2 = this.skin.isDark ? tinycolor(this.skin.primaryBg).darken(10).toString() : tinycolor(this.skin.primaryBg).lighten(10).toString()
        this.skin.primaryTxt2 = this.skin.primaryTxt === "#000" ? tinycolor(this.skin.primaryTxt).lighten(20).toString() : tinycolor(this.skin.primaryTxt).darken(20).toString()
        
        if(this.skin.isWidgetBg){
            this.skin.widgetG = this.skin.widgetBg
            this.skin.widgetTxt = guessVisibleColor(this.skin.widgetBg)
            this.skin.widgetTxt2 = this.skin.widgetTxt === "#000" ? tinycolor(this.skin.widgetTxt).lighten(20).toString() : tinycolor(this.skin.widgetTxt).darken(20).toString()
            this.skin.widgetBg2 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(6).toString() : tinycolor(this.skin.widgetBg).lighten(6).toString()
            this.skin.widgetBg3 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(9).toString() : tinycolor(this.skin.widgetBg).lighten(9).toString()
            this.skin.widgetBgHov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()
            this.skin.widgetBg2Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(7).toString() : tinycolor(this.skin.widgetBg).lighten(7).toString()
            this.skin.widgetBg3Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()
            if(this.skin.isWidgetGradient){
                this.skin.widgetG = `linear-gradient(0deg, ${this.skin.widgetBg} 0%, ${this.skin.widgetBg_g} 100%);`
            }
        }
        else{
            this.skin.widgetBg = this.skin.primaryBg2
            this.skin.widgetG = this.skin.widgetBg
            this.skin.widgetTxt = guessVisibleColor(this.skin.widgetBg)
            this.skin.widgetTxt2 = this.skin.widgetTxt === "#000" ? tinycolor(this.skin.widgetTxt).lighten(20).toString() : tinycolor(this.skin.widgetTxt).darken(20).toString()
            this.skin.widgetBg2 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(6).toString() : tinycolor(this.skin.widgetBg).lighten(6).toString()
            this.skin.widgetBg3 = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(9).toString() : tinycolor(this.skin.widgetBg).lighten(9).toString()
            this.skin.widgetBgHov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()
            this.skin.widgetBg2Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(7).toString() : tinycolor(this.skin.widgetBg).lighten(7).toString()
            this.skin.widgetBg3Hov = this.skin.isDark ? tinycolor(this.skin.widgetBg).darken(2).toString() : tinycolor(this.skin.widgetBg).lighten(2).toString()
        }


        if(this.skin.isAccentBg){
            this.skin.accentG = this.skin.accentBg
            this.skin.accentTxt = guessVisibleColor(this.skin.accentBg)
            this.skin.accentBg2 = this.skin.isDark ? tinycolor(this.skin.accentBg).darken(6).toString() : tinycolor(this.skin.accentBg).lighten(6).toString()
            if(this.skin.isAccentGradient){
                this.skin.accentG = `linear-gradient(0deg, ${this.skin.accentBg} 0%, ${this.skin.accentBg_g} 100%);`
            }
        }
        else{
            this.skin.accentBg = this.skin.widgetTxt
            this.skin.accentG = this.skin.accentBg
            this.skin.accentTxt = guessVisibleColor(this.skin.accentBg)
            this.skin.accentBg2 = this.skin.isDark ? tinycolor(this.skin.accentBg).darken(6).toString() : tinycolor(this.skin.accentBg).lighten(6).toString()
        }

        if(this.skin.isBrandBg){
            this.skin.brandG = this.skin.brandBg
            this.skin.brandTxt = guessVisibleColor(this.skin.brandBg)
            this.skin.brandBg2 = this.skin.isDark ? tinycolor(this.skin.brandBg).darken(6).toString() : tinycolor(this.skin.brandBg).lighten(6).toString()
            if(this.skin.isBrandGradient){
                this.skin.brandG = `linear-gradient(0deg, ${this.skin.brandBg} 0%, ${this.skin.brandBg_g} 100%);`
            }
        }
        else{
            this.skin.brandBg = this.skin.accentBg
            this.skin.brandG = this.skin.accentG
            this.skin.brandTxt = guessVisibleColor(this.skin.brandBg)
            this.skin.brandBg2 = this.skin.isDark ? tinycolor(this.skin.brandBg).darken(6).toString() : tinycolor(this.skin.brandBg).lighten(6).toString()
        }

        if(this.skin.isOddBg){
            this.skin.oddG = this.skin.oddBg
            this.skin.oddTxt = guessVisibleColor(this.skin.oddBg)
            if(this.skin.isOddGradient){
                this.skin.oddG = `linear-gradient(0deg, ${this.skin.oddBg} 0%, ${this.skin.oddBg_g} 100%);`
            }
        }
        else{
            this.skin.oddBg = this.skin.primaryBg
            this.skin.oddG = this.skin.widgetG
            this.skin.oddTxt = guessVisibleColor(this.skin.oddBg)
        }

        if(this.skin.isHeaderBg){
            this.skin.headerG = this.skin.headerBg
            this.skin.headerTxt = guessVisibleColor(this.skin.headerBg)
            if(this.skin.isHeaderGradient){
                this.skin.headerG = `linear-gradient(0deg, ${this.skin.headerBg} 0%, ${this.skin.headerBg_g} 100%);`
            }
        }
        else{
            this.skin.headerBg = this.skin.widgetBg
            this.skin.headerG = this.skin.widgetG
            this.skin.headerTxt = guessVisibleColor(this.skin.headerBg)
        }

        if(this.skin.isBetSlipBg){
            this.skin.betSlipG = this.skin.betlipBg
            this.skin.betSlipTxt = guessVisibleColor(this.skin.betSlipBg)
            this.skin.betSlipTxt2 = this.skin.betSlipTxt === "#000" ? tinycolor(this.skin.betSlipTxt).lighten(20).toString() : tinycolor(this.skin.betSlipTxt).darken(20).toString()
            this.skin.betSlipBg2 = this.skin.isDark ? tinycolor(this.skin.betSlipBg).darken(6).toString() : tinycolor(this.skin.betSlipBg).lighten(6).toString()
            if(this.skin.isBetSlipGradient){
                this.skin.betSlipG = `linear-gradient(0deg, ${this.skin.betSlipBg} 0%, ${this.skin.betSlipBg_g} 100%);`
            }
        }
        else{
            this.skin.betSlipBg = this.skin.widgetBg
            this.skin.betSlipG = this.skin.widgetG
            this.skin.betSlipTxt = guessVisibleColor(this.skin.betSlipBg)
            this.skin.betSlipTxt2 = this.skin.betSlipTxt === "#000" ? tinycolor(this.skin.betSlipTxt).lighten(20).toString() : tinycolor(this.skin.betSlipTxt).darken(20).toString()
            this.skin.betSlipBg2 = this.skin.isDark ? tinycolor(this.skin.betSlipBg).darken(6).toString() : tinycolor(this.skin.betSlipBg).lighten(6).toString()
        }

        if(this.skin.isShowMoreBg){
            this.skin.showMoreG = this.skin.showMoreBg
            this.skin.showMoreTxt = guessVisibleColor(this.skin.showMoreBg)
            if(this.skin.isShowMoreGradient){
                this.skin.showMoreG = `linear-gradient(0deg, ${this.skin.showMoreBg} 0%, ${this.skin.showMoreBg_g} 100%);`
            }
        }
        else{
            this.skin.showMoreBg = this.skin.primaryBg
            this.skin.showMoreG = this.skin.widgetG
            this.skin.showMoreTxt = guessVisibleColor(this.skin.showMoreBg)
        }

        if(this.skin.isTabBg){
            this.skin.tabG = this.skin.tabBg
            this.skin.showMoreTxt = guessVisibleColor(this.skin.tabBg)
            if(this.skin.isTabGradient){
                this.skin.tabG = `linear-gradient(0deg, ${this.skin.tabBg} 0%, ${this.skin.tabBg_g} 100%);`
            }
        }
        else{
            this.skin.tabBg = this.skin.widgetBg
            this.skin.tabG = this.skin.widgetG
            this.skin.showMoreTxt = guessVisibleColor(this.skin.tabBg)
        }

        if(this.skin.isSubHeaderBg){
            this.skin.tabG = this.skin.subHeaderBg
            this.skin.subHeaderTxt = guessVisibleColor(this.skin.subHeaderBg)
            if(this.skin.isSubHeaderGradient){
                this.skin.subHeaderG = `linear-gradient(0deg, ${this.skin.subHeaderBg} 0%, ${this.skin.subHeaderBg_g} 100%);`
            }
        }
        else{
            this.skin.subHeaderBg = this.skin.primaryBg
            this.skin.subHeaderG = this.skin.primaryBg
            this.skin.subHeaderTxt = guessVisibleColor(this.skin.subHeaderBg)
        }
        

        
    }

    applyInitialValues(){
        this.primaryBg.picker.value = this.skin.primaryBg
        this.primaryBg.checkBox.checked = this.skin.isDark

        this.widgetBg.checkBox.checked = this.skin.isWidgetBg
        this.widgetBg.checkBox2.checked = this.skin.isWidgetGradient
        this.widgetBg.picker.value = this.skin.widgetBg
        this.widgetBg.picker2.value = this.skin.widgetBg_g
        this.skin.isWidgetBg ? this.widgetBg.picker.disabled = false : this.widgetBg.picker.disabled = true
        this.skin.isWidgetBg && this.skin.isWidgetGradient ? this.widgetBg.picker2.disabled = false : this.widgetBg.picker2.disabled = true

        this.accentBg.checkBox.checked = this.skin.isAccentBg
        this.accentBg.checkBox2.checked = this.skin.isAccentGradient
        this.accentBg.picker.value = this.skin.accentBg
        this.accentBg.picker2.value = this.skin.accentBg_g
        this.skin.isAccentBg ? this.accentBg.picker.disabled = false : this.accentBg.picker.disabled = true
        this.skin.isAccentBg && this.skin.isAccentGradient ? this.accentBg.picker2.disabled = false : this.accentBg.picker2.disabled = true

        this.brandBg.checkBox.checked = this.skin.isBrandBg
        this.brandBg.checkBox2.checked = this.skin.isBrandGradient
        this.brandBg.picker.value = this.skin.brandBg
        this.brandBg.picker2.value = this.skin.brandBg_g
        this.skin.isBrandBg ? this.brandBg.picker.disabled = false : this.brandBg.picker.disabled = true
        this.skin.isBrandBg && this.skin.isBrandGradient ? this.brandBg.picker2.disabled = false : this.brandBg.picker2.disabled = true

        this.oddBg.checkBox.checked = this.skin.isOddBg
        this.oddBg.checkBox2.checked = this.skin.isOddGradient
        this.oddBg.picker.value = this.skin.oddBg
        this.oddBg.picker2.value = this.skin.oddBg_g
        this.skin.isOddBg ? this.oddBg.picker.disabled = false : this.oddBg.picker.disabled = true
        this.skin.isOddBg && this.skin.isOddGradient ? this.oddBg.picker2.disabled = false : this.oddBg.picker2.disabled = true

        this.headerBg.checkBox.checked = this.skin.isHeaderBg
        this.headerBg.checkBox2.checked = this.skin.isHeaderGradient
        this.headerBg.picker.value = this.skin.headerBg
        this.headerBg.picker2.value = this.skin.headerBg_g
        this.skin.isHeaderBg ? this.headerBg.picker.disabled = false : this.headerBg.picker.disabled = true
        this.skin.isHeaderBg && this.skin.isHeaderGradient ? this.headerBg.picker2.disabled = false : this.headerBg.picker2.disabled = true

        this.betSlipBg.checkBox.checked = this.skin.isBetSlipBg
        this.betSlipBg.checkBox2.checked = this.skin.isBetSlipGradient
        this.betSlipBg.picker.value = this.skin.betSlipBg
        this.betSlipBg.picker2.value = this.skin.betSlipBg_g
        this.skin.isBetSlipBg ? this.betSlipBg.picker.disabled = false : this.betSlipBg.picker.disabled = true
        this.skin.isBetSlipBg && this.skin.isBetSlipGradient ? this.betSlipBg.picker2.disabled = false : this.betSlipBg.picker2.disabled = true

        this.showMoreBg.checkBox.checked = this.skin.isShowMoreBg
        this.showMoreBg.checkBox2.checked = this.skin.isShowMoreGradient
        this.showMoreBg.picker.value = this.skin.showMoreBg
        this.showMoreBg.picker2.value = this.skin.showMoreBg_g
        this.skin.isShowMoreBg ? this.showMoreBg.picker.disabled = false : this.showMoreBg.picker.disabled = true
        this.skin.isShowMoreBg && this.skin.isShowMoreGradient ? this.showMoreBg.picker2.disabled = false : this.showMoreBg.picker2.disabled = true

        this.tabBg.checkBox.checked = this.skin.isTabBg
        this.tabBg.checkBox2.checked = this.skin.isTabGradient
        this.tabBg.picker.value = this.skin.tabBg
        this.tabBg.picker2.value = this.skin.tabBg_g
        this.skin.isTabBg ? this.tabBg.picker.disabled = false : this.tabBg.picker.disabled = true
        this.skin.isTabBg && this.skin.isTabGradient ? this.tabBg.picker2.disabled = false : this.tabBg.picker2.disabled = true

        this.subHeaderBg.checkBox.checked = this.skin.isSubHeaderBg
        this.subHeaderBg.checkBox2.checked = this.skin.isSubHeaderGradient
        this.subHeaderBg.picker.value = this.skin.subHeaderBg
        this.subHeaderBg.picker2.value = this.skin.subHeaderBg_g
        this.skin.isSubHeaderBg ? this.subHeaderBg.picker.disabled = false : this.subHeaderBg.picker.disabled = true
        this.skin.isSubHeaderBg && this.skin.isSubHeaderGradient ? this.subHeaderBg.picker2.disabled = false : this.subHeaderBg.picker2.disabled = true
    }
    
    createHTML(){
        this.primaryBg = this.createControl("primaryBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isDark", e.target.checked)},
            null,
            (e)=> {this.modifyColor("primaryBg", e.target.value)}
        )
        this.widgetBg = this.createControl("widgetBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isWidgetBg", e.target.checked)},
            (e)=> {this.modifyKey("isWidgetGradient", e.target.checked)},
            (e)=> {this.modifyColor("widgetBg", e.target.value)},
            (e)=> {this.modifyColor("widgetBg_g", e.target.value)}
        )
        this.accentBg = this.createControl("accentBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isAccentBg", e.target.checked)},
            (e)=> {this.modifyColor("isAccentGradient", e.target.checked)},
            (e)=> {this.modifyColor("accentBg", e.target.value)},
            (e)=> {this.modifyColor("accentBg_g", e.target.value)},
        )
        this.brandBg = this.createControl("brandBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isBrandBg", e.target.checked)},
            (e)=> {this.modifyColor("isBrandGradient", e.target.checked)},
            (e)=> {this.modifyColor("brandBg", e.target.value)},
            (e)=> {this.modifyColor("brandBg_g", e.target.value)},
        )

        this.oddBg = this.createControl("oddBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isOddBg", e.target.checked)},
            (e)=> {this.modifyColor("isOddGradient", e.target.checked)},
            (e)=> {this.modifyColor("oddBg", e.target.value)},
            (e)=> {this.modifyColor("oddBg_g", e.target.value)},
        )

        this.headerBg = this.createControl("headerBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("isHeaderGradient", e.target.checked)},
            (e)=> {this.modifyColor("headerBg", e.target.value)},
            (e)=> {this.modifyColor("headerBg_g", e.target.value)},
        )

        this.betSlipBg = this.createControl("betSlipBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isBetSlipBg", e.target.checked)},
            (e)=> {this.modifyColor("isBetSlipGradient", e.target.checked)},
            (e)=> {this.modifyColor("betSlipBg", e.target.value)},
            (e)=> {this.modifyColor("betSlipBg_g", e.target.value)},
        )

        this.showMoreBg = this.createControl("showMoreBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isShowMoreBg", e.target.checked)},
            (e)=> {this.modifyColor("isShowMoreGradient", e.target.checked)},
            (e)=> {this.modifyColor("showMoreBg", e.target.value)},
            (e)=> {this.modifyColor("showMoreBg_g", e.target.value)},
        )

        this.tabBg = this.createControl("tabBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isTabBg", e.target.checked)},
            (e)=> {this.modifyColor("isTabGradient", e.target.checked)},
            (e)=> {this.modifyColor("tabBg", e.target.value)},
            (e)=> {this.modifyColor("tabBg_g", e.target.value)},
        )

        this.subHeaderBg = this.createControl("subHeaderBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isSubHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("isSubHeaderGradient", e.target.checked)},
            (e)=> {this.modifyColor("subHeaderBg", e.target.value)},
            (e)=> {this.modifyColor("subHeaderBg_g", e.target.value)},
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

    createControl(label, parent, checkboxCallback, gradientCallback, pickerCallback, picker2Callback){
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
        

        let picker2, checkBox2
        if(gradientCallback){
            checkBox2 = document.createElement('input')
            checkBox2.type = "checkbox"
            checkBox2.className = "nik_skinner_control_group_checkbox"
            checkBox2.id = label + '_g'
            checkBox2.addEventListener("change", gradientCallback)
            
            picker2 = document.createElement('input')
            picker2.type = "color"
            picker2.className = "nik_skinner_control_group_picker"
            wrapper.appendChild(picker2)
            picker2.addEventListener("change", picker2Callback)
        }

        wrapper.appendChild(_label)
        wrapper.appendChild(checkBox)
        if(gradientCallback){
           wrapper.appendChild(checkBox2)
        }
        wrapper.appendChild(picker)
        if(gradientCallback){
            wrapper.appendChild(picker2)
         }
        parent.appendChild(wrapper)

        return {
            picker,
            picker2,
            checkBox,
            checkBox2
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







