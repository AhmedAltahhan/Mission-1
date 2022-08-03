var icon = document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode'))
        icon.src="./img/sun.png";
    else
        icon.src="./img/moon.png";
}


function chkPhone() {
    var myPhone = document.getElementById("phone");
    var pos = myPhone.value.search(/^00963\d{9}$/);
    if (pos != 0) {
        alert("The phone number you entered (" + myPhone.value +") is not in the correct form. \n" +"The correct form is: +963 and 9 digits \n" +"Please go back and fix your phone number");
        myPhone.focus();
        myPhone.select();
        return false;
    }
    else
        return true;
}

function chkEmail() {
    var myEmail = document.getElementById("email");
    var pos = myEmail.value.search(/[a-z A-Z 0-9]*@gmail.com$/);
    if (pos != 0) {
        alert("The Email you entered (" + myEmail.value + ") is not in the correct form. \n" +"The correct form is: " +"....@gmail.com \n" +"Please go back and fix your name");
        myEmail.focus();
        myEmail.select();
        return false;
    }
    else
    return true;
}

function chkName() {
    var myName = document.getElementById("name");
    var pos = myName.value.search(/[A-Z][a-z]+$/);
    if (pos != 0) {
        alert("The name you entered (" + myName.value + ") is not in the correct form. \n" +"The correct form is: The first capital letter must be entered \n"+"Please go back and fix your name");
        myName.focus();
        myName.select();
        return false;
    }
    else
    return true;
}

function colorName(color,) {
    document.forms[0].name.style.background = color;
}

function colorEmail(color,) {
    document.forms[0].email.style.background = color;
}

function colorPhone(color,) {
    document.forms[0].phone.style.background = color;
}

function colorOpinion(color,) {
    document.forms[0].opinion.style.background = color;
}



