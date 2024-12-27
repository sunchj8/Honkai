const form_avtorizazia = document.forms.avtorizazia;  
const btn = document.getElementById("btn");  

form_avtorizazia.addEventListener('submit', (event) => {  
    event.preventDefault();  
    let proverka = true;  
    const name = document.getElementById("name"); 
    const birthdate = document.getElementById("birthdate"); 
    const fe_male = document.getElementById("fe_male"); 

    if (!form_avtorizazia.elements.name.validity.valid) {  
        document.getElementById("oshibka1").innerText = "Укажите имя (только русские символы и цифры. От 4 до 10)";    
        proverka = false;    
    } else {    
        document.getElementById("oshibka1").innerText = "";    
        name.innerText = "Ваше имя: " + form_avtorizazia.elements.name.value;    
        sessionStorage.setItem("name", form_avtorizazia.elements.name.value);  
    }    

    if (!form_avtorizazia.elements.birthdate.validity.valid) {  
        document.getElementById("oshibka2").innerText = "Укажите дату рождения";    
        proverka = false;    
    } else {    
        document.getElementById("oshibka2").innerText = "";    
        birthdate.innerText = "Дата рождения: " + form_avtorizazia.elements.birthdate.value;   
        sessionStorage.setItem("birthdate", form_avtorizazia.elements.birthdate.value);   
    }        

    const gender = form_avtorizazia.elements.gender.value;  
    if (!gender) {   
        document.getElementById("genderoshibka").innerText = "Пожалуйста, укажите пол.";   
        proverka = false;   
    } else {   
        document.getElementById("genderoshibka").innerText = "";   
        fe_male.innerText = "Пол: " + (gender === "М" ? "Мужской" : "Женский");   
        sessionStorage.setItem("fe_male", gender);   
    } 
    
    if (proverka) {   
        location.href = "index.html";   
    }   
});
