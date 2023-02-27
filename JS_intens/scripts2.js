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

// for(let i = 10; i < 35; i += 5) {

//     console.log(i);

// }

// console.log( test(3, 2))

// function test(a, b) {

//     let pow = a ** b

// }

// console.log( test(3, 2))

// const test = function(a, b) {

//     let pow = a ** b

// }

// const testValue = "string"

// function test(str) {

//     return str + null

// }

// console.log(test(testValue))

// const changeFunc = (num) => {

//     const result = (num / (Math.random() * 10)).toFixed

// }

// console.log(changeFunc(47))

// const userText = prompt("give me number!")

// // пользователь отменил ввод

// console.log(userText - "7")

// const num = 21

// const result = (!null) ? (21 % 5) : ( 21 % 3)

// console.log(result)

// console.log(getArr())

// function getArr() {

//     const result = []

//     for (let i = 0; i < 3; i++) {

//         result.push(i + 5)

//     }

//     return result

// }

// console.log(getRandomLessTen())

// function getRandomLessTen() {

//     const num = 0

//     num += (Math.random * 10).toFixed()

//     return num

// }

const getRandomAnswer = (question) => {

    return (Math.random() > 0.5) ? "YES!" : "No("

}

console.log("Всё будет хорошо?")