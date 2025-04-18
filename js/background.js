/* 背景 */
function background_information(){
    ajax = new XMLHttpRequest();
    ajax.open("GET", "txt/background.txt");
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){        
            ajax_text = ajax.responseText;
            for(let n = 0;n < bg.length;n++){
                bg_wh[n] = ajax_text.split('\n')[0].split('，')[n] / ajax_text.split('\n')[1].split('，')[n];
                if(n == bg.length - 1){
                    background_set();
                }
            }
        }
    }
    ajax.send(null);
}
function background_set(){
    for(let n = 0;n < bg_box.length;n++){
        bg_box[n].style.cssText = 'width:' + sw + 'px;height:' + sh + 'px';
        bgSetOver();
        if(wh > bg_wh[n]){
            bg[n].style.width = sw + 'px';
            bg[n].style.height = 'auto';
        }else{
            bg[n].style.width = 'auto';
            bg[n].style.height = sh + 'px';
        }
        if(pg_n == 1){
            bg_box[n].style.top = '0px';
        }
        if(pg_n == 2){
            bg_box[n].style.top = - sh + 'px';
        }
    }
    left_n = sw / 100;
    logo_loading();
}
/* 更改背景 */
function background_change(){
    if(bg_change_n == 0){
        switch(bg_n){
            case 0:
                bg_box[0].style.left = '0px';
                bg_box[1].style.left = - 3 * sw + 'px';
                bg_box[2].style.left = - 2 * sw + 'px';
                bg_box[3].style.left = - sw + 'px';
                break;
            case 1:
                bg_box[0].style.left = - sw + 'px';
                bg_box[1].style.left = '0px';
                bg_box[2].style.left = - 3 * sw + 'px';
                bg_box[3].style.left = - 2 * sw + 'px';
                break;
            case 2:
                bg_box[0].style.left = - 2 * sw + 'px';
                bg_box[1].style.left = - sw + 'px'; 
                bg_box[2].style.left = '0px';
                bg_box[3].style.left = - 3 * sw + 'px';
                break;
            case 3:
                bg_box[0].style.left = - 3 * sw + 'px';
                bg_box[1].style.left = - 2 * sw + 'px';
                bg_box[2].style.left = - sw + 'px'; 
                bg_box[3].style.left = '0px';
        }
        bg_n--;
        bg_left = setInterval(backgroundChange_up,20);
    }else{
        bg_n++;
        bg_left = setInterval(backgroundChange_down,20);
    }
    if(bg_n > 3){
        bg_n = 0;
    }
    else if(bg_n < 0){
        bg_n = 3;
    }
}
function backgroundChange_up(){
    left_time++;
    bg_box[0].style.left = Number(bg_box[0].style.left.replace('px','')) + left_n + 'px';
    bg_box[1].style.left = Number(bg_box[1].style.left.replace('px','')) + left_n + 'px';
    bg_box[2].style.left = Number(bg_box[2].style.left.replace('px','')) + left_n + 'px';
    bg_box[3].style.left = Number(bg_box[3].style.left.replace('px','')) + left_n + 'px';
    if(left_time == 100){
        bgSetOver();
    }
}
function backgroundChange_down(){
    left_time++;
    bg_box[0].style.left = Number(bg_box[0].style.left.replace('px','')) - left_n + 'px';
    bg_box[1].style.left = Number(bg_box[1].style.left.replace('px','')) - left_n + 'px';
    bg_box[2].style.left = Number(bg_box[2].style.left.replace('px','')) - left_n + 'px';
    bg_box[3].style.left = Number(bg_box[3].style.left.replace('px','')) - left_n + 'px';
    if(left_time == 100){
        bgSetOver();
    }
}
function bgSetOver(){
    if(left_time == 100){
        clearInterval(bg_left);
        left_time = 0;
    }
    switch(bg_n){
        case 0:
            bg_box[0].style.left = '0px';
            bg_box[1].style.left = sw + 'px';
            bg_box[2].style.left = 2 * sw + 'px';
            bg_box[3].style.left = 3 * sw + 'px';
            break;
        case 1:
            bg_box[0].style.left = 3 * sw + 'px';
            bg_box[1].style.left = '0px';
            bg_box[2].style.left = sw + 'px';
            bg_box[3].style.left = 2 * sw + 'px';
            break;
        case 2:
            bg_box[0].style.left = 2 * sw + 'px';
            bg_box[1].style.left = 3 * sw + 'px'; 
            bg_box[2].style.left = '0px';
            bg_box[3].style.left = sw + 'px';
            break;
        case 3:
            bg_box[0].style.left = sw + 'px';
            bg_box[1].style.left = 2 * sw + 'px'; 
            bg_box[2].style.left = 3 * sw + 'px'; 
            bg_box[3].style.left = '0px';
    }
}
rikka_box.onclick = function(){
    if(href == 2 && left_time == 0){
        if(event.pageX < (sw - rikka.clientWidth) / 2 && event.pageY > sh * 0.25 && event.pageY < sh * 0.75){
            bg_change_n = 0;
            background_change();
        }else if(event.pageX > (sw - rikka.clientWidth) / 2 + rikka.clientWidth && event.pageY > sh * 0.25 && event.pageY < sh * 0.75){
            bg_change_n = 1;
            background_change();
        }
    }
}