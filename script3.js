var x = 1; 
var array = document.getElementsByClassName('def');


function updateSlideInfo() {
    document.getElementById("slide_info").textContent = x + " слайд из " + array.length;
}


function forward() {
    if (x < array.length) {
        x++;
    }
    document.documentElement.style.setProperty("--el", (x - 1) * (-700) + "px");
    updateSlideInfo();
}


function backward() {
    if (x != 1) {
        x--;
    }
    document.documentElement.style.setProperty("--el", (x - 1) * (-700) + "px");
    updateSlideInfo();
}


document.getElementById("btn_forward").addEventListener("click", forward);
document.getElementById("btn_backward").addEventListener("click", backward);


updateSlideInfo();
