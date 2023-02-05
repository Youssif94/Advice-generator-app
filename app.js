// Selectors
const adviceNo = document.querySelector('.advise-no')
const adviceHTML = document.querySelector('.advice')
const dice = document.querySelector('.fa-dice-five')

addEventListener("load", getAdvice)

dice.addEventListener('click',getAdvice)
// api

let id,
    advice;
async function getAdvice(){
    // const res = await (await fetch('https://api.adviceslip.com/advice')).json()
    const res = await (await fetch('https://www.boredapi.com/api/activity/')).json()
    try {
    // id = res.slip.id
    advice = res.activity
        populateUI()
    } catch (error) {
        console.log(error)
    }
}

function populateUI(){
    adviceNo.innerHTML = id
    adviceHTML.innerHTML = `"${advice}"`
}
