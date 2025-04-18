function PMBS() {
    if ([0, 2].indexOf(Number(PD[0])) != -1 && PM[0] == 1) {
        PMB.id = 'PMB';
        PMP.id = 'PMP';
        PMB.appendChild(PMP);
        main.appendChild(PMB);
    }
    BTS();
}
function PMSS() {
    if (MS[2] == 0 && AZ[PSO] == 0) {
        MS[2] = 1;
        PMP.src = P[PSO].src;
    } else {
        MS[2] = 0;
    }
}
function PMPS(event) {
    PT[PSO] = P[PSO].offsetTop + PB[PSO].offsetTop;
    PL[PSO] = P[PSO].offsetLeft + PB[PSO].offsetLeft;
    MBX = event.clientX;
    MBY = event.clientY;
    MBW = PBH * 0.15;
    MBH = PBH * 0.15;
    if (event.clientX - PL[PSO] < MBW / 2) {
        MBX = PL[PSO];
        MX = - MBW * 0.5 * (MS[1] - 1);
    } else {
        if (event.clientX - PL[PSO] > PNW[PSO] - MBW / 2) {
            MBX = PL[PSO] + PNW[PSO] - MBW;
            MX = - MBW * 0.5 * (MS[1] - 1) - (PNW[PSO] - MBW) * MS[1];
        } else {
            MBX = event.clientX - MBW / 2;
            MX = - MBW * 0.5 * (MS[1] - 1) - (event.clientX - PL[PSO] - MBW * 0.5) * MS[1];
        }
    }
    if (AY[PSO] == 180) {
        MX = - MX - PNW[PSO] * MS[1] + MBW;
    }
    if (event.clientY - PT[PSO] < MBH / 2) {
        MBY = PT[PSO];
        MY = - MBH * 0.5 * (MS[1] - 1);
    } else {
        if (event.clientY - PT[PSO] > PNH[PSO] - MBH / 2) {
            MBY = PT[PSO] + PNH[PSO] - MBH;
            MY = - MBH * 0.5 * (MS[1] - 1) - (PNH[PSO] - MBH) * MS[1];
        } else {
            MBY = event.clientY - MBH / 2;
            MY = - MBH * 0.5 * (MS[1] - 1) - (event.clientY - PT[PSO] - MBH * 0.5) * MS[1];
        }
    }
    if (event.clientX > PL[PSO] && event.clientX < PL[PSO] + PNW[PSO] && event.clientY > PT[PSO] && event.clientY < PT[PSO] + PNH[PSO]) {
        PMB.style.cssText = 'width:' + MBW + 'px;height:' + MBH + 'px;margin:' + MBY + 'px ' + MBX + 'px;transform: rotateY(' + AY[PSO] + 'deg)';
        PMP.style.cssText = 'width:' + PNW[PSO] * MS[1] + 'px;height:' + PNH[PSO] * MS[1] + 'px;transform: translateX(' + MX + 'px) translateY(' + MY + 'px)';
    } else {
        PMP.style.width = '0px';
    }
}