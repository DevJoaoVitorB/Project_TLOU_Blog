const menuMobile = document.getElementById('mobile')
let value = window.getComputedStyle(menuMobile)
let style = value.getPropertyValue('translate')

const menuWeb = document.getElementById('web')
let value1 = window.getComputedStyle(menuWeb)


function verificacao(){
    let style1 = value1.getPropertyValue('visibility')
    
    if (style1 == 'visible') {
        menuMobile.style.translate = '-450px';    
    }
}

document.getElementById('menu').onclick = () => {
    if (style == '-450px') {
        menuMobile.style.translate = '0';
        style = '0'
    }
    else {
        menuMobile.style.translate = '-450px';
        style = '-450px'
    }
}

setInterval(verificacao, 200)