function validateform() {
    // collect form data in javascript varible
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
    var name1 = document.getElementById("fname").value;
    var name2 = document.getElementById("lname").value;

    // check empty first name field
    if(name1 == ""){
        document.getElementById("blankMsg").innerHTML = "**Fill the first name";
        return false;
    }
    // charector data validation
    if(!isNaN(name1)) {
        document.getElementById("blankMsg").innerHTML = "**only characters are allowed";
        return false;
    }
    // charector data validation
    if(!isNaN(name2)) {
        document.getElementById("charMsg").innerHTML = "**only characters are allowed";
        return false;
    }
    // check empty password field
    if(pw1 == "") {
        document.getElementById("massage1").innerHTML = "**fill the password please";
        return false;
    }
    // check confirm password field
    if(pw2 == "") {
        document.getElementById("massage2").innerHTML = "**enter the password please";
        return false;
    }
    // minimum password length validation
    if(pw1.length < 8) {
        document.getElementById("massage1").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    // maximum length of password validation
    if(pw1.length > 15) {
        document.getElementById("massage1").innerHTML = "**Password length must not exceed 15 characters"
        return false;
    }
    if(pw1 != pw2) {
        document.getElementById("massage2").innerHTML = "**password are not same";
        return false;
    } else {
        alert ("your password create successfully");
        document.write("javascript form has been submitted successfully");
    }
}