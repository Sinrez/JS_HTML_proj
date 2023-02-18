// const str1 = 'I\'m OK'
// const str2 = "Он сказал \"Привет\""
// const str3 = `I\'m say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

// const str4 = "I'm say..."

//NUMBER
// const num1 = 75
// alert(num1)

// const obj = {
//     name: "RRR",
//     age: 100500,
//     isHappy: true
// }
// console.log(obj.name)
// console.log(obj['age'])

// obj.job = 'Google'
// console.log(obj)

// const variant = "option1"
// console.log(5 == '5')

// const user_name = prompt("Who you are?","anonim")

// if (user_name === "admin") {
//     alert('Hello boss!')
// } else if(user_name === 'anonim' || !user_name) {
//     alert("I don't know you")
// } else {
//     alert(`Hi ${user_name}`)
// }

// const count = prompt("До ск хотите считать?", 20)
// let i = 0
// while(i <= count){
//     console.log(i)
//     i ++
// }

// do {
//     console.log(i)
//     i++
// } while (i <= count)

// const arr = []

// for (let i = 1; i <= 50; ++i){
//     arr.push(i)
// }
// console.log(arr)

// for (item of arr) {
//     console.log(item)
// }

// const new_arr = []

// for (item of arr) {
//     const marker = item % 3
//     if (!marker) {
//         new_arr.push(item)
//     }
// }
// console.log(new_arr)

// const obj = {
//     name: "RRR",
//     age: 100500,
//     isHappy: true
// }

// for (key in obj){
//     console.log(key,obj[key])

// }

// let count = 15

// let point = 5

// while (count < 18) {

// point = point + 3

// count++

// }

// console.log(point)

// let num = 17

// let str = "17"

// let empty = null

// if ( str - num ) {

//     console.log('first')

// } else if (empty - num) {

//     console.log("second")

// } else if (str - empty) {

//     console.log("third")

// } else {

//     console.log("no one")

// }

//declaration functions
// function screan(a,b){
//     // alert("AAAAAAA")
//     return a * b
// }

// console.log(screan(5,6))


// const wowScreen = function(){
//     alert("WOOOOOW")
// }

// const arrow = () =>{
//     alert("arrow is in the sky")
// }

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max-min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0,100)
    // const randomNum2 = getRandomNumInRange(0,100)

    // let symbol
    // if (Math.random() > 0.5){
    //     symbol = "+"
    // } else {
    //     symbol ="-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task =`${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}



const gameElem = document.getElementById("mygame").children

const title = gameElem[0]
const userTask = gameElem[1]
const userAnswer = gameElem[2]
const btnGame = gameElem[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

btnGame.onclick = () =>{
    if (!gameState.taskInProcess){
        title.innerText ="Игра началась!"
        userAnswer.value = null
        // generate task and answwer
        const task = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState()
        //show task to user
        userTask.innerText = task
        //change button and state
    } else {
        // check user answer with correctly
        const isRight = gameState.rightAnswer == userAnswer.value
        // change state and print result
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        //change button and state
        btnGame.innerText = "Начать заново!"
        toggleGameState()

    }
}
