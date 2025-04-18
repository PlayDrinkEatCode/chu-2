function entertainmentPageSet(){
    if(entertainmentPageShowN == 1){
        main[2].style.cssText = 'position: fixed;z-index: 4;top: 0px';
    }else{
        main[2].style.cssText = 'position: fixed;z-index: 4;top: -'+ sh +'px';
    }
    entertainmentTop.style.cssText = 'width:' + sw + 'px;height:' +(sh * 0.1) +'px;background: #FFF';
    entertainmentNavBox.style.cssText = 'float:right;width:' + (sw * 0.95 - logo[3].clientWidth) + 'px;height:' + sh * 0.1 + 'px;text-align: center;font-size:' + sh * 0.035 + 'px';
    for(let n = 0;n < entertainmentNav.length;n++){
        entertainmentNav[n].style.cssText = 'display: inline-block;height:' + sh * 0.1 + 'px;margin: 0px ' + sw * 0.01 + 'px;line-height:' + sh * 0.1 + 'px;color: #C8C8FA;cursor: url("cursor/jump.cur"),auto';
        entertainmentNav[n].addEventListener("mousemove",function(){
            entertainmentNav[n].style.color = '#FFCCFF';
        });
        entertainmentNav[n].addEventListener("mouseout",function(){
            entertainmentNav[n].style.color = '#C8C8FA';
        });
    }
    musicSet();
    consoleLog_set();
}
function entertainmentPageSetOver(){
    if(entertainmentPageNow == 1){
        musicPage.style.display = 'block';
        jigsawPuzzleMiddle.style.display = 'none';
        jigsawPuzzleBottom.style.display = 'none';
    }else if(entertainmentPageNow == 2){
        musicPage.style.display = 'none';
        jigsawPuzzleMiddle.style.display = 'block';
        jigsawPuzzleBottom.style.display = 'block';
    }
}
/* 音乐播放页的显示和隐藏 */
function entertainmentPageShow(){
    if(entertainmentPageTime == 0){
        if(entertainmentPageShowN == 1){
            entertainmentPageShowSet = setInterval(entertainmentPageUp,20);
        }else{
            entertainmentPageShowSet = setInterval(entertainmentPageDown,20);
        }
    }
}
function entertainmentPageUp(){
    entertainmentPageTime++;
    main[2].style.top = Number(main[2].style.top.replace('px','')) - sh / 100 + 'px';
    if(entertainmentPageTime == 100){
        clearInterval(entertainmentPageShowSet);
        entertainmentPageShowN--;
        entertainmentPageTime = 0;
    }
}
function entertainmentPageDown(){
    entertainmentPageTime++;
    main[2].style.top = Number(main[2].style.top.replace('px','')) + sh / 100 + 'px';
    if(entertainmentPageTime == 100){
        clearInterval(entertainmentPageShowSet);
        entertainmentPageShowN++;
        entertainmentPageTime = 0
    }
}
entertainmentNav[0].onclick = function(){
    entertainmentPageNow = 1;
    entertainmentPageSetOver();
}
entertainmentNav[1].onclick = function(){
    entertainmentPageNow = 2;
    entertainmentPageSetOver();
}