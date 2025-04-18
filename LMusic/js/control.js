function controlBoxSet(){
    main.appendChild(controlBox);
    btnBoxSet();
}/* 控制容器设置 */

function controlBoxCssSet(){
    Object.assign(controlBox.style,{
        position: 'fixed',
        zIndex: 1,
        top: backgroundBoxHeight + 'px',
        background: '#FFFFFF',
        textAlign: 'left',
        width: width + 'px',
        height: controlBoxHeight + 'px'
    });
}/* 控制容器样式设置 */

JavaScript.add('js/btn.js');