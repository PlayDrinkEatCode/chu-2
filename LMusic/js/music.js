function musicSet(){
    volume.keep = (volume.now == 0?0.5:volume.now);
    if(play[0] == 1){
        musicPlay = 0;
        musicChange();
    }
}/* 音乐设置 */

function musicReSet(){
    if(musicPlay){
        if(musicReady != undefined && nowTime == allTime){
            musicNow = musicReady;
            musicReady = undefined;
            musicChange();
        }
        music[musicNow].play();
        btn[1].src = buttonAddress[2];
        musicPlay = 0;
    }else{
        music[musicNow].pause();
        btn[1].src = buttonAddress[1];
        musicPlay = 1;
    }
    clearInterval(timerForGetTime);
    timerForGetTime = setInterval(musicStateGet,500);
    window.parent.musicPlay();
}/* 音乐播放设置 */

function musicChange(){
    musicTimeState = 0;
    musicNow < 0?musicNumber == 0?musicNow = musicNumber:musicNow = musicNumber - 1:0;
    musicNow >= musicNumber?musicNow = 0:0;
    if(music[musicNow] == undefined){
        music[musicNow] = document.createElement('audio');
        music[musicNow].volume = volume.now;
        music[musicNow].src = musicSrc[musicNow];
        musicBug[musicNow] = 0;
        music[musicNow].onerror = function(){
            if(fileNumber.indexOf(musicNow) != -1){
                music[musicNow].src = musicSrc[musicNow];
                playMode == 0?musicNow++:0;
                randomMusicSet();
                musicChange();
                if(music[musicNow] == this){
                    music[musicNow].play();
                }
            }
            musicBug[musicNow] = 2;
            introduce.innerHTML = '歌曲可能不存在！';
            introduceReSet();
        }
        music[musicNow].ontimeupdate = function(){
            (wordsState != 1 && wordsBox != undefined)?wordsReSet():0;
        }
        music[musicNow].onended = function(){
            music[musicNow].pause();
            if(musicPlay == 0){
                music[musicNow].currentTime = 0;
                if(moveBar == 0 && timeChangeState == 0){
                    playMode == 0?musicNow++:0;
                    randomMusicSet();
                }else{
                    !moveBar?barReSet():0;
                }
                musicChange();
            }else{
                musicReadySet();
            }
            if(moveBar == 0 && timeChangeState == 0){
                needTime = undefined;
            }
        }
    }else{
        music[musicNow].volume = volume.now;
    }
    musicIntroduceSet();
    introduce.innerHTML = musicAllName[musicNow];
    introduceMoveN = 0;
    introduceReSet();
    if(needTime == undefined){
        bufferedBar.style.width = '0px';
        currentTimeBar.style.width = '0px';
    }
    clearInterval(timerForGetTime);
    musicPlay = (musicPlay?0:1);
    coverBug = 0;
    cover.src = coverSrc[musicNow];
    if(words[musicNow] == undefined){
        wordsGet();
    }else{
        wordsState = 0;
        wordsSet();
    }
    musicReSet();
    window.parent.coverChange();
}/* 音乐切换 */

function randomMusicSet(){
    if(playMode == 2){
        for(let n = 0;n < musicNumber;n++){
            allMusic[n] = n;
        }
        allMusic.splice(allMusic.indexOf(musicNow),1);
        musicNow = allMusic[Math.round(Math.random() * (musicNumber - 2))];
    }
}/* 随机播放音乐 */

function musicStateGet(){
    if(music[musicNow].readyState == 4){
        nowTime = music[musicNow].currentTime;
        (nowMinute = Math.floor(nowTime / 60)) < 10?nowMinute = '0' + nowMinute:0;
        (nowSecond = Math.floor(nowTime % 60)) < 10?nowSecond = '0' + nowSecond:0;
        if(musicTimeState == 0){
            allTime = music[musicNow].duration;
            (allMinute = Math.floor(allTime / 60)) < 10?allMinute = '0' + allMinute:0;
            (allSecond = Math.floor(allTime % 60)) < 10?allSecond = '0' + allSecond:0;
            allTimeBox.innerHTML = allMinute + ':' + allSecond;
            musicTimeState = 1;
        }
        if(needTime == undefined && timeChangeState == 0){
            nowMinuteBox.innerHTML = nowMinute;
            nowTimeSplitBox.innerHTML = ':';
            nowSecondBox.innerHTML = nowSecond;
            timeSplitBox.innerHTML = '/';
        }
        bufferedBar.style.width = (music[musicNow].buffered.length == 0?'0px':music[musicNow].buffered.end(music[musicNow].buffered.length - 1) / allTime * bar.offsetWidth + 'px');
        currentTimeBar.style.width = nowTime / allTime * bar.offsetWidth + 'px';
        if(musicBug[musicNow] != 0){
            musicBugCssReSet();
            musicBug[musicNow] = 0;
        }
        if(musicBug[musicLast] != 0){
            musicBugCssReSet();
        }
        musicLast = musicNow;
        if(moveBar == 0 && timeChangeState == 0){
            needTime = undefined;
        }
        music[musicNow].paused?clearInterval(timerForGetTime):0;
    }else{
        if(needTime == undefined){
            nowMinuteBox.innerHTML = nowTimeSplitBox.innerHTML = nowSecondBox.innerHTML = timeSplitBox.innerHTML = '';
            allTimeBox.innerHTML = '~T﹏T~卡住了！';
            musicTimeState = 0;
            musicBug[musicNow] == 0?musicBug[musicNow] = 1:0;
            introduceBoxCssSet();
        }
        musicLast = musicNow;
        clearInterval(timerForGetTime);
        timerForGetTime = setInterval(function(){
            if(music[musicNow].readyState == 4){
                clearInterval(timerForGetTime);
                timerForGetTime = setInterval(musicStateGet,500);
            }
        },100);
    }
}/* 获取音乐状态 */

function musicReadySet(){
    if(playMode == 0){
        musicReady = musicNow + 1;
    }
    if(playMode == 1){
        musicReady = musicNow;
    }
    if(playMode == 2){
        for(let n = 0;n < musicNumber;n++){
            allMusic[n] = n;
        }
        allMusic.splice(allMusic.indexOf(musicNow),1);
        musicReady = allMusic[Math.round(Math.random() * (musicNumber - 2))];
    }
}/* 设置准备切换的音乐 */

function musicBugCssReSet(){
    introduceBoxCssSet();
    barCssSet();
    introduce.innerHTML = musicAllName[musicNow];
    introduceReSet();
    cssReSet();
}

JavaScript.add('js/files.js');