function coverSet(){
    cover.onload = function(){
        try{
            coverCanvas = document.createElement('canvas');
            coverCanvas.width = coverCanvas.height = 50;
            contextForCoverCanvas = coverCanvas.getContext('2d');
            contextForCoverCanvas.drawImage(cover,0,0,coverCanvas.width,coverCanvas.height);
            coverData = contextForCoverCanvas.getImageData(0,0,coverCanvas.width,coverCanvas.height).data;
            coverDataSet = [0,0,0];
            for(let n = 0;n < coverData.length;n += 4){
                coverDataSet[0] += coverData[n];
                coverDataSet[1] += coverData[n + 1];
                coverDataSet[2] += coverData[n + 2];
                if(n == coverData.length - 4){
                    coverDataSet[0] = Math.round(coverDataSet[0] / coverData.length * 4);
                    coverDataSet[1] = Math.round(coverDataSet[1] / coverData.length * 4);
                    coverDataSet[2] = Math.round(coverDataSet[2] / coverData.length * 4);
                    backgroundReSet();
                }
            }
        }catch{
            coverDataSet = [160,160,180];
            backgroundReSet();
        }
    }
    cover.onerror = function(){
        cover.src = 'cover/undefined.jpg';
        coverBug = 1;
    }
    backgroundColor.appendChild(cover);
    musicIntroduceBoxSet();
}/* 音乐封面设置 */

function coverCssSet(){
    Object.assign(cover.style,{
        margin: backgroundBoxHeight * 0.25 + 'px ' + (width * 0.25 - backgroundBoxHeight * 0.25) + 'px',
        width: backgroundBoxHeight * 0.5 + 'px',
        height: backgroundBoxHeight * 0.5 + 'px',
        borderRadius: backgroundBoxHeight * 0.025 + 'px'
    });
}/* 音乐封面样式设置 */

JavaScript.add('js/information.js');