// Selectors
const adviceNo = document.querySelector('.advise-no')
const adviceHTML = document.querySelector('.advice')
const dice = document.querySelector('.fa-dice-five')


// api

let id,
    advice;
const getAdvice = async function (){
    const res = await (await fetch('https://api.adviceslip.com/advice')).json()
    try {
    id = res.slip.id
    advice = res.slip.advice
        populateUI()
    } catch (error) {
        console.log(error)
    }
}

function populateUI(){
    adviceNo.innerHTML = id
    adviceHTML.innerHTML = `"${advice}"`
}

dice.addEventListener('click',getAdvice)
addEventListener("load", getAdvice)
