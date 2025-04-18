/* 静止鼠标右键 */
document.oncontextmenu = function(){
    return false;
}
/* 禁止图片拖拽 */
for(let n = 0;n < document.getElementsByTagName('img').length;n++){
    document.getElementsByTagName('img')[n].ondragstart = function(){
         return false;
    }
}
/* 按键事件 */
document.onkeydown = function(){
    key = event.keyCode;
    if(key == 37){
        if(music_mode == 0){
            if(pg_n == 1){
                rikka_n--;
                rikka_change();
            }
        }else{
            musicPage.contentWindow.btn[0].click();
        }
    }
    if(key == 39){
        if(music_mode == 0){
            if(pg_n == 1){
                rikka_n++;
                rikka_change();
            }
        }else{
            musicPage.contentWindow.btn[2].click();
        }
    }
    
    if(key == 38 && pg_n == 1 && entertainmentPageShowN == 0){
        bg_change_n = 0;
        if(left_time == 0){
            background_change();
        }
    }
    if(key == 40 && pg_n == 1 && entertainmentPageShowN == 0){
        bg_change_n = 1;
        if(left_time == 0){
            background_change();
        }
    }
    /* M键 */
    if(key == 77){
        if(music_mode == 0){
            music_mode++;
        }
        else{
            music_mode--;
        }
    }
    /* P键 */
    if(key == 80){
        entertainmentPageShow();
    }
    
    if(key == 32){
        musicPlay();
        return false;
    }

    if(key == 190 && pg_n == 1 && entertainmentPageShowN == 0){
        page_change();
    }
    if(key == 188 && pg_n == 2 && entertainmentPageShowN == 0){
        page_change();
    }
}
document.addEventListener("touchstart", function(e){
    if(href == 2){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }
});
document.addEventListener("touchend", function(e){
    if(href == 2){
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        if(startx - endx > sw * 0.5 || endx - startx > sw * 0.5){
            musicPage_show();
        }else if(starty - endy > sh * 0.5 || endy - starty > sh * 0.5){
            page_change();
        }
    }
});