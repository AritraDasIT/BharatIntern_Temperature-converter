let celInput= document.querySelector('#celcius>input');
let farInput= document.querySelector('#Fahrenheit>input');
let kelInput= document.querySelector('#Kelvin > input');

let btn = document.querySelector('.button button');

function roundNum(number){
    return Math.round(number*100)/100
}

celInput.addEventListener('input', function(){
    let c_Temp = parseFloat(celInput.value)
    let f_Temp = (c_Temp*(9/5)) + 32
    let k_Temp = c_Temp + 273.15

    farInput.value = roundNum(f_Temp)
    kelInput.value = roundNum(k_Temp)
})

farInput.addEventListener('input', function(){
    let f_Temp = parseFloat(farInput.value)
    let c_Temp = (f_Temp - 32) * (5/9)
    let k_Temp = (f_Temp -32) * (5/9) + 273.15

    celInput.value = roundNum(c_Temp)
    kelInput.value = roundNum(k_Temp)
})

kelInput.addEventListener('input', function(){
    let k_Temp = parseFloat(kelInput.value)
    let c_Temp = k_Temp - 273.15
    let f_Temp = (k_Temp - 273.15) * (9/5) + 32

    celInput.value = roundNum(c_Temp)
    farInput.value = roundNum(f_Temp)
})

btn.addEventListener('click', ()=>{
    celInput.value = ""
    farInput.value = ""
    kelInput.value = ""
})