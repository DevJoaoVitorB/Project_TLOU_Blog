function passwordLock(){
    let password = document.getElementById('password')
    let buttonLock = document.getElementById('passwordType')

    if (password.type === 'password'){
        password.setAttribute('type', 'text')
        buttonLock.classList.replace('bi-unlock-fill', 'bi-lock-fill')
    }
    else{
        password.setAttribute('type', 'password')
        buttonLock.classList.replace('bi-lock-fill', 'bi-unlock-fill')
    }
}

// Confirmação de Formulário!
const form = document.getElementById('userlogin');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    confirmUsername();
    confirmPassword();
})

const erros = document.querySelectorAll('.alert');
const campos = document.querySelectorAll('.required');
const labelLogin = document.querySelectorAll('.label');

// Alert
function setAlertLogin(alert){
    if (campos[0].value.length >= 13 && campos[1].value.length >= 8){
        erros[alert].style.display = 'none';
    }
    else{
        erros[alert].style.display = 'block';
    }
}

// StyleLogin
function setStyleLogin(valor, index){
    if (valor == 0){
        labelLogin[index].style.borderBottom = '0.1em solid rgb(190, 0, 0)'
    }
    else{
        labelLogin[index].style.borderBottom = '0.1em solid white'
    }
}

// Confirmação de Username e Senha
function confirmUsername(){
    if (campos[0].value.length < 13){
        setAlertLogin(0);
        setStyleLogin(0, 0)
    }

    else{
        setAlertLogin(0);
        setStyleLogin(1, 0)
    }
}

function confirmPassword(){
    if(campos[1].value.length < 8){
        setAlertLogin(0);
        setStyleLogin(0, 1)
    }
    else{
        setAlertLogin(0);
        setStyleLogin(1, 1)
    }
}

// Recuperação de Senha!
document.getElementById('recuperacao').onclick = () => {
    alert('Este Site está em desenvolvimento, por esse motivo a recuperação de conta está sendo desenvolvida! Pedimos desculpa pelo transtorno causado!');
}