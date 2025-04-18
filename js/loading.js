/* 载入界面 */
function loading_set(){
    loadingBox.style.lineHeight = sh + 'px';
    loading.style.width = sw * 0.08 +'px';
    background_information();
}
/* 页面加载完成 */
function loadingSet_over(){
    loading_time_n--;
    if(loading_time_n == 0){
        clearInterval(loadingSet_time);
        loadingBox.style.display = 'none';
        if(loading_state == 0){
        }
        loading_state = 1;
    }
}