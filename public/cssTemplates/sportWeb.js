function createCss(c){
    
    let css = `
    /*${c.fileName} skinning*/
  
    /*coupon*/
    .tg_widget_bg_2, .tg--cashout-body, .tg__cashout_popup{
        background-color: ${c.betSlipBg2};
        color: ${c.betSlipTxt2};
    }
    .stake_item_panel{
      background: ${c.betSlipG};
      color: ${c.betSlipTxt2};
      border-color: ${c.betSlipBg};
    }
    .coupon_sport_name_container{
      color: ${c.betSlipTxt};
    }
    /*input inside widgetBg3*/
    .tg_widget_bg_2 .tg_input,
    .tg_widget_bg_2 .tg__dropdown_coupon{
      background-color: ${c.betSlipBg2};
      color: ${c.betSlipTxt2};
    }
    .tg__btn-coupon{
      background-color: ${c.betSlipTxt2};
      color: ${c.betSlipBg};
    }
    .tg__btn-coupon:hover{
      background-color: ${c.betSlipTxt};
      color: ${c.betSlipBg};
    }
    .tab_cupon{
      background-color: ${c.betSlipBg2};
      color: ${c.betSlipTxt2};
    }
    .tab_cupon.tab_selected,
    .tab_cupon:hover {
      background-color: ${c.betSlipBg};
      color: ${c.betSlipTxt};
    }
    .tg__coupon_factor,
    .tg__coupon_square{
      background-color: ${c.betSlipBg};
      color: ${c.betSlipTxt};
    }
  
    /*input inside widgetBg*/
    .tg_widget_bg .tg_input{
      background-color: ${c.widgetBg2};
      color: ${c.widgetTxt2};
    }
    /*mainBg*/
    .tg_bg,
    .tg__modal_close,
    .tg--close,
    .tg__info_panel .selector_panel {
        background-color: ${c.primaryBg};
        color: ${c.primaryTxt};
    }
    .tg__live_filter_item.checked{
      background-color: ${c.widgetBg};
      color: ${c.widgetTxt};
    }
    .gameContentTitle.tg_widget_header{
      background: ${c.headerG};
      color: ${c.headerTxt};
    }
    .gameContentTitle.tg_widget_header .tg-ico-arrow{
      color: ${c.headerTxt};
    }
  
    .tg_widget_heading{
        background: ${c.subHeaderG};
        color: ${c.subHeaderTxt};
    }
  
      /*sidebar*/
    .tg_sidebar_bg{
      background-color:${c.widgetBg};
    }
    .tg__left_menu_item{
      background:${c.widgetG};
      color:${c.widgetTxt};
    }
    .tg__left_menu_item:hover{
      background:${c.widgetBgHov};
    }
    .tg_sidebar_bg_2{
      background-color: ${c.widgetBg2};
      color: ${c.widgetTxt};
    }
    .tg_sidebar_bg_2:hover{
      background-color: ${c.widgetBg2Hov};
    }
    .tg_sidebar_bg_3{
      background-color: ${c.widgetBg3};
      color: ${c.widgetTxt};
    }
    .tg_sidebar_bg_3:hover{
      background-color: ${c.widgetBg3Hov};
    }
    .tg__left_menu_item.tg__left_menu_item-active,
    .tg_sidebar_bg_3.left_menu_line_active,
    .liveGameSelected .tg_sidebar_bg_3{
      background:${c.accentBg};
      color:${c.accentTxt};
    }
    .tg__left_menu_item.tg__left_menu_item-active .tg_sidebar_text_akcent,
    .liveGameSelected .tg_sidebar_bg_3 .tg_sidebar_text_akcent,
    .left_menu_line_active .tg_sidebar_text_akcent{
      color:${c.accentTxt};
    }
    .tg_sidebar_text_akcent,
    .tg-bg_transparent .teamName,
    .tg-bg_transparent .tg_team_name,
    .tg__open_event_img .tg-clr-akcent2.tg_score{
      color: ${c.accentBg};
    }
    
    /*end of sidebar*****************************************/
  
    .sportHeaderPaneUpperRow,
    .sportHeaderPaneLowerRow,
    .tg__footer {
      background-color: ${c.widgetBg};
      color: ${c.widgetTxt};
    }
    .tg__coupon_tabs_cont {
      padding-bottom: 5px;
    }
    .tg--issue {
      background-color: #fff;
      color: #000;
    }
    .tg__text_with_shadow{
        text-shadow:none;    
    }
    .tg__match_item{
      padding:0;
    }
    .tg__left_menu_item,
    .live_menu_item_left{
      margin-bottom: 0;
    }
    .tsModalContent,
    .tg__dropdown_content,
    .tg__modal_big,
    .tg--express_combination{
      -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
      box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.2);
    }
    .tg__banner__date{
      color: ${c.primaryTxt2};
    }
    
    .tg__submenu__item{
      padding: 0 8px;
      background: ${c.widgetBg};
      color: ${c.widgetTxt};
      height: 36px;
      line-height: 36px;
      border-radius: ${c.borderRadius}px;
    }
    .tg__submenu__item.active,
    .tg__submenu__item:hover{
      background: ${c.brandBg};
      color: ${c.brandTxt};
    }
    
    .tg_team_name,
    .tg__open_event_img .title {
      color: ${c.widgetTxt2};
    }
    .tab_selector{
        background-color: ${c.primaryBg};
        color: ${c.primaryTxt2};
    }
    
    .ss__step_slider .ss__ruller > div.off{
      background-color: ${c.primaryBg};
    }
    #line_tabs .selectorWrapper, #live_tabs_header .selectorWrapper{
        background-color: ${c.primaryBg};
    }
  
    .tg__banner__heading,
    .tg__one_game_team,
    .tg__open_event_img .tg_score {
      color: ${c.widgetTxt};
    }
    
    .tab_selector.tab_selector_active,
    .tab_selector:hover{
      background: ${c.tabG};
      color: ${c.tabTxt};
    }
    
    .tg__step_slider,
    .tg_widget_bg,
    .tg_subheader_btn{
      background-color: ${c.widgetBg};
      color: ${c.widgetTxt2};
    }

    .tg__one_game{
      background: ${c.widgetG};
      color: ${c.widgetTxt2};
    }
    
    .tg_widget_row {
          border-bottom: 1px solid ${c.primaryBg};
    }
    .tg__match_item_stake,
    .tg--pos_comb_row,
    .tg__coupon_switches .tg__switch_cont,
    .tg--border-bot-1{
        border-color: ${c.primaryBg};
    }
  
    /*sidebar*/
    .tg_sidebar_bg_2.tg__step_slider{
        background-color: ${c.subHeaderBg};
        color: ${c.subHeaderTxt};
    }
    .ss__step_slider .ss__slider,
    .ss__step_slider .ss__ruller > div{
        background: currentColor;
    }
  
    .tg_widget_header{
      background-color: ${c.headerBg};
      color: ${c.headerTxt};
    }
    .tg_widget_header .tg-ico-arrow{
      color: ${c.headerTxt};
    }
  
    .tg_widget_sub_row,
    .tg__dropdown_value,
    .tg__input,
    .tg_input,
    .tg__input-ico,
    .posCombItem,
    .tg__slider__btn:hover,
    #calc_new .tg__btn {
          background-color: ${c.widgetBg2};
          color: ${c.widgetTxt2};
    }
    .tg_input_coupon_amount{
      color:${c.widgetTxt};
    }
    .tg__dropdown__item{
      border-bottom:1px solid ${c.primaryBg};
      margin-bottom:0;
    }
    .tg__dropdown__item:hover,
    .tg__dropdown__item.activeItem{
      color:${c.widgetTxt};
    }
    .tg__dropdown_content{
        background-color: ${c.widgetBg2};
          color: ${c.widgetTxt2};
    }
    .tg__subhead .tg__dropdown_value {
        background-color: ${c.widgetBg};
    }
    .tg__input,
    .tg_input,
    .tg__btn{
      transition: all 0.2s;
    }
    .tg__input:focus,
    .tg_input:focus{
      outline: 0;
      box-shadow: 0 0 0 2px ${c.primaryBgTransparent};
    }
    .tg__modal_wrapper{
      background-color: ${c.primaryBgTransparent};
    }
    .tg-ico-date{
      color: ${c.widgetTxt};
    }
    .tg__score_box{
        background-color: ${c.primaryBg};
    }
    .tg__more{
      background-color: ${c.showMoreG};
      color: ${c.showMoreTxt};
    }
    .tg__more:hover{
        background-color: ${c.showMoreG};
        color: ${c.accentBg};
    }
    .tg_widget_header_2, .tg--cashout-row,
    .tg--cashout-pagination-item,
    .tg--coupon-container .selector_panel,
    .tg__info_panel .selectorWrapper,
    .tg__match_header.tg_widget_header,
    .tg__prematch_header.tg_widget_bg,
    .lineEventHeaderWide.tg_widget_bg,
    .tg__live_list_header.tg_widget_header,
    .tg__multiview_header.tg_widget_header,
    .tg__calendar_header.tg_widget_heading,
    .tg__results_header.tg_widget_bg      
     {
        background-color: ${c.headerBg};
        color: ${c.headerTxt};
     }
     .tg__multiview_header.tg_widget_header .tg__one_game_team{
      color: ${c.headerTxt};
     }
  
     .tg_widget_header_2 .tab_selector_active{
        background: ${c.tabG} !important;
        color: ${c.tabTxt} !important;
     }
    .l_od,
    .l_od_empty{
          background: ${c.oddG};
          color: ${c.oddTxt};
    }
    .l_od:hover,
    .odCnt:hover .l_od,
    .l_od.selectedOdd, .tg--cashout-item-cashout, .tg--cashout-pagination-item.active{
      background: ${c.brandG};
      color: ${c.brandTxt};
    }
    .tab_selector.tab_selector_active .tg__badge_live{
      background-color: #CB0000;
      color: #fff;
    }
    .tab_selector .tg__badge_live{
      background-color: ${c.widgetBg};
      color: ${c.widgetTxt2};
    }
    .tg_widget_tab_text,
    .tg__srv{
      color: ${c.brandBg};
    }
    .tg__fix_btn{
      color: ${c.headerTxt};
    }
    .tg_widget_bg_2 .selectorWrapper .tg__fix_btn{
      color: ${c.headerTxt};
    }
    .tg_widget_bg_2 .tg__fix_btn{
      color: ${c.primaryTxt};
    }
    .tg_widget_bg_2 .tg__dropdown_value{
      background-color: ${c.betSlipBg2};
      color: ${c.betSlipTxt};
    }
    .tg_widget_text_akcent{
      color: ${c.accentBg};
    }
    .tg__fix_btn.checked{
      color: ${c.headerTxt};
    }
     .tg_widget_bg .tg-ico.active{
      color: ${c.accentBg} !important;
     }
    #calc_new .tg__btn-ternary,
    .tg__btn-ternary{
      background: ${c.brandG};
      color: ${c.brandTxt};
    }
    .tg_widget_bg .tg__btn .tg-ico{
      color: ${c.brandTxt};
    }
    #calc_new .tg__btn-ternary:hover,
    .tg__btn-ternary:hover{
      background-color: ${c.brandBg2};
      color: ${c.brandTxt};
    }
    .digi_scroll_dragger{
      background-color: ${c.accentBg};
    }
      
    .tg_widget_row .tg__one_game_icons, 
    .tg_widget_row .tg__home_game_time,
    .tg-ico-arrow{
      color: ${c.widgetTxt2};
    }
    .tg-bg_transparent{
      background-color: ${c.primaryBgTransparent};
    }
    .tg__switch .tg__switch_ico{
      background-color: ${c.primaryBg};
    }
    .tg__switch .tg__switch_ico:before{
      background-color: ${c.widgetBg};
    }
    .tg__switch input:checked + .tg__switch_ico:before{
      background: ${c.brandG};
    }
    /*calendar*/
    .ui-widgetBg-content {
      border: none;
      background: ${c.widgetBg2};
      color: ${c.widgetTxt2};
    }
    .ui-widgetBg-header {
      border: none;
      background: ${c.widgetBg2};
      color: ${c.widgetTxt2};
    }
    .ui-state-default, .ui-widgetBg-content .ui-state-default, .ui-widgetBg-header .ui-state-default {
      border: none;
      background: ${c.widgetBg3};
      color: ${c.widgetTxt2};
    }
    .ui-state-highlight, .ui-widgetBg-content .ui-state-highlight, .ui-widgetBg-header .ui-state-highlight {
      border: none;
      background: ${c.brandG};
      color: ${c.brandTxt};
    }
    .ui-state-active, .ui-widgetBg-content .ui-state-active, .ui-widgetBg-header .ui-state-active {
      border: none;
      background-color: ${c.brandBg2};
      color: ${c.brandTxt};
    }
    /*calendar end*/
     
    /*border radius (roundness)*/
    .tab_selector_active, .tab_selector:hover{
        border-radius: ${c.borderRadius}px ${c.borderRadius}px 0 0;
    }
    .tg__btn,
    .l_od_empty,
    .l_od,
    .tg__dropdown_value,
    .tg__dropdown_content,
    .tg__input,
    .tg_input{
      border-radius: ${c.borderRadius}px;
    }
  
    @keyframes lightbox {
      from {
          color: ${c.widgetTxt};
      }
  
      to {
          color: ${c.brandBg}
      }
    }
  
    .tg__tournament_ico_switch .tg__switch_text:before {
      content: 'ÿ';
      background: none;
      font-family: TotoFont;
      font-size: 38px;
      line-height: 16px;
      color: ${c.brandBg}
    }
  
    .tg_coin {
      background: ${c.brandG};
      color: ${c.brandTxt};
    }
    
    .tg__match_item_btn {
        background-color: ${c.primaryBg};
        color: ${c.primaryTxt};
    }
    
    .overviewEventSlider .tg__btn_arrow {
      background-color: ${c.headerBg};
      color: ${c.headerTxt};
    }
    
    .sportLeftPane .liveFilterContainer{
      background-color: ${c.primaryBg};
      color: ${c.primaryTxt};
    }
  
    /* Bet history */
    .tg__modal_big {
      top: 30px;
    } 
    .tg__bet_history_row .tg-clr-akcent, 
    .tg__list_row_sub .tg-clr-akcent2,
    .tg__partial_cashout--icon,
    .tg-ico-cheque_redact.tg-clr-akcent2{
      color: ${c.accentBg};
    }
    .tg__bet_history .tg__list_row.tg_sticky_bot {
      background-color: ${c.primaryBg};
    }
    
      /* book a bet skinning */
    .tg__modal_book_bet {
        top: 150px;
        background-color: ${c.widgetBg};
        color: ${c.widgetTxt2};
    }
    .tg__modal_book_bet .tg__modal_header{
        background-color: ${c.headerBg};
        color: ${c.headerTxt};
    }
    .tg__modal_book_bet .tg__list_bg{
        background-color: ${c.primaryBg};
    }
    .tg__modal_book_bet .tg__list_row {
        background-color: ${c.widgetBg2};
    }
    .tg__modal_book_bet .tg__list_row:nth-child(even) {
        background-color: ${c.widgetBg};
    }
    .tg__modal_book_bet .tg__border--color-akcent{
        border-color: ${c.brandBg};
    }
    .tg__modal_book_bet .tg-clr-akcent{
        color: ${c.brandBg};
    }
    
     /* Right banner styles */
    .tg__custom_rightBanner_line,
    .tg__custom_rightBanner_desc {
        border-top-color: ${c.brandBg};
    }
    .tg__rightBanner_seeMore {
       background: ${c.brandG};
       color: ${c.brandTxt};
    }
  
    .component_tax_data {
      background-color: ${c.primaryBg};
      color: ${c.widgetTxt2};
    }
    .component_tax_data .tg-ico {
        color:${c.accentBg};
    }
    .component_tax_data_wrapper .component_tax_data_row strong {
      color: ${c.widgetTxt};
    }
    
    .tg__show_title[data-title]:hover:after {
      background-color: ${c.primaryBg};
      color: ${c.widgetTxt};
    }
  
    .tg_badge_transparent{
      background-color:rgba(0,0,0,0.5);
      color:#fff;
    }
  
    .tg__coupon_switches {
      border-bottom: 1px solid ${c.primaryBg};
    }
  
  
  
    /*paper view skinning*/
  
      /*paper view headers bg*/
      .paperView .es__home_bet_header,
      .paperView .es__live_page .es__text_heading,
      .paperView .es__event_detail_header {
          background: ${c.headerG};
          color: ${c.headerTxt};
      }
  
      /*paper view widgetBg bg*/
      .paperView .es__home_bet_item,
      .paperView .es--Live_page_collapse_panel,
      .paperView .es__live_sub_item_event,
      .paperView .es__home_one_game,
      .paperView .es__home_bet_show_hide,
      .paperView .es__event_row,
      .paperView .es--live_ingame_odds_cont,
      .paperView .es__fixed_panel,
      .paperView .es__event_detail_item,
      .paperView .es__paper_odds,
      .paperView .es__home_bet_item .es__event_row,
      .paperView .es__home_bet_item .es__home_tab,
      .paperView .es__home_bet_item .tab_selector,
      .paperView .live_tabs_header .selectorWrapper {
          background: ${c.widgetBg};
          color: ${c.widgetTxt};
      }
  
  
      .paperView .es__home_bet_item .tab_selector.tab_selector_active,
      .paperView .es__home_bet_item .tab_selector:hover,
      .paperView .es__home_bet_item .es__event_subhead,
      .paperView .es__paper_name,
      .paperView .es__filter_container {
          background: ${c.subHeaderBg};
          color: ${c.subHeaderTxt};
      }
  
      .paperView .es__filter_container .tg__dropdown_value{
        background: ${c.widgetBgHov};
        color: ${c.widgetTxt};
      }
  
      .paperView .es__event_subhead,
      .paperView .es--live_tabular_sub_row {
          background: ${c.widgetBg2};
          color: ${c.widgetTxt2};
      }
  
      .paperView .es__home_one_game_header{
         background: ${c.widgetBg2};
         color: ${c.widgetTxt};
      }
  
      /*paper view headers bg*/
      .paperView .es__expanded_heading,
      .paperView .es__live_expanded_row,
      .paperView .es__expanded_info_left,
      .paperView .es__paper_name,
      .paperView .es__header_with_border,
      .paperView .es__event_sub_row {
          background: ${c.widgetBg3};
          color: ${c.widgetTxt2};
      }
  
      /*paper view border bg*/
      .paperView .stakeContainer + .stakeContainer,
      .paperView .es__live_expanded_row + .es__live_expanded_row,
      .paperView .EU-li-cont + .EU-li-cont,
      .paperView .es__paper_name,
      .paperView .es__live_page .es__expanded_info_cont,
      .paperView .es__header_with_border,
      .paperView .es__home_row + .es__home_row,
      .paperView .es--live_sport_row_cont,
      .paperView .es__filter_container,
      .paperView .paper_home_games_wrapper > div > div + div {
          border-color: ${c.primaryBg};
      }
  
      /*paper view odds*/
      .paperView .component_odd_empty,
      .paperView .component_odd,
      .paperView .component_odd.selectedOdd{
          background-color: ${c.oddBg};
          color: ${c.oddTxt};
      }
      .paperView .component_odd:hover,
      .paperView .component_odd_empty:hover,
      .paperView .EUodds:hover,
      .paperView .EUodds.selectedOdd,
      .paperView .component_odd.selectedOdd {
          background: ${c.brandG};
          color: ${c.brandTxt};
      }
  
      .paperView .es__show_more_btn .tg__chb_text {
        background: ${c.brandG};
        color: ${c.brandTxt};
        height: 36px;
        line-height: 36px;
        border-radius: ${c.borderRadius}px;
      }
      .paperView .es__show_more_btn .tg__chb_text:hover {
        background: ${c.brandBg2};
        color: ${c.brandTxt};
      }
  
  
      /*temp*/
      .sportHeaderPaneUpperRow,
      .sportHeaderPaneLowerRow,
      .tg__footer  {
        display:none;
      }
  
  
  ${c.makeTournamentBackground ? `
  /*make tournament icons visible on bright background*/
    [class^='digi_tournament_']:before,
    [class*=' digi_tournament_']:before {
      border-radius: 3px;
      border: 2px solid ${c.widgetBg3};
      box-sizing: content-box;
      background-repeat: no-repeat;
      background-color: ${c.widgetBg2};
  }` : ``}


  `

    style.innerHTML = css

    return css

}