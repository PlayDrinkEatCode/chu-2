/* LMusic项目信息部分----- */
var version = '1.0.2';/* 版本信息 */
var author = '2002-2003';/* 作者信息 */
/* -----LMusic项目信息部分 */

/* 页面信息部分----- */
var loading = 0;/* 页面加载状态 */
var width;/* 页面宽度 */
var height;/* 页面高度 */
var main = document.getElementsByTagName('main')[0];/* 页面主要部分 */
var img;/* 图片 */
var mouse;/* 用于判断鼠标操作 */
/* -----页面信息部分 */

/* 设置信息部分----- */
/* 页面设置 */
var pageSet = [];
/*
鼠标指针
    [0] - 一般状态下的鼠标指针
    [1] - 对准按钮时的鼠标指针
    [2] - 移动状态下的鼠标指针
*/
var cursor = [];
/*
播放设置
    [0] - 是否自动播放
        0：关闭
        1：开启
    [1] - 播放方式
        0：随机播放
        1：列表循环
        2：单曲循环
*/
var play = [];
/* 音乐地址 */
var musicSrc = [];
/*
下载功能
    [0] - 是否开启下载功能
        0：关闭
        1：开启
    [1] - 下载文件的文件名前缀
*/
var download = [];
/* 全屏功能 */
var fullScreen = [];
/* 按钮地址 */
var buttonAddress = [];
/* -----设置信息部分 */

/* 背景部分----- */
var backgroundBox = document.createElement('div');/* 背景容器 */
var backgroundCover = document.createElement('div');/* 背景封面颜色 */
var backgroundReCover = document.createElement('div');/* 背景相反封面颜色 */
var backgroundColor = document.createElement('div');/* 背景颜色 */
/* 背景容器的宽 */
var backgroundBoxWidth;
/* 背景容器的高 */
var backgroundBoxHeight;
/* -----背景部分 */

/* 封面部分----- */
/* 音乐封面 */
var cover = document.createElement('img');
var coverSrc = [];/* 封面地址 */
var coverBug = 0;/* 判断封面是否存在 */
var coverCanvas/* 用于获取像素矩阵 */
var contextForCoverCanvas/* 设置画布 */
var coverData;/* 获取到的像素矩阵 */
var coverDataSet;/* 处理过的像素矩阵 */
/* -----封面部分 */

/* 歌词部分----- */
/* 用于加载歌词 */
var wordsOutsideBox = document.createElement('div');/* 歌词部分外部容器 */
var wordsInnerBox = document.createElement('div');/* 歌词部分内部容器 */
var wordsLoading;/* 用于加载歌词 */
var words = [];/* 歌词 */
var wordsState;/* 用于判断歌词是否存在 */
var wordsArray;/* 歌词片段 */
var wordsTime;/* 歌词时间 */
var wordsBox;/* 歌词容器 */
var wordsNow;/* 当前歌词 */
var wordsLast;/* 上一歌词 */
var wordsTextBox;/* 歌词容器 */
var translate;/* 翻译 */
/* -----歌词部分 */

/* 音乐主要信息容器部分----- */
/* 音乐主要信息容器 */
var musicIntroduceBox = document.createElement('div');
/* 歌曲名容器 */
var musicNameBox = document.createElement('div');
/* 歌手名容器 */
var singerNameBox = document.createElement('div');
/* ----- 音乐主要信息容器部分*/

/* 控制容器部分----- */
/* 控制容器 */
var controlBox = document.createElement('div');
/* 控制容器高度 */
var controlBoxHeight;
/* -----控制容器部分 */

/* 按钮容器部分----- */
/* 按钮容器 */
var btnBox = document.createElement('div');
/* 按钮 */
var btn;
/* -----按钮容器部分 */

