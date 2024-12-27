
document.getElementById("nameDisplay").innerText = sessionStorage.getItem("name");
document.getElementById("birthdateDisplay").innerText = sessionStorage.getItem("birthdate");
document.getElementById("genderDisplay").innerText = sessionStorage.getItem("fe_male") === "М" ? "Мужской" : "Женский";


document.getElementById("logoutBtn1").addEventListener("click", function() {
    sessionStorage.clear(); 
    window.location.href = "avtor.html"; 
});


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




const results = JSON.parse(localStorage.getItem("results")) || [];
const score = localStorage.getItem("score") || "0 из 6";

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");


results.forEach(resultHTML => {
    const div = document.createElement("div");
    div.innerHTML = resultHTML;
    resultsDiv.appendChild(div);
});


scoreDiv.textContent = `Вы набрали: ${score}`;


const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("results");
    localStorage.removeItem("score");

    
    resultsDiv.innerHTML = "";
    scoreDiv.textContent = "Вы набрали: 0 из 6";

    
});