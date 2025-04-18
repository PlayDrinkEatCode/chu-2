/* 设置文档加载 */
function STL(){
    NLTN = 0;
    if(loading == 0){
        ajax = new XMLHttpRequest();
        TS = window.location.href.split('?')[1];
        if(TS == undefined){
            TS = 'setting.html';
        }
        ajax.open('GET',TS);
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 && ajax.status == 200){
                text = ajax.responseText; 
                for(let n = 1;n < text.split('---信息加载---')[1].split('\n').length - 1;n++){
                    ANLT[n - 1] = text.split('---信息加载---')[1].split('\n')[n].replace('\r','');
                    if(n == text.split('---信息加载---')[1].split('\n').length - 2){
                        TLS();
                    }
                }
            }
        }
        ajax.send(null);
    }else{
        TLS();
    }
}
function TLS(){
    NLTM = [];
    NLT = text.split(ANLT[NLTN])[1].split('\n');
    for(let n = 1;n < NLT.length - 1;n++){
        NLTM[n - 1] = NLT[n].replace('\r','').split('：')[1];
        switch(ANLT[NLTN]){
            case '---鼠标指针---':
                if(NLTM[n - 1].indexOf('[X|Y:') == -1){
                    NLTM[n - 1] = 'url(' + NLTM[n - 1] + '), ';
                }else{
                    NLTM[n - 1] = 'url(' + NLTM[n - 1].split(' [')[0]+ ')' + NLTM[n - 1].split('[X|Y:')[1].split(']')[0] + ', ';
                }
                switch(n){
                    case 1:
                        NLTM[n - 1] += 'auto';
                        break;
                    case 2:
                        NLTM[n - 1] += 'pointer';
                        break;
                    case 3:
                        NLTM[n - 1] += 'move';
                }
                break;
            case '---图片地址---':
                if(NLT[n].split(' IT:')[1] != undefined){
                    NLTM[n - 1] = NLT[n].replace('\r','').split(' IT:')[0];
                    IT[n - 1] = NLT[n].replace('\r','').split(' IT:')[1];
                }else{
                    NLTM[n - 1] = NLT[n].replace('\r','');
                    IT[n - 1] = '该图片暂无简介哦！';
                }
                break;
            case '---默认按钮地址---':
                NLTM[n - 1] = NLT[n].replace('\r','');
                break;
            case '---按钮地址---':
                if(NLTM[n - 1] == ''){
                    BS[n - 1] = DBS[n - 1];
                }
        }
        if(n == NLT.length - 2){
            switch(ANLT[NLTN]){
                case '---图片显示---':
                    PD = NLTM;
                    break;
                case '---鼠标指针---':
                    CS = NLTM;
                    break;
                case '---图片简介---':
                    PI = NLTM;
                    break;
                case '---旋转功能---':
                    PT = NLTM;
                    break;
                case '---缩放功能---':
                    PS = NLTM;
                    break;
                case '---镜像功能---':
                    PM = NLTM;
                    break;
                case '---透镜功能---':
                    NLTM[NLT.length - 2] = 0;
                    MS = NLTM;
                    break;
                case '---下载功能---':
                    DS = NLTM;
                    break;
                case '---轮播功能---':
                    AS = NLTM;
                    break;
                case '---全屏功能---':
                    FS = NLTM;
                    break;
                case '---图片地址---':
                    PA = NLTM;
                    PN = PA.length;
                    break;
                case '---默认按钮地址---':
                    DBS = NLTM;
            }
            if(ANLT[NLTN] == '---按钮地址---'){
                TCS();
            }else{
                NLTN++;
                TLS();
            }
        }
    }
}
function TCS(){
    if(PN == 1){
        if(PD[0] != 3){
            PD[0] = 2;
        }else{
            AS[0] = 0;
        }
    }
    if(PD[0] != 4){
        if(PI[0] == 0){
            PBW = width;
            PBH = height * 0.92;
            IBH = 0;
        }else{
            PBW = width;
            PBH = height * 0.87;
            IBH = height * 0.05;
        }
        if(PD[0] == 2){
            AS[0] = 0;
        }
    }else{
        PBW = width;
        PBH = height;
    }
    if(loading != 1){
        if(AS[0] == 1){
            AS[0] = undefined;
        }
        PBS();
    }else{
        PBCS();
    }
}
function TBS(){
    TM = document.createElement('div');
    TM.id = 'VPicture ' + version;
    main.append(TM);
    TB.id = 'TB';
    TM.appendChild(TB);
    TBC.id = 'TBC';
    TBC.addEventListener('click',function(){
        TB.style.margin = height + 'px '+ width + 'px';
        TBC.style.margin = height + 'px ' + width + 'px';
    });
    TM.appendChild(TBC);
    for(let n = 0;n < 5;n++){
        STMB = document.createElement('div');
        STMB.className = 'TMB';
        if(n == 0){
            if(DS[0] == 1){
                STMB.innerHTML = '下载图片';
                STMB.addEventListener('click',function(){
                    picDownload();
                });
            }
        }
        if(n == 1){
            STMB.innerHTML = '图片信息';
            STMB.addEventListener('click',function(){
                ICB.style.display = IPB.style.display = 'block';
                ISB.style.display = IAB.style.display = 'none';
           });
        }
        if(n == 2){
            STMB.innerHTML = '设置信息';
            STMB.addEventListener('click',function(){
                IPB.style.display = IAB.style.display = 'none';
                ICB.style.display = ISB.style.display = 'block';          
            });
        }
        if(n == 3){
            STMB.innerHTML = '关于作者';
            STMB.addEventListener('click',function(){
                IPB.style.display = ISB.style.display = 'none';
                ICB.style.display = IAB.style.display = 'block';
            });
        }
        if(n == 4){
            STMB.innerHTML = 'VPicture ' + version;
            STMB.addEventListener('click',function(){
                window.open('https://zdjweb.gitee.io/show/?VPicture');
            });
        }
        STMB.addEventListener('mouseover',function(){
            TMB[n].style.background = 'rgba(80,80,80,0.9)';
        });
        STMB.addEventListener('mouseout',function(){
            TMB[n].style.background = '';
        });
        TB.appendChild(STMB);
        if(n == 4){
            TMB = document.getElementsByClassName('TMB');
            IBS();
        }
    }
}

