const userInfo = document.getElementById("userInfo");
const userLogin = document.getElementById("userLogin");
const userDob = document.getElementById("userDob");
const userGender = document.getElementById("userGender");
const logoutBtn = document.getElementById("logoutBtn");


const userData = JSON.parse(localStorage.getItem("userData"));


if (!userData) {
    
    window.location.href = "index.html";
} else {
    
    userLogin.textContent = userData.login;
    userDob.textContent = userData.dob;
    userGender.textContent = userData.gender;
}


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.href = "index.html";
});


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


