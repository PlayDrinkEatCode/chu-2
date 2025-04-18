function settingLoading(){
    pageSet[0] = LMusicSetting.page.background;
    cursor[0] = (LMusicSetting.mouse.auto.indexOf('[X|Y:') == -1?'url(' + LMusicSetting.mouse.auto + '),':'url(' + LMusicSetting.mouse.auto.split(' [')[0]+ ')' + LMusicSetting.mouse.auto.split('[X|Y:')[1].split(']')[0] + ', ') + 'auto';
    cursor[1] = (LMusicSetting.mouse.pointer.indexOf('[X|Y:') == -1?'url(' + LMusicSetting.mouse.pointer + '),':'url(' + LMusicSetting.mouse.pointer.split(' [')[0]+ ')' + LMusicSetting.mouse.pointer.split('[X|Y:')[1].split(']')[0] + ', ') + 'pointer';
    cursor[2] = (LMusicSetting.mouse.move.indexOf('[X|Y:') == -1?'url(' + LMusicSetting.mouse.move + '),':'url(' + LMusicSetting.mouse.move.split(' [')[0]+ ')' + LMusicSetting.mouse.move.split('[X|Y:')[1].split(']')[0] + ', ') + 'move';
    play[0] = LMusicSetting.play.auto;
    play[1] = LMusicSetting.play.mode;
    musicPlay = play[0];
    musicNumber = LMusicSetting.musicSrc.length;
    for(let n = 0;n < musicNumber;n++){
        musicSrc[n] = LMusicSetting.musicSrc[n];
        musicAllName[n] = '';
        for(let i = 0;i < musicSrc[n].split('/')[musicSrc[n].split('/').length - 1].split('.').length - 1;i++){
            musicAllName[n] += musicSrc[n].split('/')[musicSrc[n].split('/').length - 1].split('.')[i];
            if(i != musicSrc[n].split('/')[musicSrc[n].split('/').length - 1].split('.').length - 2){
                musicAllName[n] += '.';
            }
        }
        musicName[n] = musicAllName[n].split(' - ')[1];
        singerName[n] = musicAllName[n].split(' - ')[0];
        coverSrc[n] = 'cover/' + musicAllName[n] + '.jpg';
    }
    download[0] = LMusicSetting.download.on;
    download[1] = LMusicSetting.download.text;
    fullScreen[0] = LMusicSetting.fullScreen.on;
    buttonAddress = LMusicSetting.buttonSrc;
    textReSet();
}/* 设置信息加载 */

function textReSet(){
    backgroundBoxWidth = width;
    backgroundBoxHeight = height * 0.92;
    controlBoxHeight = height * 0.08;
    loading == 0?backgroundBoxSet():cssSet();
}/* 设置信息重新确认 */

JavaScript.add('js/background.js');