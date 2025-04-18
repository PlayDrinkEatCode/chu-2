function PIS(){
    if(PI[0] == 1 && PD[0] != 4){
        PIB.id = 'PIB';
        PIBM.id = 'PIBM';
        PIB.appendChild(PIBM);
        main.appendChild(PIB);
    }
    PMBS();
}
function PIBCS(){
    if(PI[0] == 1){
        PIB.style.cssText = 'top:' + PBH + 'px;width:' + PBW + 'px;height:' + IBH + 'px;background-color: '+ PI[1];
        PIBM.style.cssText = 'height:' + IBH + 'px;font-size:' + IBH * 0.6 + 'px;color:' + PI[2] + ';line-height:' + IBH + 'px';
    }
    BBCS();
}
function PIBMS(){
    PIBM.innerHTML = IT[PSO];
    clearInterval(PIBMMT);
    if(PIBM.offsetWidth > width){
        PIBM.style.marginLeft = '0px';
        PIBMMT = setInterval('PIBMLS()',100);
    }else{
        PIBM.style.marginLeft = '';
    }
}
function PIBMLS(){
    if(- PIBM.style.marginLeft.replace('px','') - PI[3] / 10 >= PIBM.offsetWidth - width){
        clearInterval(PIBMMT);
        PIBM.style.marginLeft = - (PIBM.offsetWidth - width) + 'px';
        PIBMMT = setInterval('PIBMRS()',100);
    }else{
        PIBM.style.marginLeft = PIBM.style.marginLeft.replace('px','') - Number(PI[3] / 10) + 'px';
    }
}
function PIBMRS(){
    if(- PIBM.style.marginLeft.replace('px','') - PI[3] / 10 <= 0){
        clearInterval(PIBMMT);
        PIBM.style.marginLeft = '0px';
        PIBMMT = setInterval('PIBMLS()',100);
    }else{
        PIBM.style.marginLeft = Number(PIBM.style.marginLeft.replace('px','')) +  Number(PI[3] / 10) + 'px';
    }
}