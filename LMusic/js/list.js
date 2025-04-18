function textBoxSet(){
    main.appendChild(textBox);
    textBox.appendChild(textBtnBox);
    textBtnBox.appendChild(textBtnMainBox);
    for(let n = 0;n < 2;n++){
        textBtn = document.createElement('div');
        textBtn.className = 'textBtn';
        if(n == 0){
            textBtn.innerHTML = '播放列表';
        }
        if(n == 1){
            textBtn.innerHTML = '项目信息';
        }
        textBtn.onclick = function(){
            textBtn[textNow].style.background = 'rgba(0,0,0,0)';
            textNow = n;
            textBtn[textNow].style.background = 'rgba(255,255,255,0.3)';
        }
        textBtnMainBox.appendChild(textBtn);
        if(n == 1){
            textBtn = document.getElementsByClassName('textBtn');
        }
    }
    textCloseBox.innerHTML = 'x';
    textCloseBox.onclick = function(){
        textBoxState = 0;
        textBox.style.display = 'none';
    }
    textBtnBox.appendChild(textCloseBox);
    textBox.appendChild(textMusicMsgBox);
    textMusicMsgBox.appendChild(textMusicMsgBtnBox);
    textMusicMsgBox.appendChild(textMusicMsgMainBox);
    for(let n = 0;n < musicNumber;n++){
        
    }
    cssSet();
}/* 右键菜单设置 */

function textBoxCssSet(){
    Object.assign(textBox.style,{
        position: 'fixed',
        display: (textBoxState?'block':'none'),
        margin: height * 0.15 + 'px ' + width * 0.2 +'px',
        zIndex: 2,
        background: 'rgba(0,0,0,0.5)',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 + 'px',
        height: height * 0.7 + 'px'
    });
    Object.assign(textBtnBox.style,{
        margin: height * 0.01 + 'px ' + height * 0.01 + 'px',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 - height * 0.02 + 'px',
        height: height * 0.05 + 'px'
    });
    Object.assign(textBtnMainBox.style,{
        display: 'inline-block',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 - height * 0.08 + 'px',
        height: height * 0.05 + 'px'
    });
    for(let n = 0;n < 2;n++){
        Object.assign(textBtn[n].style,{
            display: 'inline-block',
            background: (textBtn[textNow] == textBtn[n]?'rgba(255,255,255,0.3)':'rgba(0,0,0,0)'),
            color: '#FFFFFF',
            fontSize: height * 0.02 + 'px',
            textAlign: 'center',
            lineHeight: height * 0.05 + 'px',
            borderRadius: height * 0.01 + 'px',
            width: (width * 0.6 - height * 0.08) / 5 + 'px',
            height: height * 0.05 + 'px'
        });
    }
    Object.assign(textCloseBox.style,{
        verticalAlign: 'top',
        marginLeft: height * 0.01 + 'px',
        display: 'inline-block',
        background: 'rgba(255,255,255,0.3)',
        color: '#FFFFFF',
        fontSize: height * 0.02 + 'px',
        textAlign: 'center',
        lineHeight: height * 0.05 + 'px',
        borderRadius: height * 0.01 + 'px',
        width: height * 0.05 + 'px',
        height: height * 0.05 + 'px'
    });
    Object.assign(textMusicMsgBox.style,{
        margin: height * 0.01 + 'px ' + height * 0.01 + 'px',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 - height * 0.02 + 'px',
        height: height * 0.62 + 'px'
    });
    Object.assign(textMusicMsgBtnBox.style,{
        background: 'rgba(255,255,255,0.3)',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 - height * 0.02 + 'px',
        height: height * 0.05 + 'px'
    });
    Object.assign(textMusicMsgMainBox.style,{
        marginTop: height * 0.01 + 'px',
        padding: height * 0.005 + 'px',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: height * 0.01 + 'px',
        width: width * 0.6 - height * 0.03 + 'px',
        height: height * 0.55 + 'px'
    });
}/* 右键菜单样式设置 */

pageSizeGet();