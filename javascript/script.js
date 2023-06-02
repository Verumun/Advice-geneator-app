'use strict'

const diceBtnEl = document.getElementById('button');
const adviceTextEl = document.getElementById('advice-text');
const adviceHeaderEl = document.getElementById('advice-id');


const fetchAdvice = async () =>{
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    
    console.log(data)

    adviceHeaderEl.innerHTML = `Advice #${data.slip.id}`;
    adviceTextEl.innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()

diceBtnEl.addEventListener('click', function(){
    fetchAdvice()
})