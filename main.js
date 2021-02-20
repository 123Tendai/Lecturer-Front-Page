const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_check = document.getElementById("password_check");

function myFunction(event) {
    var studentData1 = document.getElementById("name").value;
    alert("Students fullName " + studentData1);
    var studentData2 = document.getElementById("email").value;
    alert("Email Address - " + studentData2);
    var studentData3 = document.getElementById("password").value;
    alert("Password: " + studentData3);
    var studentData4 = document.getElementById("password_check").value;
    alert("Password: " + studentData4);
    
}
function myBigO(){
    if (studentData3 === studentData4){
        console.log('Access granted');
    }else{
        console.log('Try again');
    }
}

function isEmail(email){
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



































/*Verification passcode
 User is asked to enter their Name,
followed by a Email
Last a 6 digit passcode must be created
*/

/*function veRification(){
var Name = prompt("Lecturer Name:");
var  Email = prompt("Email Address:");
var PassCode = prompt("Password:");
if (PassCode == 158964){
    console.log("Access granted");
}
else if(PassCode !== 158964){
    console.log("Wrong pin!")
}
else{
    console.log("We must log you off the system")
}
}
veRification();*/



//New students Data
/*const student = document.querySelector(".student"),
       contact_form = student.querySelectorAll(".contact_form"),
       submitInput = contact_form[0].querySelector('input[type="submit"]');

function studentForm(e){

    e.preventDefault();

    var studentData = new StudentData(contact_form[0]);//form data collection
    
    alert( studentData.get("contact-input") );

}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', studentForm, false);
}, false);*/


