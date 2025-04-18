/* logo */
function logo_loading(){
    ajax = new XMLHttpRequest();
    ajax.open("GET", "txt/logo.txt");
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            ajax_text = ajax.responseText;
            for(let n = 0;n < logo.length;n++){
                logo_w[n] = ajax_text.split('\n')[0].split('，')[n];
                logo_h[n] = ajax_text.split('\n')[1].split('，')[n];
                if(n == logo.length - 1){
                    logo_set();
                }
            }
        }
    }
    ajax.send(null);
}
function logo_set(){
    for(let n = 0;n < logo.length;n++){
        logo[n].style.cssText = "position: fixed;z-index: 2;cursor: url('cursor/jump.cur'),auto";
        logo[0].style.height = sh * 0.25 * logo_h[0] / logo_h[1] + 'px';
        logo[0].style.left = sw * 0.025 + sh * 0.25 * logo_w[1] / logo_h[1] * 350 / 387 + 'px';
        logo[1].style.height = sh * 0.25 + 'px';
        logo[1].style.left = sw * 0.025 + 'px';
        logo[2].style.height = logo[3].style.height = sh * 0.08 + 'px';
        logo[2].style.margin = logo[3].style.margin = ''+(sh * 0.01)+'px '+(sw * 0.025)+'px';
        logo[0].onclick = logo[1].onclick = function(){
            window.open('http://www.anime-chu-2.com','_blank');
        }
        logo[2].onclick = function(){
            page_change();
        }
        logo[3].onclick =  function(){
            entertainmentPageShow();
            if(pg_n == 2){
                page_change();
            }
        }
        if(pg_n == 1){
            logo[0].style.top = sh * 0.02 + sh * 0.25 * (46 / 198) + 'px';
            logo[1].style.top = sh * 0.02 + 'px';
        }
        if(pg_n == 2){
            logo[0].style.top = - sh * 0.98 + sh * 0.25 * (46 / 198) + 'px';
            logo[1].style.top = - sh * 0.98 + 'px';
        }
    }
    logoCross_move();
    rikka_set();
}
function logoCross_move(){
    logo[0].style.transformOrigin = 'left top';
    logo[0].style.animation = 'cross_move 8s infinite';
    logo[1].style.animation = 'logo_move 8s infinite';
}