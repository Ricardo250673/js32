/* parte 1*/
const imagen = document.querySelector('img')
imagen.addEventListener('click', () => {
    if (imagen.style.border === '2px solid red'){
        imagen.style.border = ''

    } else {
        imagen.style.border = '2px solid red'
    }
    }
)


/* parte 2*/
const toth = document.querySelector('#stickersToth')
const ambos = document.querySelector('#stickersAmbos')
const aura = document.querySelector('#stickersAura')
const btncalcular = document.querySelector('.calcular')
const totalStickers = document.querySelector('.total-stickers')

btncalcular.addEventListener('click', () => {
    const valorToth = Number(toth.value)
    console.log(valorToth)
    const valorAmbos = Number(ambos.value)
    console.log(valorAmbos)
    const valorAura = Number(aura.value)
    console.log(valorAura)
    const formula = Number(valorToth + valorAmbos + valorAura)
    console.log(formula)

    if (formula <= 10){
        totalStickers.innerHTML = formula
        }else{
        totalStickers.innerHTML = "Llevas demasiados stickers"

        }
    }
)


/* parte 3*/

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')

const comprobar = document.querySelector('.comprobar')
const status = document.querySelector('.status')

comprobar.addEventListener('click', () => {
    const valorFirst = first.value
    const valorSecond = second.value
    const valorThird = third.value

    let passwordEnviada = valorFirst + valorSecond + valorThird

    if (passwordEnviada == "911"){
       status.innerHTML = "password 1 correcta"
    }else if(passwordEnviada == "714") {
        status.innerHTML = "Password 2 correcta"
    }else {
        status.innerHTML = "Password Incorrecta"
    }
    }
)

