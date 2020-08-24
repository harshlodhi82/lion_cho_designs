const popUpBgElement = document.getElementById("pop_up_bg");
const popUpElement = document.getElementById("main_pop_up");
const choleithiasisButton = document.getElementById("choleithiasis_button");
let isPopUpShowing = false;

const popUpHandeler = ()=>{
    isPopUpShowing = !isPopUpShowing;
    if(isPopUpShowing){
        popUpBgElement.classList.remove("hidden");
        popUpElement.classList.remove("hidden");
    }else{
        popUpBgElement.classList.add("hidden");
        popUpElement.classList.add("hidden");
    }
}

//** Events */
choleithiasisButton.addEventListener('click', popUpHandeler);
popUpBgElement.addEventListener('click', popUpHandeler);