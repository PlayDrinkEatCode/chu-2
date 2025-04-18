function wordsBoxSet(){
    wordsOutsideBox.id = 'wordsOutsideBox';
    musicIntroduceBox.appendChild(wordsOutsideBox);
    wordsInnerBox.id = 'wordsInnerBox';
    wordsOutsideBox.appendChild(wordsInnerBox);
    controlBoxSet();
}/* 歌词容器设置 */

function wordsBoxCssSet(){
    Object.assign(wordsOutsideBox.style,{
        overflow: 'hidden',
        width: width * 0.5 + 'px',
        height: backgroundBoxHeight * 0.5 + 'px'
    });
    Object.assign(wordsInnerBox.style,{
        margin: '0px ' + width * 0.05 + 'px',
        textAlign: 'center',
        fontSize: backgroundBoxHeight * 0.025 + 'px',
        width: width * 0.4 + 'px'
    })
    if(wordsBox != undefined){
        if(wordsState == 0){
            wordsCssReSet();
        }else{
            wordsBox.style.paddingTop = backgroundBoxHeight * 0.018 + 'px';
            wordsInnerBox.style.marginTop = backgroundBoxHeight * 0.25 - wordsBox.offsetHeight / 2 + 'px';
        };
    }
}

function wordsGet(){
    wordsTextGet('words/' + musicAllName[musicNow] + '.txt');
}/* 获取歌词 */

function wordsTextGet(wordsSrc){
    wordsLoading = new XMLHttpRequest();
    wordsLoading.open('GET',wordsSrc);
    wordsLoading.onreadystatechange = function(){
        if(this.readyState == 4){
            wordsState = 0;
            if(this.status == 200){
                console.log(this);
                words[musicNow] = '[00:00.00]' + this.responseText.replace(/[\r\n]/g,'').split('[00:00.00]')[1];
            }else{
                wordsState = 1;
            }
            translateGet();
        }
    }
    wordsLoading.send();
}/* 获取歌词内容 */

function translateGet(){
    wordsLoading = new XMLHttpRequest();
    wordsLoading.open('GET','translate/' + musicAllName[musicNow] + '.txt');
    wordsLoading.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                translate = this.responseText.replace(/[\r\n]/g,'');
            }else{
            }
            wordsSet();
        }
    }
    wordsLoading.send();
}/* 获取翻译 */

function wordsSet(){
    wordsBox = undefined;
    wordsNow = 0;
    wordsLast = undefined;
    wordsInnerBox.innerHTML = '';
    wordsTime = [];
    if(wordsState == 0){
        wordsArray = words[musicNow].split('[');
        for(let n = 1;n < wordsArray.length;n++){
            wordsTime[n - 1] = wordsArray[n].split(']')[0].split(':')[0] * 60 + Number(wordsArray[n].split(']')[0].split(':')[1].split('.')[0]) + '.' + Number(wordsArray[n].split(']')[0].split(':')[1].split('.')[1]);
            wordsBox = document.createElement('div');
            wordsBox.id = 'words-' + wordsArray[n].split(']')[0]; 
            wordsBox.className = 'wordsBox';
            wordsBox.innerHTML = wordsArray[n].split(']')[1];
            if(wordsArray[n].split(']')[1] != ''){
                wordsBox.style.padding = backgroundBoxHeight * 0.009 + 'px 0px';
                wordsBox.style.color = '#FFFFFF';
                wordsBox.onclick = function(){
                    needTime = wordsTime[n - 1];
                    music[musicNow].currentTime = needTime;
                    currentTimeBar.style.width = needTime / allTime * bar.offsetWidth + 'px';
                    (needMinute = Math.floor(needTime / 60)) < 10?needMinute = '0' + needMinute:0;
                    (needSecond = Math.floor(needTime % 60)) < 10?needSecond = '0' + needSecond:0;
                    nowMinuteBox.innerHTML = needMinute;
                    nowSecondBox.innerHTML = needSecond;
                }
            }
            wordsInnerBox.appendChild(wordsBox);
            if(n == wordsArray.length - 1){
                wordsBox = document.getElementsByClassName('wordsBox');
                wordsInnerBox.style.marginTop = backgroundBoxHeight * 0.25 - wordsBox[0].offsetHeight / 2 + 'px';
            }
        }
    }else{
        wordsBox = document.createElement('div');
        wordsBox.innerHTML = '没有找到歌词呢！';
        wordsInnerBox.appendChild(wordsBox);
        wordsBox.style.paddingTop = backgroundBoxHeight * 0.018 + 'px';
        wordsBox.style.color = '#FFFFFF';
        wordsInnerBox.style.marginTop = backgroundBoxHeight * 0.25 - wordsBox.offsetHeight / 2 + 'px';
    }
}/* 歌词设置 */

function wordsReSet(){
    if(wordsTime[wordsNow] <= music[musicNow].currentTime){
        if(wordsNow < wordsBox.length - 1){
            if(music[musicNow].currentTime < wordsTime[wordsNow + 1]){
                if(wordsNow != wordsLast){
                    wordsLast = wordsNow;
                    wordsCssReSet();
                }
            }else{
                wordsBox[wordsNow].style.color = '#FFFFFF';
                wordsNow++;
                wordsReSet();
            }
        }else{
            if(wordsNow != wordsLast){
                wordsLast = wordsNow;
                wordsCssReSet();
            }
        }
    }else{
        if(wordsNow > 0){
            wordsBox[wordsNow].style.color = '#FFFFFF';
            wordsNow--;
            wordsReSet();
        }
    }
}/* 歌词重设 */

function wordsCssReSet(){
    wordsInnerBox.style.marginTop = backgroundBoxHeight * 0.25 - (wordsBox[wordsNow].offsetTop - wordsBox[0].offsetTop) - wordsBox[wordsNow].offsetHeight / 2 + 'px';
    wordsBox[wordsNow].style.color = '#FFCCFF';
}/* 歌词滚动 */

JavaScript.add('js/control.js');