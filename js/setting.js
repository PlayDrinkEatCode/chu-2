/* 设置介绍 */
function settingPageset(){
    main[1].style.cssText = 'position: fixed;z-index: 0';
    if(pg_n == 1){
        main[1].style.top = sh + 'px';
    }
    if(pg_n == 2){
        main[1].style.top = '0px';
    }
    settingPageTop.style.cssText = 'width: '+ sw +'px;height: '+ sh * 0.1 +'px;background: #FFFFFF';
    settingPageMusicControl.style.cssText = 'float:right;width: '+(sw * 0.95 - logo[2].clientWidth)+'px;height: '+ sh * 0.1 +'px;text-align: right;line-height: '+ sh * 0.1 +'px';
    settingPageMusicInformation.style.cssText = 'float:right;width: '+ sw * 0.15 +'px;font-size: '+ sw * 0.01 +'px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;cursor: url("cursor/function.cur"),auto';
    settingPageMusicBtn.style.cssText = 'height: '+ sh * 0.05 +'px;margin-top: '+ sh * 0.025 +'px;margin-right: '+ sh * 0.01 +'px;cursor: url("cursor/function.cur"),auto';
    settingPic.style.cssText = 'width:' + sw + 'px;height:' + sh * 0.9 + 'px;border: 0px';
    entertainmentPageSet();
    settingPic.contentWindow.document.onkeydown = function(){
        if(key == 190){
            page_change();
        }
    }
    settingPageMusicInformation.onclick = function(){
        entertainmentPageNow = 1;
        entertainmentPageShow();
    }
}