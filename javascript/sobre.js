let animation = document.getElementById('animation');
let img = animation.querySelectorAll('.img');

let act = 0;
let final = img.length - 1

let space = 1

function Animation1(){
    let Old = animation.querySelector('.img.act')
    Old.classList.add('remove')
    Old.classList.remove('act')
    
    if (act >= space){
        img[act - 1].classList.remove('remove')
    }
    else if (act == 0){
        img[final].classList.remove('remove')
    }

    act = act + 1 > final ? 0 : act + 1
    img[act].classList.add('act')

}

setInterval(Animation1, 2500);