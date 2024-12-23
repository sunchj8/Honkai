const authModal = document.getElementById("authModal");
        const authForm = document.getElementById("authForm");

        const loginInput = document.getElementById("login");
        const dobInput = document.getElementById("dob");
        const genderInput = document.getElementById("gender");

        const loginError = document.getElementById("loginError");
        const dobError = document.getElementById("dobError");
        const genderError = document.getElementById("genderError");

        function showErrors(errors) {
            loginError.textContent = errors.login || "";
            dobError.textContent = errors.dob || "";
            genderError.textContent = errors.gender || "";
        }

        function validateForm() {
            const errors = {};
            const login = loginInput.value.trim();
            const dob = dobInput.value;
            const gender = genderInput.value;

            
            const loginRegex = /^[а-яА-Я0-9]{4,10}$/;
            if (!loginRegex.test(login)) {
                errors.login = "Логин: 4-10 символов, только русские буквы и цифры.";
            }

          
            const today = new Date().toISOString().split("T")[0];
            if (!dob || dob < "1950-01-01" || dob > today) {
                errors.dob = "Дата: 1950 - сегодня.";
            }

            
            if (!gender) {
                errors.gender = "Пол обязателен.";
            }

            return errors;
        }

        
        function checkUser() {
            const userData = JSON.parse(localStorage.getItem("userData"));
            if (!userData) {
                authModal.classList.remove("hidden");
            } else {
                authModal.classList.add("hidden");
            }
        }

        authForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const errors = validateForm();

            if (Object.keys(errors).length === 0) {
                const userData = {
                    login: loginInput.value.trim(),
                    dob: dobInput.value,
                    gender: genderInput.value,
                };
                localStorage.setItem("userData", JSON.stringify(userData));
                authModal.classList.add("hidden");
            } else {
                showErrors(errors);
            }
        });

        
        checkUser();