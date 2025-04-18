function introduceBoxSet(){
    introduceBox.id = 'introduceBox';
    controlBox.appendChild(introduceBox);
    introduce.id = 'introduce';
    introduceBox.appendChild(introduce);
    timeBoxSet();
}/* 音乐信息容器设置 */

function introduceBoxCssSet(){
    Object.assign(introduceBox.style,{
        display: 'inline-block',
        verticalAlign: 'top',
        overflow: 'hidden',
        textAlign: 'left',
        marginRight: controlBoxHeight * 0.05 + 'px',
        width: ((width - btnBox.offsetWidth) * 0.4 - controlBoxHeight * 0.05 - nowMinuteBox.offsetWidth - nowTimeSplitBox.offsetWidth - nowSecondBox.offsetWidth - timeSplitBox.offsetWidth - allTimeBox.offsetWidth) + 'px',
        fontSize: width * 0.012 + 'px'
    });
    introduceReSet();
}/* 音乐信息容器样式设置 */

function introduceReSet(){
    introduceWidth = introduce.offsetWidth;
    introduce.offsetWidth <= introduceBox.offsetWidth?introduceMoveN = 0:0;
    if(introduceMoveN == 0){
        clearInterval(timerForIntroduceMove);
        clearTimeout(timerForIntroduceMoveTimer);
        introduce.style.marginLeft = '0px';
        introduceMoveDirection = 0;
        if(introduce.offsetWidth > introduceBox.offsetWidth){
            clearInterval(timerForIntroduceMove);
            clearTimeout(timerForIntroduceMoveTimer);
            timerForIntroduceMoveTimer = setTimeout(function(){
                timerForIntroduceMove = setInterval(introduceBoxMove,25);
            },3000);
        }
    }
    introduce.style.marginLeft = -(introduceWidth - introduceBox.offsetWidth) / 200 * introduceMoveN + 'px';
}/* 音乐信息重设 */

function introduceBoxMove(){
    introduceMoveDirection == 0?introduceMoveN++:introduceMoveN--;
    introduceMoveN != 200?introduce.style.marginLeft = -(introduceWidth - introduceBox.offsetWidth) / 200 * introduceMoveN + 'px':0;
    if(introduceMoveN == 0 || introduceMoveN == 200){
        introduceMoveDirection = (introduceMoveN == 0?0:1);
        clearInterval(timerForIntroduceMove);
        clearTimeout(timerForIntroduceMoveTimer);
        timerForIntroduceMoveTimer = setTimeout(function(){
            timerForIntroduceMove = setInterval(introduceBoxMove,25);
        },3000);
    }
}/* 音乐信息移动 */

JavaScript.add('js/playMode.js');