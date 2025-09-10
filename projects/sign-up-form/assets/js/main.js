const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
    let  pwdField = document.getElementById('password');
    let pwdFieldVerify = document.getElementById('conf-password');

    if (pwdField.value != pwdFieldVerify.value) {
        pwdField.classList.add('invalid-password');
        pwdFieldVerify.classList.add('invalid-password');
    }
    else {
        pwdField.classList.remove('invalid-password');
        pwdFieldVerify.classList.remove('invalid-password');
    }
})