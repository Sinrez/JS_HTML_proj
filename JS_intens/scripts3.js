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