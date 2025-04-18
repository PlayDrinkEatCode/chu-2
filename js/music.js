/* 音乐 */
function musicSet(){
    cover.style.cssText = 'width:' + sh * 0.1 + 'px;height:' + sh * 0.1 + 'px';
    music_btn_box.style.cssText = 'left: ' + sh * 0.025 + 'px;bottom: ' + sh * 0.025 + 'px;height: ' + sh * 0.05 + 'px';
    music_btn.style.height = sh * 0.05 + 'px';
    if(pg_n == 2){
        cover.style.display = music_btn_box.style.display = 'none';
    }
    musicPageSet();
}
function musicPageSet(){
    musicPage.style.cssText = 'width:' + sw + 'px;height:' + sh * 0.9 + 'px;border: 0px';
    jigsawPuzzlePageSet();
}
function musicPlay(){
    music_btn.src = settingPageMusicBtn.src = musicPage.contentWindow.btn[1].src;
    settingPageMusicInformation.innerHTML = settingPageMusicInformation.title = '正在播放：' + musicPage.contentWindow.musicAllName[musicPage.contentWindow.musicNow];
}
function coverChange(){
    cover.src = musicPage.contentWindow.cover.src;
}
settingPageMusicBtn.onclick = music_btn.onclick = function(){/* 音乐播放器的按键 */
    musicPage.contentWindow.btn[1].click();
}