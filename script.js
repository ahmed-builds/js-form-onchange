let enteredName = document.getElementById('getName');
let enteredMail = document.getElementById('getEmail');
let enteredMobl = document.getElementById('getMobile');
let enteredMesg = document.getElementById('getMessage');

function updateForm() {
    let populateName = document.getElementById('populateName');
    populateName.textContent = enteredName.value;
    let populateMail = document.getElementById('populateMail');
    populateMail.textContent = enteredMail.value;
    let populateMobl = document.getElementById('populateMobl');
    populateMobl.textContent = enteredMobl.value;
    let populateMesg = document.getElementById('populateMesg');
    populateMesg.textContent = enteredMesg.value;
}