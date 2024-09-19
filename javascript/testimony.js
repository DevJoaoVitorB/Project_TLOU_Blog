// Confirmação do Formulário!
const form = document.getElementById('comment');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    confirmTypeNote();
    confirmComment();
})

const erros = document.querySelectorAll('.alert');
const campos = document.querySelectorAll('.required');

// Confirmação de Comment e TypeNote
function verificar(){
    let note = '';
    const items = document.getElementsByName('typeNote');

    for (let i = 0; i < items.length; i++){
        if (items[i].checked){
            note = items[i].value
            break
        }
    }

    return note
}

function confirmTypeNote(){
    let = note = verificar();

    if (note === ''){
        erros[0].style.display = 'block';
    }
    else{
        erros[0].style.display = 'none';
    }
}

function confirmComment(){
    if (campos[0].value.length < 10){
        erros[1].style.display = 'block';
        campos[0].style.border = '0.2em solid rgb(190, 0, 0)';
        campos[0].style.boxShadow = 'none';
    }
    else{
        erros[1].style.display = 'none';
        campos[0].style.border = 'none';
        campos[0].style.boxShadow = '0 0 0.2em white';
    }
}

// Carrossel
let comment = document.getElementById('comentarios');
let note = comment.querySelectorAll('.note');

let act = 0;
let final = note.length - 1

let space = 1

function CommentAnimation(){
    let Old = comment.querySelector('.note.act')
    Old.classList.add('remove')
    Old.classList.remove('act')
    
    if (act >= space){
        note[act - 1].classList.remove('remove')
    }
    else if (act == 0){
        note[final].classList.remove('remove')
    }

    act = act + 1 > final ? 0 : act + 1
    note[act].classList.add('act')
}

setInterval(CommentAnimation, 7000);