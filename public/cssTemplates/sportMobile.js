function createCss(c){
    
    let css = `
        #dm-main-container.dm__wrapper {
            background-color: ${c.primaryBg}; 
        }
        .dm__collapse__home{
            background-color: ${c.widgetBg2}; 
            color: ${c.accent}; 
            border-color: ${c.accent}; 
        }
        .dm__collapse__home .dm__ico_arrow{
            color: ${c.widgetTxt2};
        }
        .dm__event_row-flags,
        .dm__championship__header {
            background-color: ${c.widgetBg}; 
            color: ${c.widgetTxt}; 
            border-color: ${c.primaryBg}; 
        }
        .dm__custom_select__wrapper--live {
            background-color: ${c.widgetBg}; 
            color: ${c.widgetTxt}; 
        }
        .dm__homepage__sport_singlegames,
        .dm__homepage__sport_singlegames_cont {
            background-color: ${c.primaryBg};
        }
        .dm-count-bubble {
            background-color: ${c.sportHeaderBg};
            color: ${c.sportHeaderTxt};
        }
        .dm__go_back,
        .dm__font-fav,
        .dm__mybets__more .dm--svg-icon {
            color: ${c.primaryTxt};
            fill: ${c.primaryTxt};
        }
        .dm__favorite-added,
        .dm__font_cup{
            color: ${c.accent};
        }
        .dm__market_collapser{
            background-color: ${c.widgetBg2}; 
            color: ${c.widgetTxt}; 
        }
        .dm__homepage__sport_section__item{
            background-color: ${c.widgetBg}; 
            color: ${c.widgetTxt}; 
        }
        .dm__homepage__sport_section__market_head,
        .dm__homepage__sport_section__market_head .dm--input-select-value {
            background-color: ${c.widgetBg2}; 
            color: ${c.widgetTxt}; 
        }
        .dm__homepage__sport_tournament_heading,
        .dm__custom_select__heading{
            background-color: ${c.subHeaderBg}; 
            color: ${c.subHeaderTxt}; 
        }
        
        .dm__custom_select__item {
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt};
        }
        .dm__custom_select__item.dm--selected  {
            background-color: ${c.widgetBg2};
        }
        
        .dm__single_game,
        .dm__mybets_game .dm__mybets_game__info {
            background-color: ${c.widgetBg}; 
            color: ${c.widgetTxt}; 
        }
        .dm__mybets_game__info .dm--akcented,
        .dm__mybets-res-row.dm--akcent{
            color: ${c.accent};   
        }
        a.dm__single_game__link {
            color: ${c.widgetTxt}; 
        }
        .dm__single_game__link .dm__scores{
            color: ${c.accent}; 
        }
        .dm__single_game__link .dm__time,
        .dm__single_game__link .dm__font-tv--onegame,
        .dm__single_game__link .dm__more{
            color: ${c.widgetTxt2}; 
        }
        .dm__favorite-added{
            color: ${c.accent}; 
        }
        /*betslip pin*/
        .dm__betslip_btn__count{
            background: ${c.brandBg}; 
            color: ${c.accentTxt}; 
            border-color: #fff; 
        }
        .dm__betslip_btn{
            background-color: #fff; 
            color: #2b2b2b; 
            border-right-color: ${c.accent}; 
        }
        
        /* tabs */
        .dm__tabs_container {
            background-color: ${c.primaryBg}; 
            border-bottom-color: ${c.primaryBg};
        }
        
        .dm__tabs_container .dm__tabs__item{
            background-color: ${c.primaryBg}; 
            color: ${c.primaryTxt}; 
        }
        
        .dm__tabs_container .dm__tabs__item.dm__tabs__item-active{
            background-color: ${c.widgetBg}; 
            color: ${c.accent}; 
        }
      
        .dm__tabs_container .dm__tabs__item-active .dm__menu__fav_count {
            background-color: ${c.accent};
            color: ${c.accentTxt};
        }
        
        .dm--tabs-event.dm__market_collapser{
            background-color: ${c.primaryBg};
            border-bottom-color: ${c.primaryBg};
        }
        .dm--tabs-event.dm__market_collapser .dm__font_arrows{
            color: ${c.primaryTxt};
        }
        
        .dm__homepage__multibet_heading {
            background-color: ${c.subHeaderBg};
            color: ${c.subHeaderTxt};
        }
        .dm__multibet_odd {
            background-color: ${c.oddBg};
            color: ${c.oddTxt};
        }
        .dm__multibet_total_container {
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt};
        }
        .dm__multibet_total_factor {
            background-color: ${c.widgetBg2};
            color: ${c.accent};
        }
        .dm__multibet_btn{
            background-color: ${c.accent};
            color: ${c.accentTxt};
        }
        .dm__live_game_notice {
            background-color: ${c.widgetBg2};
            color: ${c.widgetTxt2};
        }
        .dm__cashout_badge{
            background-color: ${c.widgetBg2};
            color: ${c.widgetTxt2};
        }
        .dm__image_header-devider{
            border-color: ${c.accent};
        }
        .dm__image_header-devider{
            color: ${c.accent};
        }
        .dm__radio-slider,
        .dm__radio-slider:after{
            background-color: #999;
        }
        .dm__radio-slider-cont .dm__radio-hide:checked+.dm__radio-slider:after{
            background-color: ${c.accent};
        }
        .dm__event_row-flags-sub,
        .dm__event_row-championships {
            background-color: ${c.widgetBg2};
            color: ${c.widgetTxt};
        }
        .dm__betslip__body,
        .dm__betslip__options__row{
            background-color: ${c.primaryBg};
            color: ${c.primaryTxt};
        }
        .dm__betslip__bet{
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt2};
        }
        .dm__betslip__bet .dm__stake_name_link {
            color: ${c.widgetTxt};
        }
        .dm__betslip__bet__factor .dm__bf,
        .dm--possible-winning-count{
            color: ${c.accent};
        }
        
        .dm__betslip_stake_trigger_text .dm__dtt__number,
        .dm__betslip_tour {
            background-color: ${c.widgetBg};
            color: ${c.accent};
        }
        
        .dm__btn--keyboard,
        .dm__btn--betslip,
        .dm__btn{
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt2};
        }
    
        /* btn */
        .dm__btn-bet,
        .dm__btn--primary,
        .dm__tournament-prize{
           background-color: ${c.accentBg}!important;
           color: ${c.accentTxt}!important;
        }
        
        /*popups*/
        .dm__popup-bg,
        .dm__custom_select__button{
            background-color: ${c.primaryBg};
            color: ${c.primaryTxt};
        }
        .dm__keyboard_trigger,
        .dm--input-imit,
        .dm--input-select,
        .dm--input,
        .dm--input-calendar input{
            background-color: ${c.widgetBg}!important;
            color: ${c.widgetTxt2}!important;
        }
        .dm-table{
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt2};
            border-bottom:1px solid ${c.primaryBg};
        }
        .dm-table .dm-table-l{
            color: ${c.primaryTxt2};
        }
        .dm-table .dm-table-r{
            color: ${c.primaryTxt};
        }
        .dm__custom_select__wrapper{
            background-color: ${c.primaryBg} !important;
            color: ${c.primaryTxt};
        }
        
        /* calendar */
        .dm__calendar-row{
            background-color: ${c.widgetBg};
            color: ${c.widgetTxt};
        }
        .dm__calendar-row.active{
            ackground-color: ${c.widgetBg2}
        }
        .dm__calendar__time {
            color: ${c.accent};
        }



        
        /*styled components part*/
        .kcvRvI {
            width: 56px;
            height: 56px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            flex-direction: column;
            flex-shrink: 0;
            position: relative;
            padding: 0px 5px;
            margin-right: 1px;
            transition: background-color 0.2s ease 0s;
            background-color: ${c.oddBg};
            color: ${c.oddTxt};
            border-radius: ${c.borderRadius}px;
        }
        .eLozvU {
            background: ${c.accentBg};
            color: ${c.accentTxt};
        }
        

      `

    style.innerHTML = css

    return css

}