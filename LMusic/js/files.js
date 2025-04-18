window.ondragenter = function(event){
    event.preventDefault();
}
window.ondragover = function(event){
    event.preventDefault();
}
document.body.ondrop = function(fileData){
    for(let n = 0;n < fileData.dataTransfer.files.length;n++){
        if(['audio/mpeg','audio/flac','audio/wav','audio/ogg','audio/x-m4a'].indexOf(fileData.dataTransfer.files[n].type) != -1){
            let i = fileName.length;
            fileName[i] = fileData.dataTransfer.files[n].name;
            musicAllName[musicNumber] = '';
            for(let n = 0;n < fileName[i].split('.').length - 1;n++){
                musicAllName[musicNumber] += fileName[i].split('.')[n];
                if(n != fileName[i].split('.').length - 2){
                    musicAllName[musicNumber] += '.';
                }
            }
            musicName[musicNumber] = musicAllName[musicNumber].split(' - ')[1];
            singerName[musicNumber] = musicAllName[musicNumber].split(' - ')[0];
            musicSrc.push(URL.createObjectURL(fileData.dataTransfer.files[n]));
            coverSrc.push('cover/user.jpg');
            let m = fileNumber.length;
            fileNumber[m] = musicNumber;
            musicNumber++;
            if(musicNumber == 1){
                coverBug = 0;
                music[musicNow].src = musicSrc[musicNow];
                cover.src = coverSrc[musicNow];
                musicIntroduceSet();
                if(musicPlay == 0){
                    music[musicNow].play();
                }
            }
        }
    }
    if(fileData.dataTransfer.files.length == 1){
        if(fileNumber.indexOf(musicNow) != -1){
            if(['image/jpeg','image/png'].indexOf(fileData.dataTransfer.files[0].type) != -1){
                coverBug = 0;
                coverSrc[musicNow] = URL.createObjectURL(fileData.dataTransfer.files[0]);
                cover.src = coverSrc[musicNow];
                window.parent.coverChange();
            }
            if(fileData.dataTransfer.files[0].type == 'text/plain' || fileData.dataTransfer.files[0].type == ''){
                wordsTextGet(URL.createObjectURL(fileData.dataTransfer.files[0]));
            }
        }
    }
    fileData.stopPropagation();
    fileData.preventDefault();
}

JavaScript.add('js/list.js');