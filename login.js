function changee(a) {
    if (a == 0 ) {//login
        document.getElementById('login-box').style.display = "block";
        document.getElementById('new-regi').style.display = "none";
    }
    else if (a == 1) {
        document.getElementById('login-box').style.display = "none";
        // document.getElementById('new-regi').style.background = "blue";
        document.getElementById('new-regi').style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    changee(1);
});

function showpsd() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}