$(document).ready(function () {
    $('#changePass').submit(function (event) {
        event.preventDefault(); 

        var password = $('input[name="newPassword"]')[0].value;
        var confirmPassword = $('input[name="confirmPassword"]')[0].value;

        console.log("P: " + password)
        console.log("CP: " + confirmPassword)

        if(password !== confirmPassword) {
            console.log("Wrong")
            return
        }
        
        $('#changePass').unbind('submit').submit();
        console.log("Correct")

    });
});