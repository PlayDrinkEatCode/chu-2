function backgroundBoxSet(){
    main.appendChild(backgroundBox);
    backgroundBox.appendChild(backgroundCover);
    backgroundCover.appendChild(backgroundReCover);
    backgroundReCover.appendChild(backgroundColor);
    coverSet();
}/* 背景容器设置 */

function backgroundBoxCssSet(){
    Object.assign(backgroundBox.style,{
        position: 'fixed',
        zIndex: 1,
        overflow: 'hidden',
        width: backgroundBoxWidth + 'px',
        height: backgroundBoxHeight + 'px'
    });
    coverDataSet != undefined?backgroundReSet():0;
}/* 背景容器样式设置 */

function backgroundReSet(){
    if(coverBug == 0){
        backgroundBox.style.backgroundImage = 'url("' + cover.src + '")';
        backgroundBox.style.backgroundSize = width + 'px ' + backgroundBoxHeight + 'px';
        backgroundCover.style.background = 'rgba(' + coverDataSet[0] + ',' + coverDataSet[1] + ',' + coverDataSet[2] + ',0.85)';
        backgroundReCover.style.background = 'rgba(' + (255 - coverDataSet[0]) + ',' + (255 - coverDataSet[1]) + ',' + (255 - coverDataSet[2]) + ',' + '0.15)';
        backgroundColor.style.background = 'rgba(0,0,0,0.3)';
    }else{
        backgroundBox.style.backgroundImage = '';
        backgroundBox.style.backgroundSize = width + 'px ' + backgroundBoxHeight + 'px';
        backgroundCover.style.background = 'rgba(0,0,0,0.5)';
        backgroundReCover.style.background = 'rgba(255,255,255,0.5)';
        backgroundColor.style.background = 'rgba(0,0,0,0.3)';
    }
}/* 背景样式重设 */

JavaScript.add('js/cover.js');