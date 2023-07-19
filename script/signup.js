
let usernameInp = $("#username")[0];

if (usernameInp) {
    usernameInp.addEventListener('input', async function () {
        let username = this.value;

        if (username == "") {
            this.classList.remove("is-valid");
            this.classList.add("form-control");
            this.classList.add("is-invalid");
        } else {

            let res = (await fetch(`http://192.168.1.4:8080/PRJ_Project_G2/user/checkUsername?username=${username}`));
            if (res.status == 200) {
                res = await res.text();
                if (res == "not exist") {
                    this.classList.remove("is-invalid");
                    this.classList.add("form-control");
                    this.classList.add("is-valid");
                }
                if (res == "exist") {
                    this.classList.remove("is-valid");
                    this.classList.add("form-control");
                    this.classList.add("is-invalid");
                }
            } else {
                console.log("There are some error when checking username");
            }
        }
    });
}

let emailInput = $("#email")[0];

if (emailInput) {
    emailInput.addEventListener('input', async function () {
        let email = this.value;

        if (email == "") {
            this.classList.remove("is-valid");
            this.classList.add("form-control");
            this.classList.add("is-invalid");
        } else {

            let res = (await fetch(`http://192.168.1.4:8080/PRJ_Project_G2/user/checkEmail?email=${email}`));
            if (res.status == 200) {
                res = await res.text();
                if (res == "not exist") {
                    this.classList.remove("is-invalid");
                    this.classList.add("form-control");
                    this.classList.add("is-valid");
                }
                if (res == "exist") {
                    this.classList.remove("is-valid");
                    this.classList.add("form-control");
                    this.classList.add("is-invalid");
                }
            } else {
                console.log("There are some error when checking email");
            }
        }
    });
}

$(document).ready(function () {
    $('#signUpForm').submit(function (event) {
        event.preventDefault(); 
        if($('input[name="username"]')[0].classList.contains("is-invalid")) {
            return
        }
        if($('input[name="email"]')[0].classList.contains("is-invalid")) {
            return
        }
        if($('input[name="firstName"]')[0].classList.contains("is-invalid")) {
            return
        }
        if($('input[name="lastName"]')[0].classList.contains("is-invalid")) {
            return
        }
        if($('input[name="birthDay"]')[0].classList.contains("is-invalid")) {
            return
        }


        $('#signUpForm').unbind('submit').submit();
    });
});