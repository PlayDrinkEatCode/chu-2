/* 页面模式 */
function pageMode_set(){
    /* 电脑端 */
    if(mode != 1){
        if(window.innerHeight == screen.height){
            if(window.innerWidth == screen.width){
                page_mode = 1;
            }else{
                page_mode = 2;
            }
        }else{
            page_mode = 0;
    
        }
    }
    pageSize_set();
}
/* 更换页面 */
function page_change(){
    top_n = sh / 100;
    if(pg_time == 0 && music_box_time == 0){
        if(pg_n == 1){
            pg_change = setInterval(musicBoxMove_left,10);
        }else{
            pg_change = setInterval(pageChange_down,15);
        }
    }
}
function musicBoxMove_left(){
    music_box_time++;
    cover.style.left = Number(cover.style.left.replace('px','')) - sh * 0.12 / 100 + 'px';
    music_btn_box.style.left = Number(music_btn_box.style.left.replace('px','')) - sh * 0.12 / 100 + 'px';
    if(music_box_time == 100){
        clearInterval(pg_change);
        music_box_time = 0;
        pg_change = setInterval(pageChange_up,15);
    }
}

function pageChange_up(){
    pg_time++;
    logo[0].style.top = Number(logo[0].style.top.replace('px','')) - top_n + 'px';
    logo[1].style.top = Number(logo[1].style.top.replace('px','')) - top_n + 'px';
    bg_box[0].style.top = Number(bg_box[0].style.top.replace('px','')) - top_n + 'px';
    bg_box[1].style.top = Number(bg_box[1].style.top.replace('px','')) - top_n + 'px';
    bg_box[2].style.top = Number(bg_box[2].style.top.replace('px','')) - top_n + 'px';
    bg_box[3].style.top = Number(bg_box[3].style.top.replace('px','')) - top_n + 'px';
    rikka_box.style.top = Number(rikka_box.style.top.replace('px','')) - top_n + 'px';
    main[1].style.top = Number(main[1].style.top.replace('px','')) - top_n + 'px';
    if(pg_time == 100){
        clearInterval(pg_change);
        pg_n = 2;
        pg_time = 0;
        if(pg_n == 1){
            pg_change = setInterval(musicBoxMove_right,10);
        }
    }
}
function pageChange_down(){
    pg_time++;
    logo[0].style.top = Number(logo[0].style.top.replace('px','')) + top_n + 'px';
    logo[1].style.top = Number(logo[1].style.top.replace('px','')) + top_n + 'px';
    bg_box[0].style.top = Number(bg_box[0].style.top.replace('px','')) + top_n + 'px';
    bg_box[1].style.top = Number(bg_box[1].style.top.replace('px','')) + top_n + 'px';
    bg_box[2].style.top = Number(bg_box[2].style.top.replace('px','')) + top_n + 'px';
    bg_box[3].style.top = Number(bg_box[3].style.top.replace('px','')) + top_n + 'px';
    rikka_box.style.top = Number(rikka_box.style.top.replace('px','')) + top_n + 'px';
    main[1].style.top = Number(main[1].style.top.replace('px','')) + top_n + 'px';
    if(pg_time == 100){
        clearInterval(pg_change);
        pg_n = 1;
        pg_time = 0;
        pg_change = setInterval(musicBoxMove_right,10);
    }
}
function musicBoxMove_right(){
    music_box_time++;
    cover.style.left = Number(cover.style.left.replace('px','')) + sh * 0.12 / 100 + 'px';
    music_btn_box.style.left = Number(music_btn_box.style.left.replace('px','')) + sh * 0.12 / 100 + 'px';
    if(music_box_time == 100){
        clearInterval(pg_change);
        music_box_time = 0;
    }
}