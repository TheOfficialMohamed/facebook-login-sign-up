function formValidatf() {
    var firstName = document.getElementById("firstName").value;
    var secondName = document.getElementById("secondName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (firstName < 4) {
        text = "please Enter firstName more then 4";
        error.innerHTML = text;
        return false;
    }
    else if (secondName < 4) {
        text = "please Enter secondName more then 4";
        error.innerHTML = text;
        return false;
    }
    else if (email.indexOf("@") == -1 || email.length < 12) {
        text = "please Enter true email";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 5 || password.length > 11) {
        text = "please Enter true password";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }

}   