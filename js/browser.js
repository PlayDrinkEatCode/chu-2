browser_set();
/* 浏览器信息 */
function browser_set(){
    if(browserVersion.indexOf('Mobile') == -1){
        if(browserVersion.indexOf('Trident') != -1){
            document.body.style.fontSize = '20px';
            document.body.innerHTML = '抱歉，本网站不支持Teident内核的浏览器！<br>如果你使用的是双核浏览器，请切换到Chromium内核！<br>如果你使用的是IE浏览器或旧版的Edge浏览器，建议你前往下载、使用最新版<a href="https://www.microsoft.com/zh-cn/edge" target="_blank">Edge浏览器</a>！<br>站长还推荐你下载、使用以下浏览器：<br><a href="https://www.google.cn/chrome/" target="_blank">Chrome浏览器</a><br><a href="http://www.firefox.com.cn/" target="_blank">Firefox浏览器</a><br>谢谢你的配合！';
            throw SyntaxError();
        }
    }else{
        mode = 1;
    }
    pageMode_set();
}