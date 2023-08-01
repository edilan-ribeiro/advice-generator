const adviceButton = document.getElementById('advice-button')
const adviceId = document.getElementById('advice-ID')
const adviceText = document.getElementById('advice-text')
const getImg = document.getElementById('img-Button')



async function generateAdvice() {
    const url ='https://api.adviceslip.com/advice'
    
    const answer = await fetch(url)

    return await answer.json()
}

async function getAdvice() {
    const advice = await generateAdvice()

    const getId = advice.slip.id
    const getText = advice.slip.advice

    adviceId.innerHTML = `Advice #${getId}`
    adviceText.innerHTML = `"${getText}"`
    diceRotate() //add rotate class
}

function diceRotate(){
    let hasClass = getImg.classList.contains('rotate')
    
    if (!hasClass) {
        getImg.classList.add('rotate')
    } else {
         getImg.classList.remove('rotate')
    }
}



adviceButton.addEventListener('click', () => {
    
    getAdvice()
    diceRotate() // removes rotate class
    
})
