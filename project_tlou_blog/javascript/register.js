function passwordLock(){
    let passwordRegister = document.getElementById('passwordRegister');
    let buttonLockRegister = document.getElementById('passwordType1');

    if (passwordRegister.type === 'password'){
        passwordRegister.setAttribute('type', 'text')
        buttonLockRegister.classList.replace('bi-unlock-fill', 'bi-lock-fill')
    }
    else{
        passwordRegister.setAttribute('type', 'password')
        buttonLockRegister.classList.replace('bi-lock-fill', 'bi-unlock-fill')
    }
}

function passwordConfirmLock(){
    let passwordConfirm = document.getElementById('passwordConfirm');
    let buttonLockConfirm = document.getElementById('passwordType2');

    if (passwordConfirm.type === 'password'){
        passwordConfirm.setAttribute('type', 'text')
        buttonLockConfirm.classList.replace('bi-unlock-fill', 'bi-lock-fill')
    }
    else{
        passwordConfirm.setAttribute('type', 'password')
        buttonLockConfirm.classList.replace('bi-lock-fill', 'bi-unlock-fill')
    }
}

const form = document.getElementById('userregister');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    confirmUsername();
    confirmEmail();
    confirmPassword();
    confirmCPassword();
})

const erros = document.querySelectorAll('.alert');
const campos = document.querySelectorAll('.required');
const labelLogin = document.querySelectorAll('.label');

function setAlert(index, value){
    if (value == true){
        erros[index].style.display = 'block';
    }
    else{
        erros[index].style.display = 'none';
    }
}

function setStyle(index, value){
    if (value == true){
        labelLogin[index].style.borderBottom = '0.1em solid red';
    }
    else{
        labelLogin[index].style.borderBottom = '0.1em solid white';
    }
}

function confirmUsername(){
    if (campos[0].value.length < 13){
        setAlert(0, true);
        setStyle(0, true);
    }

    else{
        setAlert(0, false);
        setStyle(0, false);
    }
}

function confirmEmail(){
    if (campos[1].value.length < 13){
        setAlert(1, true);
        setStyle(1, true);
    }
    else{
        setAlert(1, false);
        setStyle(1, false);
    }
}

function confirmPassword(){
    if(campos[2].value.length < 8){
        setAlert(2, true);
        setStyle(2, true);
    }
    else{
        setAlert(2, false);
        setStyle(2, false);
        confirmCPassword();
    }
}

function confirmCPassword(){
    if(campos[3].value != campos[2].value){
        setAlert(3, true);
        setStyle(3, true);
    }
    else{
        setAlert(3, false);
        setStyle(3, false);
    }
}
