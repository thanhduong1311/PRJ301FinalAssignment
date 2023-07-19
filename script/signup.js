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