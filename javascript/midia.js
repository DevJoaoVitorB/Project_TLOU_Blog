let carrossel = document.getElementById('carrossel');
let container = carrossel.querySelectorAll('.container');

let active = 0;
let firstPosition = 0;
let lastPosition = container.length - 1

document.getElementById('right').onclick = () => {
    let OldContainer = carrossel.querySelector('.container.active')
    OldContainer.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    container[active].classList.add('active')

}

document.getElementById('left').onclick = () => {
    let OldContainer = carrossel.querySelector('.container.active')
    OldContainer.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    container[active].classList.add('active')
}
