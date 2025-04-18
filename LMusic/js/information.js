function musicIntroduceBoxSet(){
    backgroundColor.appendChild(musicIntroduceBox);
    musicIntroduceBox.appendChild(musicNameBox);
    musicIntroduceBox.appendChild(singerNameBox);
    wordsBoxSet();
}/* 音乐主要信息容器设置 */

function musicIntroduceBoxCssSet(){
    Object.assign(musicIntroduceBox.style,{
        display: 'inline-block',
        verticalAlign: 'top',
        width: width * 0.5 + 'px',
        height: backgroundBoxHeight + 'px'
    });
    Object.assign(musicNameBox.style,{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: backgroundBoxHeight * 0.03 + 'px',
        width: width * 0.5 + 'px'
    });
    Object.assign(singerNameBox.style,{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: backgroundBoxHeight * 0.028 + 'px',
        width: width * 0.5 + 'px'
    });
}/* 音乐主要信息容器样式设置 */

function musicIntroduceSet(){
    musicNameBox.innerHTML = musicName[musicNow];
    singerNameBox.innerHTML = singerName[musicNow];
    musicNameBox.style.marginTop = (backgroundBoxHeight * 0.25 - musicNameBox.offsetHeight - singerNameBox.offsetHeight) * 0.4 + 'px';
    singerNameBox.style.margin = (backgroundBoxHeight * 0.25 - musicNameBox.offsetHeight - singerNameBox.offsetHeight) * 0.3 + 'px 0px';
}/* 音乐主要信息设置 */

JavaScript.add('js/words.js');