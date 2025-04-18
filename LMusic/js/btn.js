function btnBoxSet(){
    controlBox.appendChild(btnBox);
    btnSet();
}/* 按钮容器设置 */

function btnSet(){
    for(let n = 0;n < 3;n++){
        btn = document.createElement('img');
        btn.className = 'btn';
        switch(n){
            case 0:
                btn.src = buttonAddress[0];
                btn.onclick = function(){
                    music[musicNow].pause();
                    music[musicNow].currentTime = 0;
                    playMode == 2?randomMusicSet():musicNow--;
                    musicChange();
                }
                break;
            case 1:
                btn.src = buttonAddress[1];
                btn.onclick = function(){
                    musicReSet();
                }
                break;
            case 2:
                btn.src = buttonAddress[3];
                btn.onclick = function(){
                    music[musicNow].pause();
                    music[musicNow].currentTime = 0;
                    playMode == 2?randomMusicSet():musicNow++;
                    musicChange();
                }
        }
        btnBox.appendChild(btn);
        if(n == 2){
            btn = document.getElementsByClassName('btn');
            introduceBoxSet();
        }
    }
}/* 按钮设置 */

function btnCssSet(){
    Object.assign(btnBox.style,{
        display: 'inline-block',
        padding: controlBoxHeight * 0.15 + 'px ' + width * 0.01 + 'px ' + controlBoxHeight * 0.15 + 'px 0px'
    });
    for(let n = 0;n < btn.length;n++){
        btn[n].style.width = controlBoxHeight * 0.7 + 'px';
    }
}/* 按钮样式设置 */

JavaScript.add('js/introduce.js');