/* 音乐信息容器部分----- */
/* 音乐信息容器 */
var introduceBox = document.createElement('div');
/* 音乐信息 */
var introduce = document.createElement('div');
/* 控制延时执行设置定时器 */
var timerForIntroduceMoveTimer;
/* 音乐信息移动的定时器 */
var timerForIntroduceMove;
/* 音乐信息的宽度 */
var introduceWidth;
/* 音乐信息移动次数 */
var introduceMoveN = 0;
/* 音乐信息移动方向 */
var introduceMoveDirection = 0;
/* -----音乐信息容器部分 */

/* 音乐时间容器部分----- */
/* 当前播放分钟的容器 */
var nowMinuteBox = document.createElement('div');
/* 当前播放时间分割容器 */
var nowTimeSplitBox = document.createElement('div');
/* 当前播放秒钟的容器 */
var nowSecondBox = document.createElement('div');
/* 音乐时间分隔容器 */
var timeSplitBox = document.createElement('div');
/* 音乐总时长容器 */
var allTimeBox = document.createElement('div');
/* 当前播放分钟的容器的内容长度 */
var nowMinuteLength;
/* 当前播放秒钟的容器的内容长度 */
var nowSecondBoxLength;
/* -----音乐时间容器部分 */

/* 进度条部分----- */
var bar = document.createElement('div');/* 进度条容器 */
var bufferedBar = document.createElement('div');/* 加载进度条 */
var currentTimeBar = document.createElement('div');/* 播放进度条 */
/* 用户操作进度条 */
var userSetBar = document.createElement('div');
/* 进度条拖动状态 */
var moveBar = 0;
/* 进度条计算宽度 */
var barWidth;
/* -----进度条部分 */

/* 播放模式部分----- */
/* 播放模式 */
var playMode = 0;
/* 播放模式按钮容器 */
var playModeBtnBox = document.createElement('div');
/* 播放模式按钮 */
var playModeBtn = document.createElement('img');
/* -----播放模式部分 */

/* 音乐部分----- */
var musicNumber;/* 音乐数量 */
var allMusic = [];/* 所有音乐的代号 */
var musicLast = 0;/* 上一首播放的音乐 */
var musicNow = 0;/* 现在播放的音乐 */
var musicReady;/* 准备播放的音乐 */
var music = []/* 音乐 */
var musicAllName = [];/* 音乐文件名 */
var musicName = [];/* 歌曲名 */
var singerName = [];/* 歌手名 */
var timerForGetTime;/* 获取时间的定时器 */
var nowTime = 0;/* 当前播放时间 */
var nowMinute;/* 当前播放时间的分钟部分 */
var nowSecond;/* 当前播放时间的秒钟部分 */
var allTime = 0;/* 音乐总时长 */
var allMinute;/* 音乐总时长的分钟部分 */
var allSecond;/* 音乐总时长的秒钟部分 */
var needTime;/* 需要播放的时间 */
var needMinute;/* 需要播放的时间的分钟部分 */
var needSecond;/* 需要播放的时间的秒钟部分 */
var musicBug = [];/* 音乐状态 */
var musicPlay;/* 音乐播放状态 */
var musicTimeState = 0;/* 音乐时间加载状态 */
var timeChangeState = 0;/* 用户修改音乐播放时间状态 */
var timeChangeN;/* 音乐容器修改时间的确认方式 */
/* -----音乐部分 */

/* 文件部分----- */
var fileLoading = [];/* 判断文件是否加载完成 */
var fileName = [];/* 文件名称 */
var fileNumber = [];/* 文件对应的音乐代号 */
var reader = [];/* 用于读取文件 */
/* -----文件部分 */

/* 信息部分----- */
var textBox = document.createElement('div');
var textBtnBox = document.createElement('div');
var textBtnMainBox = document.createElement('div');
var textBtn;
var textNow = 0;
var textCloseBox = document.createElement('div');
var textMusicMsgBox = document.createElement('div');
var textMusicMsgBtnBox = document.createElement('div');
var textMusicMsgMainBox = document.createElement('div');
var textMusicMsg;
var textBoxState = 0;
/* -----信息部分 */

