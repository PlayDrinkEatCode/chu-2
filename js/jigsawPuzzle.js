function jigsawPuzzlePageSet(){
    jigsawPuzzleBottom.style.cssText = 'wdith:'+ sw +'px;height:'+ sh * 0.08 +'px;background: #FFF;text-align: center';
    for(let n = 0;n < jigsawPuzzleBtn.length;n++){
        jigsawPuzzleBtn[n].style.cssText = 'display: inline-block;margin: 0px '+ sw * 0.01 +'px;line-height: '+ sh * 0.08 +'px;font-size: '+ sh * 0.03 +'px;cursor: url("cursor/function.cur"),auto';
    }
    jigsawPuzzleSettingSet();
}
function jigsawPuzzleSettingSet(){
    jigsawPuzzleSetting.style.cssText = 'position: fixed;z-index: 5;width: '+ sw * 0.25 +'px;height: auto;text-align: center;background: #FFFFFF;font-size: '+ sw * 0.013 +'px;border: '+ sw * 0.001 +'px solid black';
    if(jigsawPuzzleSettingShow == 0){
        jigsawPuzzleSetting.style.display = 'none';
        jigsawPuzzleSettingMsg.style.cssText = 'color: #FFFFFF';
    }
    if(jigsawPuzzleSetting.style.display != 'none'){
        jigsawPuzzleSetting.style.margin = ''+ (sh - jigsawPuzzleSetting.clientHeight) / 2 +'px '+sw * 0.375 +'px';
    }
    jigsawPuzzleSettingClose.style.cssText = 'text-align: right';
    jigsawPuzzleSetCloseBtn.style.cssText = 'width:' + sw * 0.025 +'px;cursor: url("cursor/function.cur"),auto';
    jigsawPuzzleSettingCount.style.cssText = 'width:50%;margin: '+ sh * 0.01 +'px auto;padding: '+ sh * 0.002 +'px;outline:none;border: '+ sw * 0.001 +'px solid black;font-size: '+ sw * 0.013 +'px';
    jigsawPuzzleSettingSure.style.cssText = 'width: 30%;margin: 0px auto '+ sh * 0.01 +'px auto;padding: '+ sh * 0.002 +'px;border: '+ sw * 0.001 +'px solid black;cursor: url("cursor/function.cur"),auto';
    jigsawPuzzleMiddleSet();
    entertainmentPageSetOver();
}
function jigsawPuzzleMiddleSet(){
    jigsawPuzzleSize = sh * 0.7;
    jigsawPuzzleBoxSize = (jigsawPuzzleSize / jigsawPuzzleCount);
    jigsawPuzzleMiddle.style.cssText = 'wdith:'+ sw +'px;height:'+ sh * 0.76 +'px;padding: '+ sh * 0.06 +'px 0px 0px 0px;background: #C8C8FA;text-align: center';
    for(let n = 1;n <= jigsawPuzzleCount * jigsawPuzzleCount;n++){
        jigsawPuzzleMiddle.innerHTML += '<div id="jigsawPuzzleBox'+n+'" ondrop="jigsawPuzzleDrop(event)" ondragover="jigsawPuzzleDragOver(event)"><div id="jigsawPuzzle'+n+'" ondragstart="jigsawPuzzleDragStart(event)"></div>';
        document.getElementById('jigsawPuzzleBox'+n+'').style.cssText = 'display: inline-block;border: '+sh * 0.001+'px solid #FFF;border-collapse: collapse';
        document.getElementById('jigsawPuzzle'+n+'').style.cssText = 'width: '+jigsawPuzzleBoxSize+'px;height: '+jigsawPuzzleBoxSize+'px;background-image: url(img/jigsawPuzzle/'+jigsawPuzzleNow+'.jpg);background-size: '+jigsawPuzzleSize+'px '+jigsawPuzzleSize+'px;cursor: pointer';
        if(n % jigsawPuzzleCount == 0){
            jigsawPuzzleMiddle.innerHTML += '<br>';
            document.getElementById('jigsawPuzzle'+n+'').style.backgroundPosition = ''+(-(jigsawPuzzleCount - 1) * jigsawPuzzleBoxSize)+'px '+(-(n / jigsawPuzzleCount - 1) * jigsawPuzzleBoxSize)+'px';
        }else{
            document.getElementById('jigsawPuzzle'+n+'').style.backgroundPosition = ''+(-(Math.floor(n % jigsawPuzzleCount - 1) * jigsawPuzzleBoxSize))+'px '+(-Math.floor(n / jigsawPuzzleCount) * jigsawPuzzleBoxSize)+'px';
        }
        if(n == jigsawPuzzleCount * jigsawPuzzleCount){
            for(let n = 0;n < jigsawPuzzleCount * jigsawPuzzleCount;n++){
                jigsawPuzzleBox[n] = document.getElementById('jigsawPuzzle'+(n + 1)+'');
                jigsawPuzzlePicture[n] = jigsawPuzzleBox[n].parentNode.id;
            }
        }
    }
    jigsawPuzzleState = 0;
}
function jigsawPuzzleBoken(){
    for(let n = 0;n < jigsawPuzzleCount * jigsawPuzzleCount;n++){
        jigsawPuzzlePicture[n] = document.getElementById('jigsawPuzzle'+(n + 1)+'');
        jigsawPuzzlePicture[n].draggable = 'true';
        if(n == jigsawPuzzleCount * jigsawPuzzleCount - 1){
            for(let n = 0;n < 100;n++){
                var x = parseInt(Math.random() * jigsawPuzzleCount * jigsawPuzzleCount);
                var y = parseInt(Math.random() * jigsawPuzzleCount * jigsawPuzzleCount);
                var jigsawPuzzleFatherX = jigsawPuzzlePicture[x].parentElement;
                var jigsawPuzzleFatherY = jigsawPuzzlePicture[y].parentElement;
                jigsawPuzzleFatherX.appendChild(jigsawPuzzlePicture[y]);
                jigsawPuzzleFatherY.appendChild(jigsawPuzzlePicture[x]);
            }
        }
    }
    jigsawPuzzleState = 1;
}
function jigsawPuzzleDragStart(e){
    e.dataTransfer.setData('id',e.target.id);
}
function jigsawPuzzleDragOver(e){
    e.preventDefault();
}
function jigsawPuzzleDrop(e){
    var get = document.getElementById(e.dataTransfer.getData("id"));
    var drop = document.getElementById(e.target.id);
    var getParent = get.parentNode;
    var dropParent = drop.parentNode;
    if(jigsawPuzzleState == 1){
        getParent.appendChild(drop);
        dropParent.appendChild(get);
    }
    jigsawPuzzleCheck();
}
function jigsawPuzzleCheck(){
    for(let n = 0;n < jigsawPuzzleCount * jigsawPuzzleCount;n++){
        jigsawPuzzlePicture[n] = document.getElementById('jigsawPuzzle'+(n + 1)+'');
        jigsawPuzzleBox[n] = jigsawPuzzlePicture[n].parentNode.id;
        if(n == jigsawPuzzleCount * jigsawPuzzleCount - 1){
            for(let n = 0;n < jigsawPuzzleCount * jigsawPuzzleCount;n++){
                if(jigsawPuzzleBox[n].split('jigsawPuzzleBox')[1] == jigsawPuzzlePicture[n].id.split('jigsawPuzzle')[1]){
                    jigsawPuzzleCheckN++;
                }else{
                    jigsawPuzzleCheckN = 0;
                }
                if(jigsawPuzzleCheckN == jigsawPuzzleCount * jigsawPuzzleCount){
                    for(let n = 0;n < jigsawPuzzleCount * jigsawPuzzleCount;n++){
                        jigsawPuzzlePicture[n].draggable = 'flase';
                    }
                    jigsawPuzzleState = 0;
                    jigsawPuzzleCheckN = 0;
                    if(musicPage.contentWindow.musicPlay == 0){
                        musicPage.contentWindow.music[musicPage.contentWindow.musicNow].pause();
                    }
                    jigsawPuzzleVoice.play();
                }
            }
        }
    }
}
function jigsawPuzzleChange(){
    if(jigsawPuzzleNow > 2){
        jigsawPuzzleNow = 1;
    }else if(jigsawPuzzleNow < 1){
        jigsawPuzzleNow = 2;
    }
    jigsawPuzzleMiddle.innerHTML = '';
    jigsawPuzzleMiddleSet();
}
jigsawPuzzleBtn[0].onclick = function(){
    jigsawPuzzleBoken();
}
jigsawPuzzleBtn[1].onclick = function(){
    jigsawPuzzleNow--;
    jigsawPuzzleChange();
}
jigsawPuzzleBtn[2].onclick = function(){
    jigsawPuzzleNow++;
    jigsawPuzzleChange();
}
jigsawPuzzleBtn[3].onclick = function(){
    jigsawPuzzleSetting.style.display = 'block';
    jigsawPuzzleSetting.style.margin = ''+ (sh - jigsawPuzzleSetting.clientHeight) / 2 +'px '+sw * 0.375 +'px';
    jigsawPuzzleSettingShow = 1;
}
jigsawPuzzleSetCloseBtn.onclick = function(){
    jigsawPuzzleSetting.style.display = 'none';
    jigsawPuzzleSettingShow = 0;
}
jigsawPuzzleVoice.addEventListener("ended",function(){
    if(musicPage.contentWindow.musicPlay == 0){
        musicPage.contentWindow.music[musicPage.contentWindow.musicNow].play();
    }
},true)
jigsawPuzzleSettingSure.onclick = function(){
    if(jigsawPuzzleSettingCount.value == ''){
        jigsawPuzzleSettingMsg.style.background = 'red';
        jigsawPuzzleSettingMsg.innerHTML = '抱歉：拼图难度数值不能为空哦！';
    }else if(jigsawPuzzleSettingCount.value < 2){
        jigsawPuzzleSettingMsg.style.background = 'red';
        jigsawPuzzleSettingMsg.innerHTML = '抱歉：拼图难度数值不能小于2哦！';
    }else if(jigsawPuzzleSettingCount.value > 10){
        jigsawPuzzleSettingMsg.style.background = 'red';
        jigsawPuzzleSettingMsg.innerHTML = '抱歉：拼图难度数值不能大于10哦！';
    }else{
        jigsawPuzzleSettingMsg.style.background = 'green';
        jigsawPuzzleSettingMsg.innerHTML = '设置成功！快去进行游戏吧！';
        jigsawPuzzleCount = jigsawPuzzleSettingCount.value;
        jigsawPuzzleChange();
    }
    jigsawPuzzleSetting.style.margin = ''+ (sh - jigsawPuzzleSetting.clientHeight) / 2 +'px '+sw * 0.375 +'px';
}