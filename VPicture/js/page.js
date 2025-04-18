/* 页面尺寸信息获取 */
function PSG(){
    width = window.innerWidth;
    height = window.innerHeight;
    STL();
}
window.onresize = function(){
    PSG();
}
/* 禁止鼠标右键的默认事件 */
document.oncontextmenu = function(){
    return false;
}
/* 右键菜单 */
document.body.onmousedown = function(event){
    if(event.button == 2){
        if(event.clientY + TB.clientHeight < height){
            TB.style.marginTop = event.clientY + 'px';
        }else{
            TB.style.marginTop = event.clientY - TB.clientHeight + 'px';
        }
        if(event.clientX + TB.clientWidth < width){
            TB.style.marginLeft = event.clientX + 'px';
        }else{
            TB.style.marginLeft = event.clientX - TB.clientWidth + 'px';
        }
        TBC.style.margin = '0px';
    }
}
function SO(){
    PSS();
    PSC();
    PAS();
    document.body.style.cursor = CS[0];
    img = document.getElementsByTagName('img');
    for(let n = 0;n < img.length;n++){
        img[n].ondragstart = function(){
            return false;
        }
    }
    /* 演示版本 */
    if(window.parent.projectLoading != 1 && window.parent.name == 'showPage'){
        window.parent.BSW = window;
        window.parent.firstIframe = mainBody;
        window.parent.projectLoading = 1;
        window.parent.messageSet();
    }
    /* 演示版本 */
    loading = 1;
}