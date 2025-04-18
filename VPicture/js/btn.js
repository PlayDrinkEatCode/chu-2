function BTS(){
    BB.id = 'BB';
    main.appendChild(BB);
    if(PD[0] != 4){
        for(let n = 0;n < 11;n++){
            if(PD[0] != 3){
                SB = document.createElement('img');
                SB.className = 'B';
                if(n > 1){
                    SB.src = BS[n + 1];
                }
                if(PD[0] != 2){
                    switch(n){
                        case 0:
                            SB.src = BS[n];
                            SB.addEventListener('click',function(){
                                PCLS();
                            });
                            break;
                        case 1:
                            if(AS[0] == 0){
                                SB.src = BS[2];
                            }else{
                                SB.src = BS[1];
                            }
                            SB.addEventListener('click',function(){
                                PAS();
                            });
                            break;
                        case 2:
                            SB.addEventListener('click',function(){
                                PCNS();
                            });
                    }
                    BB.appendChild(SB);
                }
                if(PD[0] != 1){
                    if(PT[0] != 0){
                        switch(n){
                            case 3:
                                SB.addEventListener('click',function(){
                                    AZ[PSO] = AZ[PSO] - 90;
                                    PNTS();
                                });
                                break;
                            case 4:
                                SB.addEventListener('click',function(){
                                    AZ[PSO] = AZ[PSO] + 90;
                                    PNTS();
                                });
                        }
                        BB.appendChild(SB);
                    }
                    if(PS[0] != 0){
                        switch(n){
                            case 5:
                                SB.addEventListener('click',function(){
                                    if(PRS[PSO] > 25){
                                        PRS[PSO] -= 5;
                                        PNSS();
                                    }
                                });
                                break;
                            case 6:
                                SB.addEventListener('click',function(){
                                    if(PRS[PSO] < 175){
                                        PRS[PSO] += 5;
                                        PNSS();
                                    }
                                });
                        }
                        BB.appendChild(SB);
                    }
                    if(PM[0] != 0 && n == 7){
                        SB.addEventListener('click',function(){
                            AY[PSO] += 180;
                            PNTS();
                        });
                        BB.appendChild(SB);           
                    }
                    if(MS[0] != 0 && n == 8){
                        SB.addEventListener('click',function(){
                            if(PRS[PSO] == 100){
                                PMSS();
                            }
                        });
                        BB.appendChild(SB);
                    }
                    if(DS[0] != 0 && n == 9){
                        SB.addEventListener('click',function(){
                            picDownload();
                        });
                        BB.appendChild(SB);
                    }
                }
                if(n == 10){
                    if(FS[0] != 0){
                        SB.addEventListener('click',function(){
                            if(document.fullscreenElement != document.body){
                                document.body.requestFullscreen();
                            }else{
                                document.exitFullscreen();
                            }
                        });
                        BB.appendChild(SB);
                    }
                    BB = document.getElementById('BB');
                    B = document.getElementsByClassName('B');
                    TBS();
                }
            }else{
                if(n == 10){
                    for(let n = 1;n <= PN;n++){
                        if(n <= 10){
                            SB = document.createElement('div');
                            SB.className = 'NB';
                            SB.innerHTML = n;
                            SB.onclick = function(){
                                if(PCN == 0){
                                    if(n - 1 > PSO){
                                        PSN = n - 1;
                                        PCNS();
                                    }
                                    if(n - 1 < PSO){
                                        PSL = n - 1;
                                        PCLS();
                                    }
                                }
                            }
                            BB.appendChild(SB);
                        }
                        if(n == PN){
                            NB = document.getElementsByClassName('NB');
                            TBS();
                        }
                    }
                }
            }
        }
    }else{
        for(let n = 0;n < 2;n++){
            SDB = document.createElement('div');
            B = document.createElement('img');
            B.className = 'DB';
            if(n == 0){
                SDB.id = 'LB';
                B.src = BS[0];
                B.addEventListener('click',function(){
                    PCLS();
                });
            }else{
                SDB.id = 'RB';
                B.src = BS[3];
                B.addEventListener('click',function(){
                    PCNS();
                });
            }
            SDB.appendChild(B);
            BB.appendChild(SDB);
            if(n == 1){
                main.appendChild(BB);
                LB = document.getElementById('LB');
                RB = document.getElementById('RB');
                DB = document.getElementsByClassName('DB');
                TBS();
            }
        }
    }
}
function BBCS(){
    if(PD[0] != 4){
        BB.style.cssText = 'top:' + (PBH + IBH) + 'px;width:' + width + 'px;height:' + height * 0.08 + 'px;background: #FFFFFF;text-align: center';
    }else{
        LB.style.cssText = 'width:' + height * 0.1 + 'px;height:' + height * 0.1 + 'px;margin:' + height * 0.45+'px ' + (width - height * 0.2) / 2 + 'px 0px 0px';
        RB.style.cssText = 'width:' + height * 0.1 + 'px;height:' + height * 0.1 + 'px;transform: translate(' + (width - height * 0.1) + 'px,-' + height * 0.1 + 'px)';
    }
    BCS();
}
function BCS(){
    switch(PD[0]){
        case 3:
            for(let n = 0;n < PN;n++){
                if(n < 10){
                    NB[n].style.cssText = 'width:' + height * 0.05 + 'px;height:' + height * 0.05 + 'px;line-height:' + height * 0.05 + 'px;font-size:' + height * 0.03 + 'px;border: solid ' + height * 0.003 + 'px #707070;margin:' + height * 0.012+'px ' + height * 0.01 + 'px';
                    if(loading != 1){
                        if(n == PSO){
                            NB[n].classList.add('NBC');
                        }else{
                            NB[n].classList.add('NBWC');
                        }
                    }
                }
                if(n == PN - 1){
                    TBCS();
                }
            }
            break;
        case 4:
            for(let n = 0;n < DB.length;n++){
                DB[n].style.cssText = 'height:' + height * 0.08 + 'px;margin:' + height * 0.01 + 'px;cursor:' + CS[1];
                if(n == DB.length - 1){
                    TBCS();
                }
            }
            break;
        default:
            for(let n = 0;n < B.length;n++){
                B[n].style.cssText = 'height:' + height * 0.06 + 'px;margin:' + height * 0.01 + 'px;cursor:' + CS[1];
                if(n == B.length - 1){
                    TBCS();
                }
            }
    }
}
function NBRS(){
    for(let n = 0;n < PN;n++){
        if(n < 10){
            if(PN >= 10){
                if(AS[0] != undefined){
                    NB[n].innerHTML = n + 1;
                    NB[n].onclick = function(){
                        if(PCN == 0){
                            if(n > PSO){
                                PSN = n;
                                PCNS();
                            }
                            if(n < PSO){
                                PSL = n;
                                PCLS();
                            }
                        }
                    }
                }else{
                    if(PSO - 1 >= 3){
                        if(PN - PSO > 5){
                            NB[n].innerHTML = PSO + n - 3;
                            NB[n].onclick = function(){
                                if(PCN == 0){
                                    if(PSO + n - 4 > PSO){
                                        PSN = PSO + n - 4;
                                        PCNS();
                                    }
                                    if(PSO + n - 4 < PSO){
                                        PSL = PSO + n - 4;
                                        PCLS();
                                    }
                                }
                            }
                        }else{
                            NB[n].innerHTML = PN - 9 + n;
                            NB[n].onclick = function(){
                                if(PCN == 0){
                                    if(PN - 10 + n > PSO){
                                        PSN = PN - 10 + n;
                                        PCNS();
                                    }
                                    if(PN - 10 + n < PSO){
                                        PSL = PN - 10 + n;
                                        PCLS();
                                    }
                                }
                            }
                        }
                    }else{
                        NB[n].innerHTML = n + 1;
                        NB[n].onclick = function(){
                            if(PCN == 0){
                                if(n > PSO){
                                    PSN = n;
                                    PCNS();
                                }
                                if(n < PSO){
                                    PSL = n;
                                    PCLS();
                                }
                            }
                        }
                    }
                }
            }
            NB[n].style.cssText = 'width:' + height * 0.05 + 'px;height:' + height * 0.05 + 'px;line-height:' + height * 0.05 + 'px;font-size:' + height * 0.03 + 'px;border: solid ' + height * 0.003 + 'px #707070;margin:' + height * 0.012 + 'px ' + height * 0.01 + 'px';
            if(NB[n].innerHTML == PSO + 1){
                NB[n].classList.remove('NBWC');
                NB[n].classList.add('NBC');
            }else{
                NB[n].classList.remove('NBC');
                NB[n].classList.add('NBWC');
            }
        }
    }
}