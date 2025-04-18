/* 分辨率信息 */
function pageSize_set(){
    /* 电脑端 */
    if(mode != 1){
        sw = window.innerWidth;
        sh = window.innerHeight;
        wh = sw / sh;
        loading_set();
    }
    /* 移动端 */
    else{
        if(window.location.href.split('?')[1] == '2'){
            sw = window.parent.sw;
            sh = window.parent.sh;
            loading_set();
        }else{
            document.body.style.overflow = 'hidden';
            if(window.orientation == 0 || window.orientation == 180){
                sw = window.innerWidth;
                sh = window.innerWidth / 9 * 6;
                document.body.innerHTML = '<iframe src="/?2" style="padding: 0px;border: 0px;"></iframe>' + '你可能使用的是手机浏览器，当前为窄屏浏览，显示比例为3：2，建议你用宽屏浏览，以获得更好的体验！';
            }else{
                sw = window.innerWidth;
                sh = window.innerHeight;
                document.body.innerHTML = '<iframe src="/?2" style="padding: 0px;border: 0px;"></iframe>';
            }
            document.getElementsByTagName('iframe')[0].style.width = sw + 'px';
            document.getElementsByTagName('iframe')[0].style.height = sh + 'px';
        }
    }
    wh = sw / sh;
}

window.onresize = function(){
    if(mode != 1){
        console.log = function(){};
        reloading();
    }
}
window.onorientationchange = function(){
    window.location.href = window.location.href;
}
function reloading(){
    loadingBox.style.display = 'block';
    loading_time_n = 2;
    pageMode_set();
}