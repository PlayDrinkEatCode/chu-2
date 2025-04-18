function timeBoxSet(){
    nowMinuteBox.id = 'nowMinuteBox';
    nowMinuteBox.maxLength = 4;
    nowMinuteBox.innerHTML = nowSecondBox.innerHTML = '00';
    nowMinuteBox.contentEditable = nowSecondBox.contentEditable = 'true';
    controlBox.appendChild(nowMinuteBox);
    nowTimeSplitBox.id = 'nowTimeSplitBox';
    nowTimeSplitBox.innerHTML = ':';
    controlBox.appendChild(nowTimeSplitBox);
    nowSecondBox.id = 'nowSecondBox';
    controlBox.appendChild(nowSecondBox);
    nowMinuteBox.onfocus = nowSecondBox.onfocus = function(){
        timeChangeState = 1;
    }
    nowMinuteBox.onkeydown = nowSecondBox.onkeydown = function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            timeChangeN = 0;
            timeBoxReSet();
        }
    }
    nowMinuteBox.oninput = function(){
        if(nowMinuteBox.innerHTML.length > allMinute.length){
            nowMinuteBox.innerHTML = nowMinuteBox.innerHTML.substring(nowMinuteBox.innerHTML.length - allMinute.length,nowMinuteBox.innerHTML.length);
        }
        introduceBoxCssSet();
    }
    nowSecondBox.oninput = function(){
        if(nowSecondBox.innerHTML.length > 2){
            nowSecondBox.innerHTML = nowSecondBox.innerHTML.substring(nowSecondBox.innerHTML.length - 2,3);
        }
        introduceBoxCssSet();
    }
    document.onmousedown = function(event){
        if(event.target != nowMinuteBox && event.target != nowSecondBox && timeChangeState == 1){
            timeChangeN = 1;
            timeBoxReSet();
        }
    }
    timeSplitBox.id = 'timeSplitBox';
    timeSplitBox.innerHTML = '/';
    controlBox.appendChild(timeSplitBox);
    allTimeBox.id = 'allTimeBox';
    allTimeBox.innerHTML = '00:00';
    controlBox.appendChild(allTimeBox);
    playModeBtnBoxSet();
}/* 时间容器 */

function timeBoxCssSet(){
    nowMinuteBox.style.fontSize = nowTimeSplitBox.style.fontSize = nowSecondBox.style.fontSize = timeSplitBox.style.fontSize = allTimeBox.style.fontSize = width * 0.012 + 'px';
}/* 时间容器样式设置 */

function timeReSet(){
    if(needTime != undefined && music[musicNow].readyState == 4){
        music[musicNow].currentTime = needTime;
        musicStateGet();
    }
}/* 音乐播放时间重新设置 */

function timeBoxReSet(){
    needMinute = '';
    nowMinuteLength = nowMinuteBox.innerHTML.length;
    for(let n = 0;n < nowMinuteLength || nowMinuteLength == n && n == 0;n++){
        if(typeof(Number(nowMinuteBox.innerHTML.charAt(n))) == 'number' && isNaN(Number(nowMinuteBox.innerHTML.charAt(n))) == false && nowMinuteLength != 0){
            if(n == 0 && nowMinuteLength > 1){
                if(nowMinuteBox.innerHTML.charAt(n) != 0){
                    needMinute += nowMinuteBox.innerHTML.charAt(n);
                }
            }else{
                needMinute += nowMinuteBox.innerHTML.charAt(n);
            }
        }
        if(n == nowMinuteLength - 1 || nowMinuteLength == n && n == 0){
            if(needMinute == '' || needMinute > allMinute * 1){
                needMinute = Math.round(Math.random() * allMinute);
            }
            needMinute < 10?needMinute = '0' + needMinute:0;
            nowMinuteBox.innerHTML = needMinute;
            needSecond = '';
            nowSecondBoxLength = nowSecondBox.innerHTML.length;
            for(let n = 0;n < nowSecondBoxLength || nowSecondBoxLength == n && n == 0;n++){
                if(typeof(Number(nowSecondBox.innerHTML.charAt(n))) == 'number'  && isNaN(Number(nowSecondBox.innerHTML.charAt(n))) == false && nowSecondBoxLength != 0){
                    if(n == 0 && nowSecondBoxLength > 1){
                        nowSecondBox.innerHTML.charAt(n) != 0?needSecond += nowSecondBox.innerHTML.charAt(n):0;
                    }else{
                        needSecond += nowSecondBox.innerHTML.charAt(n);
                    }
                }
                if(n == nowSecondBoxLength - 1 || nowSecondBoxLength == n && n == 0){
                    if(needSecond == '' || needSecond > 59){
                        needSecond = Math.round(Math.random() * 59);
                    }
                    if(needMinute == allMinute * 1 && needSecond > allSecond * 1){
                        needSecond = Math.round(Math.random() * allSecond);
                    }
                    needSecond < 10?needSecond = '0' + needSecond:0;
                    nowSecondBox.innerHTML = needSecond;
                    needTime = needMinute * 60 + needSecond * 1;                    
                    if(timeChangeN == 0){
                        nowMinuteBox.blur();
                        nowSecondBox.blur();
                    }
                    introduceBoxCssSet();
                    if(timeChangeN == 0 || timeChangeN == 1 && needTime > parseInt(nowTime) + 3 || needTime < parseInt(nowTime) - 3){
                        currentTimeBar.style.width = needTime / allTime * bar.offsetWidth + 'px';
                        timeReSet();
                    }
                    timeChangeState = 0;
                }
            }
        }
    }
}/* 时间容器时间重设 */

JavaScript.add('js/volume.js');