var x = 1;
var array = document.getElementsByClassName('def');


var captions = [
    "Охотник за стеллароном - Блэйд",
    "Детектив из клана Гончих Пенаконии - Галлахер",
    "Киборг-ковбой, скитающийся среди звёзд - Бутхилл",
    "Топ-менеджер отдела стратегических инвестиций КММ - Авантюрин",
    "Мусорные баки"
];

function updateSlideInfo() {
    document.getElementById("slide_info").textContent = x + " слайд из " + array.length;
    updateCaption();
}

function updateCaption() {
    const captionElement = document.getElementById("slide_caption");
    captionElement.style.opacity = 0; 

    setTimeout(() => {
        captionElement.textContent = captions[x - 1]; 
        captionElement.style.opacity = 1; 
    }, 500); 
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


window.onload = () => {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    
    const userName = sessionStorage.getItem('name');

    
    if (!userName) {
        location.href = "avtor.html";
    }

    
    userNameDisplay.textContent = userName;

    
    logoutBtn.addEventListener('click', () => {
        sessionStorage.clear(); 
        location.href = "avtor.html"; 
    });
};

