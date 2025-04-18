/* rikka */
function rikka_set(){
    rikka_box.style.cssText = 'position: fixed;z-index: 2;width: '+ sw +'px;text-align: center';
    if(pg_n == 1){
        rikka_box.style.top = sh * 0.25 + 'px';
    }
    if(pg_n == 2){
        rikka_box.style.top = - sh * 0.75 +'px';
    }
    rikka.style.height = sh * 0.7 + 'px';
    rikka.src = 'img/rikka/' + rikka_n + '.png';
    if(loading_state == 0){
        rikkaLoading_time = setInterval(rikka_loading,100);
    }else{
        settingPageset();
    }
}
function rikkaLoading_set(){
    if(rikka_n < 6){
        rikka_loading();
    }else{
        rikka_n = 0;
        rikka_change();
        settingPageset();
        clearInterval(rikkaLoading_time);
    }
}
function rikka_change(){
    if(rikka_n < 0){
        rikka_n = 6;
    }
    if(rikka_n > 6){
        rikka_n = 0;
    }
    rikka.src = 'img/rikka/' + rikka_n + '.png';
}
function rikka_loading(){
    if(rikka.complete == true){
        rikka_n++;
        rikka.src = 'img/rikka/' + rikka_n + '.png';
        rikkaLoading_set();
    }
}
rikka.onclick = function(){
    if(href == 2){
        if(event.pageY > sh * 0.25 && event.pageY < sh * 0.6){
            rikka_n--;
            rikka_change();
        }else{
            rikka_n++;
            rikka_change();
        }
    }
}