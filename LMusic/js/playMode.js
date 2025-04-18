function playModeBtnBoxSet(){
    playModeBtnBox.id = 'playModeBtnBox';
    controlBox.appendChild(playModeBtnBox);
    playModeBtn.id = 'playModeBtn';
    playModeBtnBox.appendChild(playModeBtn);
    if(loading == 0){
        playModeBtnSet();
    }
    playModeBtnBox.onclick = function(){
        playMode++;
        playModeBtnSet();
        if(musicPlay == 1 && music[musicNow].currentTime == music[musicNow].duration){
            musicReadySet();
        }
    }
    volumeBoxSet();
}/* 播放模式按钮容器设置 */

function playModeBtnBoxCssSet(){
    Object.assign(playModeBtnBox.style,{
        margin: controlBoxHeight * 0.19 + 'px 0px 0px ' + width * 0.01 + 'px',
        width: controlBoxHeight * 0.42 + 'px',
        height: controlBoxHeight * 0.42 + 'px',
        padding: controlBoxHeight * 0.08 + 'px',
        border: controlBoxHeight * 0.04 + 'px #FFCCFF solid',
        borderRadius: controlBoxHeight * 0.66 + 'px'
    });
    playModeBtn.style.width = controlBoxHeight * 0.42 + 'px';
}/* 播放模式按钮样式设置 */

function playModeBtnSet(){
    playMode > 2?playMode = 0:0;
    playModeBtn.src = (playMode == 0?buttonAddress[4]:(playMode == 1?buttonAddress[5]:(playMode == 2?buttonAddress[6]:0)));
}/* 播放模式按钮设置 */

JavaScript.add('js/time.js');