function pageSizeGet(){
    width = window.innerWidth;
    height = window.innerHeight;
    loading == 0?settingLoading():textReSet();
}/* 页面尺寸信息获取 */

var volume = {/* 音量部分 */
    now: 0.5,/* 当前音量 */
    keep: 0,/* 记录的最后一次非0音量 */
    timer: 0,/* 音量控制容器样式重设定时器 */
    number: 0,/* 音量控制容器样式设置次数 */
    cssState: 0,/* 音量控制容器样式状态 */
    state: 0,/* 音量控制条拖动状态 */
    box: document.createElement('div'),/* 音量控制容器 */
    btn: document.createElement('img'),/* 音量控制按钮 */
    barBox: document.createElement('div'),/* 音量控制条容器 */
    bar: document.createElement('div'),/* 音量控制条 */
    userBar: document.createElement('div'),/* 音量操作控制条 */
    cssSet: null,/* 音量控制部分样式设置 */
}
var JavaScript = {/* JavaScript对象 用于加载JavaScript */
    box: document.getElementById('JavaScript'),/* JavaScript容器 */
    file: null,/* 用于加载JavaScript文件 */
    add: null,/* 加载JavaScript */
}
JavaScript.add = function(src){/* 加载JavaScript */
    this.file = document.createElement('script');
    this.file.src = src;
    this.box.appendChild(this.file);
}
window.oncontextmenu = function(event){/* 右键菜单 */
    textBoxState = 1;
    textBox.style.display = 'block';
    event.preventDefault();
}
window.onresize = function(){/* 窗口大小改变时重新获取页面尺寸信息 */
    pageSizeGet();
}
function cssSet(){
    backgroundBoxCssSet();
    coverCssSet();
    musicIntroduceBoxCssSet();
    wordsBoxCssSet();
    controlBoxCssSet();
    btnCssSet();
    timeBoxCssSet();
    introduceBoxCssSet();
    playModeBtnBoxCssSet();
    volume.cssSet();
    barCssSet();
    textBoxCssSet();
    cssReSet();
}/* 样式设置 */

function cssReSet(){
    btnBox.style.marginLeft = (width - btnBox.offsetWidth - introduceBox.offsetWidth - nowMinuteBox.offsetWidth - nowTimeSplitBox.offsetWidth - nowSecondBox.offsetWidth - timeSplitBox.offsetWidth - allTimeBox.offsetWidth - playModeBtnBox.offsetWidth - (controlBoxHeight * 0.66 + width * 0.02 + controlBoxHeight * 1.2) - width * 0.02) / 2 + 'px';
    nowMinuteBox.style.marginTop = nowTimeSplitBox.style.marginTop = nowSecondBox.style.marginTop = timeSplitBox.style.marginTop = allTimeBox.style.marginTop = introduceBox.style.marginTop = (controlBoxHeight * 0.85 - allTimeBox.offsetHeight) / 2 + 'px';
    musicNameBox.style.marginTop = (backgroundBoxHeight * 0.25 - musicNameBox.offsetHeight - singerNameBox.offsetHeight) * 0.4 + 'px';
    singerNameBox.style.margin = (backgroundBoxHeight * 0.25 - musicNameBox.offsetHeight - singerNameBox.offsetHeight) * 0.3 + 'px 0px';
    bar.style.transform = 'translateX(' + introduceBox.offsetLeft + 'px) translateY(-' + ((controlBoxHeight * 0.85 - allTimeBox.offsetHeight) / 2 + controlBoxHeight * 0.15) + 'px)';
    loadingOver();
}/* 部分元素样式设置 */

function loadingOver(){
    loading == 0?musicSet():0;
    document.body.style.cursor = cursor[0];
    img = document.getElementsByTagName('img');
    for(let n = 0;n < img.length;n++){
        img[n].ondragstart = function(){
            return false;
        }
    }
    loading = 1;
}/* 页面加载结束 */

JavaScript.add('js/text.js');