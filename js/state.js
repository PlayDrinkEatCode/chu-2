function state_get(){
    state_n = '[page]' + 'now' + pg_n + '[page]';
    state_n += '[page1]' + 'background' + bg_n + '|' + 'rikka' + rikka_n + '[page1]';
    state_n += '[page2]' + 'background' + '|' + 'setting' + set_pic_n + '[page2]';
    state_n += '[music]' + 'now' + music_n + '|' + 'play' + music_state + '|' + 'mode' + music_mode + '|' + 'page' + music_show + '[music]';
}