function IBS(){
    IB.id = 'IB';
    IBC.id = 'IBC';
    IB.appendChild(IBC);
    ICB.id = 'ICB';
    ICB.innerHTML = 'x';
    ICB.addEventListener('click',function(){
        IPB.style.display = ISB.style.display = IAB.style.display = ICB.style.display = 'none';
    });
    IBC.appendChild(ICB);
    IPB.id = 'IPB';
    IB.appendChild(IPB);
    ISB.id = 'ISB';
    IB.appendChild(ISB);
    IAB.id = 'IAB';
    IB.appendChild(IAB);
    IPMS();
}
function IPMS(){
    for(let n = 0;n < 6;n++){
        SIPM = document.createElement('div');
        SIPM.className = 'IPM';
        IPB.appendChild(SIPM);
        if(n == 5){
            ISMS();
        }
    }
}
function ISMS(){
    for(let n = 0;n < 17;n++){
        SISM = document.createElement('div');
        SISM.className = 'ISM';
        if(n == 0 || n == 3){
            SISM.innerHTML = '---图片显示---';
        }
        if(n == 1){
            switch(PD[0]){
                case 0:
                    SISM.innerHTML = '显示模式：功能模式';
                    break;
                case 1:
                    SISM.innerHTML = '显示模式：极简模式';
                    break;
                case 2:
                    SISM.innerHTML = '显示模式： 单图模式';
                    break;
                case 3:
                    SISM.innerHTML = '显示模式： 张数模式';
                    break;
                case 4:
                    SISM.innerHTML = '显示模式： 简洁模式';
            }
        }
        if(n == 2){
            SISM.innerHTML = '背景颜色：' + PD[1];
        }
        if(n == 4 || n == 8){
            SISM.innerHTML = '---鼠标指针---';
        }
        if(n == 5){
            SISM.innerHTML = '一般状态：' + CS[0];
        }
        if(n == 6){
            SISM.innerHTML = '对准按钮：' + CS[1];
        }
        if(n == 7){
            SISM.innerHTML = '移动状态：' + CS[2];
        }
        ISB.appendChild(SISM);
        if(n == 16){
            IAMS();
        }
    }
}
function IAMS(){
    for(let n = 0;n < 3;n++){
        SIAM = document.createElement('div');
        SIAM.className = 'IAM';
        if(n == 0){
            SIAM.innerHTML = '个人简介：一个沙雕的高三学生。。。';
        }
        if(n == 1){
            SIAM.innerHTML = 'bilibili：2002-2003';
        }
        if(n == 2){
            SIAM.innerHTML = '邮箱：dj_web_rikka@163.com';
        }
        IAB.appendChild(SIAM);
        if(n == 2){
            TM.appendChild(IB);
            IPM = document.getElementsByClassName('IPM');
            ISM = document.getElementsByClassName('ISM');
            IAM = document.getElementsByClassName('IAM');
            PBCS();
        }
    }
}
function TBCS(){
    TB.style.cssText = 'font-size:' + height * 0.02 + 'px';
    TBC.style.cssText = 'width:' + width + 'px;height:' + height + 'px;margin:' + height + 'px ' + width + 'px';
    IB.style.cssText = 'font-size:' + height * 0.02 + 'px;margin:' + height * 0.01 + 'px';
    IBC.style.cssText = 'margin: 0px ' + height * 0.01 + 'px';
    ICB.style.cursor = CS[1];
    for(let n = 0;n < TMB.length;n++){
        TMB[n].style.cssText = 'padding:' + height * 0.01 + 'px;cursor:' + CS[1];
        if(n == 0){
            TMB[n].style.marginTop = height * 0.01 + 'px';
        }else if(n == TMB.length - 1){
            TMB[n].style.marginBottom = height * 0.01 + 'px';
            TB.style.width = TB.clientWidth * 1.1 + 'px';
            TB.style.marginTop = - TB.offsetHeight + 'px';
            IPBCS();
        }
    }
}
function IPBCS(){
    for(let n = 0;n < IPM.length;n++){
        IPM[n].style.cssText = 'width:' + width * 0.25 + 'px;padding:' + height * 0.005 + 'px';
        if(n == IPM.length - 1){
            ISMCS();
        }
    }
}
function ISMCS(){
    for(let n = 0;n < ISM.length;n++){
        ISM[n].style.cssText = 'width:' + width * 0.25 + 'px;padding:' + height * 0.005 + 'px';
        if(n == ISM.length - 1){
            IABCS();
        }
    }
}
function IABCS(){
    for(let n = 0;n < IAM.length;n++){
        IAM[n].style.cssText = 'width:' + width * 0.25 + 'px;padding:' + height * 0.005 + 'px';
        if(n == IAM.length - 1){
            IPB.style.display = ISB.style.display = IAB.style.display = ICB.style.display = 'none';
            if(loading != 1){
                SO();
            }else{
                PWRS();
            }
        }
    }
}