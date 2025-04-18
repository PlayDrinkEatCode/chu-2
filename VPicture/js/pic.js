function PBS() {
    PBB.id = 'PBB';
    PBB.innerHTML = '';
    for (let n = 0; n < PN; n++) {
        SPB = document.createElement('div');
        SPB.className = 'PB';
        SP = document.createElement('img');
        SP.className = 'P';
        SPB.appendChild(SP);
        PBB.appendChild(SPB);
        PLS[n] = 0;
        PRS[n] = 100;
        AY[n] = 0;
        AZ[n] = 0;
        if (n == PN - 1) {
            PSL = PN - 1;
            PSN = PSO + 1;
            main.appendChild(PBB);
            PB = document.getElementsByClassName('PB');
            P = document.getElementsByClassName('P');
            PIS();
        }
    }
}
function PBCS() {
    PBB.style.cssText = 'width:' + PBW + 'px;height:' + PBH + 'px;background-color:' + PD[1];
    for (let n = 0; n < PB.length; n++) {
        PB[n].style.cssText = 'left:' + PBW + 'px;width:' + PBW + 'px;height:' + PBH + 'px';
        if (n == PB.length - 1) {
            PIBCS();
        }
    }
}
function PSS() {
    PRL = PLS.indexOf(0);
    if (PRL != -1) {
        P[PRL].style.cssText = 'postion: absolute;margin:' + height + 'px';
        P[PRL].src = PA[PRL];
        P[PRL].crossOrigin = 'Anonymous';
        PLS[PRL] = 1;
        PST[PRL] = setInterval('PSSG()', 50);
    }
}
function PSSG() {
    if (P[PRL].complete == true && P[PRL].offsetWidth != 0) {
        clearInterval(PST[PRL]);
        PW[PRL] = P[PRL].offsetWidth;
        PH[PRL] = P[PRL].offsetHeight;
        P[PRL].addEventListener('mousedown', function (event) {
            event.preventDefault();
            if (PRS[PSO] > 100) {
                ESX[PSO] = event.clientX;
                ESY[PSO] = event.clientY;
            }
        });
        P[PRL].addEventListener('mousemove', function (event) {
            if (ESX[PSO] != '') {
                if (PRS[PSO] > 100) {
                    PMS(event);
                }
            } else {
                if (PRS[PSO] > 100) {
                    P[PSO].style.cursor = CS[2];
                } else {
                    if (P[PSO].style.cursor.indexOf(', move') != -1) {
                        P[PSO].style.cursor = CS[0];
                    }
                }
            }
        });
        document.addEventListener('mousemove', function (event) {
            if (PCS == 0) {
                if (MS[2] == 2 && PCT == undefined) {
                    MS[2] = 1;
                }
            }
            if (PRS[PSO] == 100 && MS[2] == 1) {
                PMPS(event);
            }
        });
        document.addEventListener('mouseup', function () {
            if (ESX[PSO] != '' && PRS[PSO] > 100) {
                ESX[PSO] = '';
                PLTX[PSO] = Number(P[PSO].style.transform.split('translateX(')[1].split('px)')[0]);
                PLTY[PSO] = Number(P[PSO].style.transform.split('translateY(')[1].split('px)')[0]);
            }
        });
        P[PRL].addEventListener('touchstart', function (event) {
            event.preventDefault();
            if (PRS[PSO] > 100) {
                ESX[PSO] = event.clientX;
                ESY[PSO] = event.clientY;
            }
        });
        P[PRL].addEventListener('touchmove', function (event) {
            event.preventDefault();
            if (ESX[PSO] != '') {
                if (PRS[PSO] > 100) {
                    PMS(event);
                }
            } else {
                if (PRS[PSO] > 100) {
                    P[PSO].style.cursor = CS[2];
                } else {
                    if (P[PSO].style.cursor.indexOf(', move') != -1) {
                        P[PSO].style.cursor = CS[0];
                    }
                }
            }
        });
        document.addEventListener('touchend', function () {
            if (ESX[PSO] != '' && PRS[PSO] > 100) {
                ESX[PSO] = '';
                PLTX[PSO] = Number(P[PSO].style.transform.split('translateX(')[1].split('px)')[0]);
                PLTY[PSO] = Number(P[PSO].style.transform.split('translateY(')[1].split('px)')[0]);
            }
        });
        PLS[PRL] = 2;
        PLSS();
    }
}
function PLSS() {
    PLTX[PSO] = PLTY[PSO] = 0;
    P[PRL].style.transform = 'rotateY(' + AY[PSO] + 'deg) rotateZ(' + AZ[PSO] + 'deg) translateX(0px) translateY(0px)';
    if (PD[0] != 4) {
        if (AZ[PSO] % 180 == 0) {
            if (PW[PRL] / PH[PRL] >= PBW / PBH) {
                P[PRL].style.width = PBW * PRS[PRL] / 100 + 'px';
                P[PRL].style.height = 'auto';
                P[PRL].style.margin = (PBH - P[PRL].offsetWidth * PH[PRL] / PW[PRL]) / 2 + 'px ' + (PBW - P[PRL].offsetWidth) / 2 + 'px';
            } else {
                P[PRL].style.width = 'auto';
                P[PRL].style.height = PBH * PRS[PRL] / 100 + 'px';
                P[PRL].style.margin = (PBH - P[PRL].offsetHeight) / 2 + 'px ' + (PBW - P[PRL].offsetHeight * PW[PRL] / PH[PRL]) / 2 + 'px';
            }
        } else {
            if (PH[PRL] / PW[PRL] >= PBW / PBH) {
                P[PRL].style.width = 'auto';
                P[PRL].style.height = PBW * PRS[PRL] / 100 + 'px';
                P[PRL].style.margin = (PBH - P[PRL].offsetHeight) / 2 + 'px ' + (PBW - P[PRL].offsetHeight * PW[PRL] / PH[PRL]) / 2 + 'px';
            } else {
                P[PRL].style.width = PBH * PRS[PRL] / 100 + 'px';
                P[PRL].style.height = 'auto';
                P[PRL].style.margin = (PBH - P[PRL].offsetWidth * PH[PRL] / PW[PRL]) / 2 + 'px ' + (PBW - P[PRL].offsetWidth) / 2 + 'px';
            }
        }
    } else {
        if (PW[PRL] / PH[PRL] >= PBW / PBH) {
            P[PRL].style.width = PBW + 'px';
            P[PRL].style.height = 'auto';
            P[PRL].style.margin = (PBH - PBW * PH[PRL] / PW[PRL]) / 2 + 'px 0px';
        } else {
            P[PRL].style.width = 'auto';
            P[PRL].style.height = height + 'px';
            P[PRL].style.margin = '0px ' + (PBW - PBH * PW[PRL] / PH[PRL]) / 2 + 'px';
        }
    }
    PNW[PRL] = P[PRL].offsetWidth;
    PNH[PRL] = P[PRL].offsetHeight;
    if (PRL == 0) {
        IPMTS();
    }
    PSS();
}
function PAS() {
    if (AS[0] == undefined) {
        if ([2, 3, 4].indexOf(Number(PD[0])) == -1) {
            B[1].src = BS[2];
        }
        ISM[12].innerHTML = '轮播功能： 开启';
        AS[0] = setInterval(function () {
            PCNS();
        }, AS[1]);
    } else {
        if ([2, 3, 4].indexOf(Number(PD[0])) == -1) {
            B[1].src = BS[1];
        }
        ISM[12].innerHTML = '轮播功能： 关闭';
        clearInterval(AS[0]);
        AS[0] = undefined;
    }
}
function PCLS() {
    if (PD[2] == 0) {
        PCS == 0;
        if (PD[0] != 3) {
            PSL--;
            PSO--;
            PSN--;
            PSC();
        } else {
            PB[PSO].style.left = - PBW + 'px';
            PSO = PSL;
            PB[PSO].style.left = '0px';
            NBRS();
        }
    }
    if (PD[2] == 1) {
        if (PCN == 0) {
            if (PN > 2) {
                PCS = 0;
                if (PSL == 0 && PD[0] == 3) {
                    PCS = 1;
                }
            } else {
                PCS = 1;
            }
            PSC();
            if (PCT == undefined) {
                if (MS[2] == 1) {
                    PMP.style.width = '0px';
                    MS[2] = 2;
                }
                PCT = setInterval(function () {
                    if (PCN == PD[3]) {
                        clearInterval(PCT);
                        PCT = undefined;
                        PCN = 0;
                        if (PD[0] != 3) {
                            PSL--;
                            PSO--;
                            PSN--;
                        } else {
                            PSO = PSL;
                            PSL = PSO - 1;
                            PSN = PSO + 1;
                            NBRS();
                        }
                        PSC();
                    } else {
                        PB[PSL].style.left = Number(PB[PSL].style.left.replace('px', '')) + (PBW / PD[3]) + 'px';
                        PB[PSO].style.left = Number(PB[PSO].style.left.replace('px', '')) + (PBW / PD[3]) + 'px';
                        PCN++;
                    }
                }, PD[4]);
            }
        }
    }
    if (PD[2] == 2) {
        if (PCN == 0) {
            if (PN > 2) {
                PCS = 0;
                if (PSL == 0 && PD[0] == 3) {
                    PCS = 1;
                }
            } else {
                PCS = 1;
            }
            PSC();
            P[PSL].style.opacity = 0;
            P[PSO].style.opacity = 1;
            PB[PSL].style.left = '0px';
            PB[PSO].style.left = '0px';
            if (PCT == undefined) {
                if (MS[2] == 1) {
                    PMP.style.width = '0px';
                    MS[2] = 2;
                }
                PCT = setInterval(function () {
                    if (PCN == PD[3]) {
                        clearInterval(PCT);
                        PCT = undefined;
                        PCN = 0;
                        P[PSL].style.opacity = 1;
                        P[PSO].style.opacity = 0;
                        PB[PSL].style.left = '0px';
                        PB[PSO].style.left = PBW + 'px';
                        if (PD[0] != 3) {
                            PSL--;
                            PSO--;
                            PSN--;
                        } else {
                            PSO = PSL;
                            PSL = PSO - 1;
                            PSN = PSO + 1;
                            NBRS();
                        }
                        PSC();
                    } else {
                        P[PSL].style.opacity = Number(P[PSL].style.opacity) + 1 / PD[3];
                        P[PSO].style.opacity = Number(P[PSO].style.opacity) - 1 / PD[3];
                        PCN++;
                    }
                }, PD[4]);
            }
        }
    }
}
function PCNS() {
    if (PD[2] == 0) {
        PCS = 0;
        if (PD[0] != 3) {
            PSL++;
            PSO++;
            PSN++;
            PSC();
        } else {
            PB[PSO].style.left = - PBW + 'px';
            PSO = PSN;
            PB[PSO].style.left = '0px';
            NBRS();
        }
    }
    if (PD[2] == 1) {
        if (PCN == 0) {
            if (PN > 2) {
                PCS = 0;
            } else {
                PCS = 2;
            }
            PSC();
            if (PCT == undefined) {
                if (MS[2] == 1) {
                    PMP.style.width = '0px';
                    MS[2] = 2;
                }
                PCT = setInterval(function () {
                    if (PCN == PD[3]) {
                        clearInterval(PCT);
                        PCT = undefined;
                        PCN = 0;
                        if (PD[0] != 3) {
                            PSL++;
                            PSO++;
                            PSN++;
                        } else {
                            PSO = PSN;
                            PSL = PSO - 1;
                            PSN = PSO + 1;
                            NBRS();
                        }
                        PSC();
                    } else {
                        PB[PSO].style.left = Number(PB[PSO].style.left.replace('px', '')) - (PBW / PD[3]) + 'px';
                        PB[PSN].style.left = Number(PB[PSN].style.left.replace('px', '')) - (PBW / PD[3]) + 'px';
                        PCN++;
                    }
                }, PD[4]);
            }
        }
    }
    if (PD[2] == 2) {
        if (PCN == 0) {
            if (PN > 2) {
                PCS = 0;
                if (PSL == 0 && PD[0] == 3) {
                    PCS = 1;
                }
            } else {
                PCS = 1;
            }
            PSC();
            P[PSO].style.opacity = 1;
            P[PSN].style.opacity = 0;
            PB[PSO].style.left = '0px';
            PB[PSN].style.left = '0px';
            if (PCT == undefined) {
                if (MS[2] == 1) {
                    PMP.style.width = '0px';
                    MS[2] = 2;
                }
                PCT = setInterval(function () {
                    if (PCN == PD[3]) {
                        clearInterval(PCT);
                        PCT = undefined;
                        PCN = 0;
                        P[PSO].style.opacity = 0;
                        P[PSN].style.opacity = 1;
                        PB[PSO].style.left = - PBW + 'px';
                        PB[PSN].style.left = '0px';
                        if (PD[0] != 3) {
                            PSL++;
                            PSO++;
                            PSN++;
                        } else {
                            PSO = PSN;
                            PSL = PSO - 1;
                            PSN = PSO + 1;
                            NBRS();
                        }
                        PSC();
                    } else {
                        P[PSO].style.opacity = Number(P[PSO].style.opacity) - 1 / PD[3];
                        P[PSN].style.opacity = Number(P[PSN].style.opacity) + 1 / PD[3];
                        PCN++;
                    }
                }, PD[4]);
            }
        }
    }
}
function PES() {
    if (PCS == 0) {
        PB[PSL].style.left = - PBW + 'px';
        PB[PSO].style.left = '0px';
        PB[PSN].style.left = PBW + 'px';
    } else if (PCS == 1) {
        PB[PSL].style.left = - PBW + 'px';
        PB[PSO].style.left = '0px';
    } else {
        PB[PSO].style.left = '0px';
        PB[PSN].style.left = PBW + 'px';
    }
}
function PSC() {
    if (AS[0] != undefined && PD[0] == 3 && PN > 10) {
        if (PSL < 0) {
            PSL = 9;
        }
        if (PSL > 9) {
            PSL = 0;
        }
        if (PSO < 0) {
            PSL = 9;
        }
        if (PSO > 9) {
            PSO = 0;
        }
        if (PSN < 0) {
            PSL = 9;
        }
        if (PSN > 9) {
            PSN = 0;
        }
    } else {
        if (PSL < 0) {
            PSL = PN - 1;
        }
        if (PSL > PN - 1) {
            PSL = 0;
        }
        if (PSO < 0) {
            PSO = PN - 1;
        }
        if (PSO > PN - 1) {
            PSO = 0;
        }
        if (PSN < 0) {
            PSN = PN - 1;
        }
        if (PSN > PN - 1) {
            PSN = 0;
        }
    }
    if (PRS[PSO] != 100 || AZ[PSO] != 0) {
        MS[2] = 0;
    }
    PMP.style.width = '0px';
    PMP.src = P[PSO].src;
    IPMTS();
    PIBMS();
    PES();
}
function IPMTS() {
    IPM[0].innerHTML = '图片地址：' + P[PSO].src;
    IPM[1].innerHTML = '图片名称：' + P[PSO].src.split('/')[P[PSO].src.split('/').length - 1].split('.')[0];
    IPM[2].innerHTML = '图片格式：' + P[PSO].src.split('.')[P[PSO].src.split('.').length - 1];
    IPM[3].innerHTML = '图片尺寸：' + PW[PSO] + '*' + PH[PSO];
    IPM[4].innerHTML = '当前尺寸：' + PNW[PSO] + '*' + PNH[PSO];
    IPM[5].innerHTML = '缩放比例：' + String(PNW[PSO] / PW[PSO] * 100).substr(0).split('.')[0] + '%';
}
function PNTS() {
    if (AY[PSO] == 360) {
        AY[PSO] = 0;
    }
    if (AZ[PSO] % 360 == 0) {
        AZ[PSO] = 0;
    }
    if (AZ[PSO] == -270) {
        AZ[PSO] = 90;
    }
    P[PSO].style.transform = 'rotateY(' + AY[PSO] + 'deg) rotateZ(' + AZ[PSO] + 'deg)';
    PNSS();
}
function PNSS() {
    if (PRS[PSO] != 100 || AZ[PSO] != 0) {
        MS[2] = 0;
    }
    PLTX[PSO] = PLTY[PSO] = 0;
    P[PSO].style.transform = 'rotateY(' + AY[PSO] + 'deg) rotateZ(' + AZ[PSO] + 'deg) translateX(0px) translateY(0px)';
    if (PD[0] != 4) {
        if (AZ[PSO] % 180 == 0) {
            if (PW[PSO] / PH[PSO] >= PBW / PBH) {
                P[PSO].style.width = PBW * PRS[PSO] / 100 + 'px';
                P[PSO].style.height = 'auto';
                P[PSO].style.margin = (PBH - P[PSO].offsetWidth * PH[PSO] / PW[PSO]) / 2 + 'px ' + (PBW - P[PSO].offsetWidth) / 2 + 'px';
            } else {
                P[PSO].style.width = 'auto';
                P[PSO].style.height = PBH * PRS[PSO] / 100 + 'px';
                P[PSO].style.margin = (PBH - P[PSO].offsetHeight) / 2 + 'px ' + (PBW - P[PSO].offsetHeight * PW[PSO] / PH[PSO]) / 2 + 'px';
            }
        } else {
            if (PH[PSO] / PW[PSO] >= PBW / PBH) {
                P[PSO].style.width = 'auto';
                P[PSO].style.height = PBW * PRS[PSO] / 100 + 'px';
                P[PSO].style.margin = (PBH - P[PSO].offsetHeight) / 2 + 'px ' + (PBW - P[PSO].offsetHeight * PW[PSO] / PH[PSO]) / 2 + 'px';
            } else {
                P[PSO].style.width = PBH * PRS[PSO] / 100 + 'px';
                P[PSO].style.height = 'auto';
                P[PSO].style.margin = (PBH - P[PSO].offsetWidth * PH[PSO] / PW[PSO]) / 2 + 'px ' + (PBW - P[PSO].offsetWidth) / 2 + 'px';
            }
        }
    } else {
        if (PW[PSO] / PH[PSO] >= PBW / PBH) {
            P[PSO].style.width = PBW + 'px';
            P[PSO].style.height = 'auto';
            P[PSO].style.margin = (PBH - PBW * PH[PSO] / PW[PSO]) / 2 + 'px 0px';
        } else {
            P[PSO].style.width = 'auto';
            P[PSO].style.height = height + 'px';
            P[PSO].style.margin = '0px ' + (PBW - PBH * PW[PSO] / PH[PSO]) / 2 + 'px';
        }
    }
    PNW[PSO] = P[PSO].offsetWidth;
    PNH[PSO] = P[PSO].offsetHeight;
    IPMTS();
}
function PMS() {
    if (navigator.appVersion.indexOf('Mobile') != -1) {
        /* 移动端 */
        EOX[PSO] = event.touches[0].clientX;
        EOY[PSO] = event.touches[0].clientY;
        /* 移动端 */
    } else {
        EOX[PSO] = event.clientX;
        EOY[PSO] = event.clientY;
    }
    if (AZ[PSO] % 180 == 0) {
        if (AZ[PSO] == 0) {
            if (AY[PSO] == 180) {
                PTX[PSO] = PLTX[PSO] - (EOX[PSO] - ESX[PSO]);
            } else {
                PTX[PSO] = PLTX[PSO] + (EOX[PSO] - ESX[PSO]);
            }
            PTY[PSO] = PLTY[PSO] + (EOY[PSO] - ESY[PSO]);
        } else {
            if (AY[PSO] == 180) {
                PTX[PSO] = PLTX[PSO] + (EOX[PSO] - ESX[PSO]);
            } else {
                PTX[PSO] = PLTX[PSO] - (EOX[PSO] - ESX[PSO]);
            }
            PTY[PSO] = PLTY[PSO] - (EOY[PSO] - ESY[PSO]);
        }
        if (PNW[PSO] > PBW) {
            if (PTX[PSO] > (PNW[PSO] - PBW) / 2) {
                PTX[PSO] = (PNW[PSO] - PBW) / 2;
            } else if (PTX[PSO] < 0 && - PTX[PSO] > (PNW[PSO] - PBW) / 2) {
                PTX[PSO] = - (PNW[PSO] - PBW) / 2;
            }
        } else {
            PTX[PSO] = 0;
        }
        if (PNH[PSO] > PBH) {
            if (PTY[PSO] > 0 && PTY[PSO] > (PNH[PSO] - PBH) / 2) {
                PTY[PSO] = (PNH[PSO] - PBH) / 2;
            } else if (PTY[PSO] < 0 && - PTY[PSO] > (PNH[PSO] - PBH) / 2) {
                PTY[PSO] = - (PNH[PSO] - PBH) / 2;
            }
        } else {
            PTY[PSO] = 0;
        }
    } else {
        if (AZ[PSO] == 90) {
            PTX[PSO] = PLTX[PSO] + (EOY[PSO] - ESY[PSO]);
            if (AY[PSO] == 180) {
                PTY[PSO] = PLTY[PSO] + (EOX[PSO] - ESX[PSO]);
            } else {
                PTY[PSO] = PLTY[PSO] - (EOX[PSO] - ESX[PSO]);
            }
        } else {
            PTX[PSO] = PLTX[PSO] - (EOY[PSO] - ESY[PSO]);
            if (AY[PSO] == 180) {
                PTY[PSO] = PLTY[PSO] - (EOX[PSO] - ESX[PSO]);
            } else {
                PTY[PSO] = PLTY[PSO] + (EOX[PSO] - ESX[PSO]);
            }
        }
        if (PNW[PSO] > PBH) {
            if (PTX[PSO] > (PNW[PSO] - PBH) / 2) {
                PTX[PSO] = (PNW[PSO] - PBH) / 2;
            } else if (PTX[PSO] < 0 && - PTX[PSO] > (PNW[PSO] - PBH) / 2) {
                PTX[PSO] = - (PNW[PSO] - PBH) / 2;
            }
        } else {
            PTX[PSO] = 0;
        }
        if (PNH[PSO] > PBW) {
            if (PTY[PSO] > 0 && PTY[PSO] > (PNH[PSO] - PBW) / 2) {
                PTY[PSO] = (PNH[PSO] - PBW) / 2;
            } else if (PTY[PSO] < 0 && - PTY[PSO] > (PNH[PSO] - PBW) / 2) {
                PTY[PSO] = - (PNH[PSO] - PBW) / 2;
            }
        } else {
            PTY[PSO] = 0;
        }
    }
    P[PSO].style.transform = 'rotateY(' + AY[PSO] + 'deg) rotateZ(' + AZ[PSO] + 'deg) translateX(' + PTX[PSO] + 'px) translateY(' + PTY[PSO] + 'px)';
}
function picDownload() {
    ajax = new XMLHttpRequest();
    ajax.open('GET', P[PSO].src, true);
    ajax.responseType = 'blob';
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            a.href = window.URL.createObjectURL(new Blob([ajax.response]));
            a.download = DS[1] + '文件：' + P[PSO].src.split('/')[P[PSO].src.split('/').length - 1];
            a.click();
        }
    }
    ajax.send(null);
}
function PWRS() {
    for (let n = 0; n < PN; n++) {
        PLTX[n] = PLTY[n] = 0;
        P[n].style.transform = 'rotateY(' + AY[n] + 'deg) rotateZ(' + AZ[n] + 'deg) translateX(0px) translateY(0px)';
        if (PD[0] != 4) {
            if (AZ[n] % 180 == 0) {
                if (PW[n] / PH[n] >= PBW / PBH) {
                    P[n].style.width = PBW * PRS[n] / 100 + 'px';
                    P[n].style.height = 'auto';
                    P[n].style.margin = (PBH - P[n].offsetWidth * PH[n] / PW[n]) / 2 + 'px ' + (PBW - P[n].offsetWidth) / 2 + 'px';
                } else {
                    P[n].style.width = 'auto';
                    P[n].style.height = PBH * PRS[n] / 100 + 'px';
                    P[n].style.margin = (PBH - P[n].offsetHeight) / 2 + 'px ' + (PBW - P[n].offsetHeight * PW[n] / PH[n]) / 2 + 'px';
                }
            } else {
                if (PH[n] / PW[n] >= PBW / PBH) {
                    P[n].style.width = 'auto';
                    P[n].style.height = PBW * PRS[n] / 100 + 'px';
                    P[n].style.margin = (PBH - P[n].offsetHeight) / 2 + 'px ' + (PBW - P[n].offsetHeight * PW[n] / PH[n]) / 2 + 'px';
                } else {
                    P[n].style.width = PBH * PRS[n] / 100 + 'px';
                    P[n].style.height = 'auto';
                    P[n].style.margin = (PBH - P[n].offsetWidth * PH[n] / PW[n]) / 2 + 'px ' + (PBW - P[n].offsetWidth) / 2 + 'px';
                }
            }
        } else {
            if (PW[n] / PH[n] >= PBW / PBH) {
                P[n].style.width = PBW + 'px';
                P[n].style.height = 'auto';
                P[n].style.margin = (PBH - PBW * PH[n] / PW[n]) / 2 + 'px 0px';
            } else {
                P[n].style.width = 'auto';
                P[n].style.height = height + 'px';
                P[n].style.margin = '0px ' + (PBW - PBH * PW[n] / PH[n]) / 2 + 'px';
            }
        }
        PNW[n] = P[n].offsetWidth;
        PNH[n] = P[n].offsetHeight;
        if (n == PN - 1) {
            PSC();
        }
    }
}