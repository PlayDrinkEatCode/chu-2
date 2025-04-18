/* 网站信息 */
var version = '1.4.8';
/* 浏览器信息 */
var mode;
var browserVersion = navigator.appVersion;
/* 页面模式 */
var page_mode;
/* 分辨率信息 */
var sw,sh,wh;
/* 判断链接数据 */
var state_n;
var href_main = location.href.replace('index.html','');
var href = window.location.href.split('?')[1];
/* 载入界面 */
var loadingBox = document.getElementById('loadingBox');
var loading = document.getElementById('loading');
var loading_time_n = 1;
var loading_state = 0;
/* 页面信息 */
var main = document.getElementsByTagName('main');
var pg_n = 1;
var pg_time = 0;
var music_box_time = 0;
var top_n;
/* 获取文件内容 */
var ajax;
var ajax_text = '';
/* 背景 */
var bg_wh = [];
var bg_box = document.getElementsByClassName('bg_box');
var bg = document.getElementsByClassName('bg');
var bg_n = 0;
var left_n;
var bg_change_n = 0;
var left_time = 0;
/* logo */
var logo_w = [];
var logo_h = [];
var logo = document.getElementsByClassName('logo');
/* 页面1 */
var rikka_wh = [];
var rikka_box = document.getElementById('rikka_box');
var rikka = document.getElementById('rikka');
var rikka_n = 0;
/* 页面2 */
var settingPageTop = document.getElementById('settingPageTop');
var settingPageMusicControl = document.getElementById('settingPageMusicControl');
var settingPageMusicInformation = document.getElementById('settingPageMusicInformation');
var settingPageMusicBtn = document.getElementById('settingPageMusicBtn');
var settingMode = 0;
/* 娱乐页面 */
var entertainmentPageShowN = 0;
var entertainmentPageNow = 1;
var entertainmentPageTime = 0;
var entertainmentTop = document.getElementById('entertainmentTop');
var entertainmentNavBox = document.getElementById('entertainmentNavBox');
var entertainmentNav = document.getElementsByClassName('entertainmentNav');
/* 音乐 */
var music = document.getElementById('music');
var cover = document.getElementById('cover');
var music_btn = document.getElementById('music_btn');
var music_btn_box = document.getElementById('music_btn_box');
var musicPage = document.getElementById('musicPage');
var music_mode = 0;
var text;

/* 拼图游戏 */
var jigsawPuzzleMiddle = document.getElementById('jigsawPuzzleMiddle');
var jigsawPuzzleBottom = document.getElementById('jigsawPuzzleBottom');
var jigsawPuzzleBtn = document.getElementsByClassName('jigsawPuzzleBtn');
var jigsawPuzzleSetting = document.getElementById('jigsawPuzzleSetting');
var jigsawPuzzleSettingClose = document.getElementById('jigsawPuzzleSettingClose');
var jigsawPuzzleSettingMsg = document.getElementById('jigsawPuzzleSettingMsg');
var jigsawPuzzleSettingCount = document.getElementById('jigsawPuzzleSettingCount');
var jigsawPuzzleSettingSure = document.getElementById('jigsawPuzzleSettingSure');
var jigsawPuzzleVoice = document.getElementsByTagName('audio')[1];
var jigsawPuzzleSetCloseBtn = document.getElementById('jigsawPuzzleSetCloseBtn');
var jigsawPuzzleCount = 3;
var jigsawPuzzleSize,jigsawPuzzleBoxSize;
var jigsawPuzzleNow = 1;
var jigsawPuzzleBox = [];
var jigsawPuzzlePicture = [];
var jigsawPuzzleState;
var jigsawPuzzleCheckN = 0;
var jigsawPuzzleSuccess;
var jigsawPuzzleSettingShow = 0;
/* 鼠标点击 */
var key;
/* mobile */
var startx,starty,endy,endx;