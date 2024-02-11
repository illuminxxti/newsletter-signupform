let emailInput = document.getElementById("emailinput");
let emailValidity = document.getElementById('email-validity');
let emailVal = emailInput.value;
function toLowercase(val) {
    emailInput.value = val.toLowerCase();
}

const btn = document.querySelector('#form-submit');
const form = document.querySelector('#form1');

function validation(){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailInput.value.match(mailformat)) {
        emailValidity.style.display = "none";
        emailInput.style.borderColor = "hsl(234, 29%, 20%)";
        return true;
    }
    else
        return false;
}

btn.addEventListener('click', e => {
    e.preventDefault();
    if (validation()) {
        console.log('validation passed');
        form.submit();
    } else {
        console.log('validation failed');
        emailValidity.style.display = "block";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)"; 
        return false;
    }
});