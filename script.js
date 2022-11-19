
function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var PhoneNumber = document.getElementById("PhoneNumber").value;
    var email = document.getElementById("email").value;




    //regular expressions
    var usercheck = /^([A-Za-z.]{3,30})$/;
    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var numbercheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //signup-form-validation

    if (usercheck.test(user)) {
        document.getElementById("usererror").innerHTML = " ";
    }
    else {
        document.getElementById("usererror").innerHTML = "invalid username";
        return false;
    }

    if (passwordcheck.test(pass)) {
        document.getElementById("passworderror").innerHTML = " ";
    }
    else {
        document.getElementById("passworderror").innerHTML = "invalid password!must contain 8 characters, atleast one uppercase,one lowercase ,one number";
        return false;
    }

    if (conpass.match(pass)) {
        document.getElementById("confrmpasserror").innerHTML = " ";
    }
    else {
        document.getElementById("confrmpasserror").innerHTML = "password is not matching";
        return false;
    }



    if (numbercheck.test(PhoneNumber)) {
        document.getElementById("phonenumerror").innerHTML = " ";
    }
    else {
        document.getElementById("phonenumerror").innerHTML = "number is invalid";
        return false;
    }

    if (emailcheck.test(email)) {
        document.getElementById("emailerror").innerHTML = " ";
    }
    else {
        document.getElementById("emailerror").innerHTML = "invalid email";
        return false;
    }




}
//password strength check

const indicator = document.querySelector(".indicator");
const input = document.querySelector("#pass");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

let regExpWeak=/[a-z]/;
let regExpMedium=/\d+/;
let regExpStrong=/[A-Z]/;

function trigger() {
    if (input.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length<= 3 && (input.value.match(regExpWeak)||input.value.match(regExpMedium)||input.value.match(regExpStrong)))no=1;
        if(input.value.length>= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium))||(input.value.match(regExpMedium) && input.value.match(regExpStrong))||(input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length>=6 && input.value.match(regExpWeak)&&input.value.match(regExpMedium)&& input.value.match(regExpStrong))no=3;
        if(no==1){
        weak.classList.add("active");
        text.style.display="block";
        text.textContent="your password is too weak";
        text.classList.add("weak");
    }
        if(no==2){
            medium.classList.add("active");
            text.textContent="your password is  medium";
            text.classList.add("medium");
        }
            else{
                medium.classList.remove("active");
                text.classList.remove("medium");
            }
            if(no==3){
                medium.classList.add("active");
                strong.classList.add("active");
                text.textContent="your password is  strong";
                text.classList.add("strong");
            }
                else{
                    strong.classList.remove("active");
                    text.classList.remove("strong");
                }
    }










    
    else {
        indicator.style.display = "none";
        text.style.display="none";
    }

}










//login-form-validation


function validations() {


    var Username = document.getElementById("Username").value;
    var pwd = document.getElementById("pwd").value;
    var usercheck = /^([A-Za-z.]{3,30})$/;
    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (usercheck.test(Username)) {
        document.getElementById("error1").innerHTML = " ";
    }
    else {
        document.getElementById("error1").innerHTML = "invalid username";

        return false;
    }

    if (passwordcheck.test(pwd)) {
        document.getElementById("error2").innerHTML = " ";
    }
    else {
        document.getElementById("error2").innerHTML = "invalid password!";
        return false;
    }

}

