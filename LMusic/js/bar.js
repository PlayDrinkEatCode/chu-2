function barSet(){
    bar.id = 'bar';
    controlBox.appendChild(bar);
    bufferedBar.id = 'bufferedBar';
    bar.appendChild(bufferedBar);
    currentTimeBar.id = 'currentTimeBar';
    bufferedBar.appendChild(currentTimeBar);
    userSetBar.id = 'userSetBar';
    currentTimeBar.appendChild(userSetBar);
    bar.onmousedown = function(event){
        if(music[musicNow].readyState == 4 && musicTimeState == 1){
            mouse = event;
            moveBar = 1;
            barReSet();
        }
    }
    document.addEventListener('mousemove',function(event){
        if(moveBar == 1 && musicTimeState == 1){
            mouse = event;
            barReSet();
        }
    });
    document.addEventListener('mouseup',function(event){
        if(moveBar == 1 && musicTimeState == 1){
            mouse = event;
            moveBar = 0;
            barReSet();
            timeReSet(); 
        }
    });
    textBoxSet();
}/* 进度条设置 */

function barCssSet(){
    Object.assign(bar.style,{
        transform: 'translateX(' + introduceBox.offsetLeft + 'px)',
        borderRadius: controlBoxHeight * 0.075 + 'px',
        backgroundColor: '#C8C8FA',
        overflow: 'hidden',
        width:  (width - btnBox.offsetWidth) * 0.4 + 'px',
        height: controlBoxHeight * 0.15 + 'px'
    });
    Object.assign(bufferedBar.style,{
        borderRadius: controlBoxHeight * 0.075 + 'px',
        backgroundColor: '#99CCFF',
        width: (music[musicNow])?(music[musicNow].buffered.length == 0?'0px':music[musicNow].buffered.end(music[musicNow].buffered.length - 1) / allTime * bar.offsetWidth + 'px'):0,
        height: '100%'
    });
    currentTimeBar.style.borderRadius = userSetBar.style.borderRadius = controlBoxHeight * 0.075 + 'px';
    if(musicBug[musicNow] != 2){
        currentTimeBar.style.width = (nowTime == 0?'0px':nowTime / allTime * bar.offsetWidth + 'px');
        userSetBar.style.width = '0px';
    }
}/* 进度条样式设置 */

function barReSet(){
    barWidth = mouse.clientX - introduceBox.offsetLeft;
    barWidth > bar.offsetWidth?barWidth = bar.offsetWidth:0;
    barWidth < 0?barWidth = 0:0;
    if(moveBar){
        userSetBar.style.width = barWidth + 'px';
    }else{
        userSetBar.style.width = '0px';
        currentTimeBar.style.width = barWidth + 'px';
    }
    needTime = barWidth / bar.offsetWidth * allTime;
    (needMinute = Math.floor(needTime / 60)) < 10?needMinute = '0' + needMinute:0;
    (needSecond = Math.floor(needTime % 60)) < 10?needSecond = '0' + needSecond:0;
    nowMinuteBox.innerHTML = needMinute;
    nowSecondBox.innerHTML = needSecond;
}/* 进度条样式重新设置 */

JavaScript.add('js/music.js');