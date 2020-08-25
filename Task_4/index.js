const popUpBgElement = document.getElementById("pop_up_bg");
const popUpElement = document.getElementById("popup");
const cancelBtn = document.getElementById("popup_cancel_btn");
const button = document.getElementById("click_me_btn");
let isPopUpShowing = false;

const popUpHandeler = ()=>{
    isPopUpShowing = !isPopUpShowing;
    console.log("run>>");
    if(isPopUpShowing){
        popUpBgElement.classList.remove("hidden");
        popUpElement.classList.remove("hidden");
        cancelBtn.classList.remove("hidden");
    }else{
        popUpBgElement.classList.add("hidden");
        popUpElement.classList.add("hidden");
        cancelBtn.classList.add("hidden");
    }
}

//** Events */
button.addEventListener('click', popUpHandeler);
cancelBtn.addEventListener('click', popUpHandeler);
popUpBgElement.addEventListener('click', popUpHandeler);