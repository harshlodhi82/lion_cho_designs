const popUpBgElement = document.getElementById("yt_video_popup_bg");
const popUpElement = document.getElementById("yt_video_popup");
const ytThumbnail = document.getElementById("yt_thumbnail");
const videoID = 'rIoi3lsV34M'
const videoUrl = `https://www.youtube.com/embed/${videoID}?enablejsapi=1`;
const videoThumbnailUrl = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;


let isPopUpShowing = false;
popUpElement.src = videoUrl;
ytThumbnail.src = videoThumbnailUrl;

const toggleVideo = (state) => {
    let func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    console.log(func);
    popUpElement.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

const popUpHandeler = ()=>{
    isPopUpShowing = !isPopUpShowing;
    if(isPopUpShowing){
        popUpBgElement.classList.remove("hidden");
        popUpElement.classList.remove("hidden");
        toggleVideo('play')
    }else{
        popUpBgElement.classList.add("hidden");
        popUpElement.classList.add("hidden");
        toggleVideo('hide')
    }
}

//** Events */
ytThumbnail.addEventListener('click', popUpHandeler);
popUpBgElement.addEventListener('click', popUpHandeler);