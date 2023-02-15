const randomValue1 = (Math.random() * 100).toFixed(0)
const randomValue2 = (Math.random() * 100).toFixed(0)
const isPlus = Math.random() > 0.5
console.log(randomValue1)

const gameElem = document.getElementById("mygame").children

if (isPlus){
    gameElem[1].innerText = `${randomValue1}+${randomValue2}`
} else {
    gameElem[1].innerText = `${randomValue1}-${randomValue2}`

}

console.log(gameElem)