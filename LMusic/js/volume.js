function volumeBoxSet(){
    volume.box.onmouseover = function(){
        clearInterval(volume.timer);
        if(volume.cssState == 0){
            volume.cssState = 1;
            volume.timer = setInterval(volumeBoxOverCssReSet,12);
        }
    }
    volume.box.onmouseout = function(){
        if(volume.state == 0){
            clearInterval(volume.timer);
            volume.cssState = 0;
            volume.timer = setInterval(volumeBoxOutCssReSet,12);
        }
    }
    controlBox.appendChild(volume.box);
    if(volume.now == 0){
        volume.btn.src = buttonAddress[10];
    }else if(volume.now <= 0.3){
        volume.btn.src = buttonAddress[9];
    }else if(volume.now <= 0.7){
        volume.btn.src = buttonAddress[8];
    }else{
        volume.btn.src = buttonAddress[7];
    }
    volume.btn.onclick = function(){
        if(music[musicNow].volume != 0){
            volume.now = 0;
            volumeReSet();
        }else{
            volume.now = volume.keep;
            volumeReSet();
        }
    }
    volume.box.appendChild(volume.btn);
    volume.box.appendChild(volume.barBox);
    volume.barBox.appendChild(volume.bar);
    volume.bar.appendChild(volume.userBar);
    volume.barBox.onmousedown = function(event){
        if(music[musicNow].readyState == 4 && volume.cssState == 2){
            mouse = event;
            volume.state = 1;
            volumeReSet();
        }
    }
    document.addEventListener('mousemove',function(event){
        if(volume.state == 1 && volume.cssState == 2){
            mouse = event;
            volumeReSet();
        }
    });
    document.addEventListener('mouseup',function(event){
        if(volume.state == 1 && volume.cssState == 2){
            mouse = event;
            volume.state = 0;
            volumeReSet();
        }
    });
    barSet();
}/* 音量控制部分设置 */

volume.cssSet = function(){/* 音量控制部分样式设置 */
    Object.assign(this.box.style,{/* 音量控制容器样式 */
        display: 'inline-block',
        verticalAlign: 'top',
        margin: controlBoxHeight * 0.19 + 'px 0px 0px ' + width * 0.01 + 'px',
        padding: controlBoxHeight * 0.11 + 'px',
        border: controlBoxHeight * 0.04 + 'px #FFCCFF solid',
        borderRadius: controlBoxHeight * 0.66 + 'px',
        width: controlBoxHeight * 0.36 + 'px',
        height: controlBoxHeight * 0.36 + 'px'
    });
    Object.assign(this.btn.style,{/* 音量控制按钮样式 */
        display: 'inline-block',
        width: controlBoxHeight * 0.36 + 'px'
    });
    Object.assign(this.barBox.style,{/* 音量控制条容器样式 */
        display: 'inline-block',
        verticalAlign: 'top',
        margin: controlBoxHeight * 0.1 + 'px ' + width * 0.01 + 'px',
        borderRadius: controlBoxHeight * 0.08 + 'px',
        width: '0px',
        height: controlBoxHeight * 0.16 + 'px'
    });
    Object.assign(this.bar.style,{/* 音量控制条样式 */
        margin: controlBoxHeight * 0.04 + 'px 0px',
        borderRadius: controlBoxHeight * 0.04 + 'px',
        backgroundColor: '#C8C8FA',
        overflow: 'hidden',
        width: '100%',
        height: controlBoxHeight * 0.08 + 'px'
    });
    Object.assign(this.userBar.style,{/* 音量操作控制条样式 */
        backgroundColor: '#FFCCFF',
        width: this.now * 100 + '%',
        height: '100%'
    });
}

function volumeBoxOverCssReSet(){
    volume.box.style.width = controlBoxHeight * 0.36 + width * 0.02 + controlBoxHeight * 0.03 * volume.number  + 'px';
    volume.barBox.style.width = controlBoxHeight * 0.03 * volume.number + 'px';
    if(volume.number < 40){
        volume.number++;
    }else{
        clearInterval(volume.timer);
        volume.cssState = 2;
    }
}/* 音量控制容器进入样式重设 */

function volumeBoxOutCssReSet(){
    volume.barBox.style.width = controlBoxHeight * 0.03 * volume.number + 'px';
    if(volume.number > 0){
        volume.box.style.width = controlBoxHeight * 0.36 + width * 0.02 + controlBoxHeight * 0.03 * volume.number  + 'px';
        volume.number--;
    }else{
        volume.box.style.width = controlBoxHeight * 0.36 + 'px';
        clearInterval(volume.timer);
    }
}/* 音量控制容器出去样式重设 */

function volumeReSet(){
    volume.state == 1?volume.now = (mouse.clientX - volume.barBox.offsetLeft) / volume.barBox.offsetWidth:0;
    volume.now < 0?volume.now = 0:0;
    volume.now > 1?volume.now = 1:0;
    volume.now > 0?volume.keep = volume.now:0;
    if(volume.now == 0){
        volume.btn.src = buttonAddress[10];
    }else if(volume.now <= 0.3){
        volume.btn.src = buttonAddress[9];
    }else if(volume.now <= 0.7){
        volume.btn.src = buttonAddress[8];
    }else{
        volume.btn.src = buttonAddress[7];
    }
    music[musicNow].volume = volume.now;
    volumeBarCssReSet();
}/* 音量重设 */

function volumeBarCssReSet(){
    volume.userBar.style.width = music[musicNow].volume * 100 + '%';
}/* 音量控制条样式重设 */

JavaScript.add('js/bar.js');