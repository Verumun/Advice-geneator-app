'use strict'

const diceBtnEl = document.getElementById('button');
const adviceTextEl = document.getElementById('advice-text');
const adviceHeaderEl = document.getElementById('advice-id');
const img = document.getElementById('image')

let data;

const fetchAdvice = async () =>{
    const response = await fetch('https://api.adviceslip.com/advice')
     data = await response.json()
    
    console.log(data)

    adviceHeaderEl.innerHTML = `Advice #${data.slip.id}`;
    adviceTextEl.innerHTML = `"${data.slip.advice}"`
    // img.style.rotate = `${data.slip.id}deg`
    

}

fetchAdvice()

diceBtnEl.addEventListener('click', function(){
    fetchAdvice()
    img.style.rotate = `${data.slip.id}deg`
    diceBtnEl.style.backgroundColor = `hsl(${data.slip.id} 100% 66% / 1)`


})


// diceBtnEl.addEventListener('click', fetchAdvice)