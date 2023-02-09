// alert('Привет, Я - Рокси!')
// confirm('Привет, Я - Рокси!')
// prompt("Как ваше имя")

const guest = document.getElementById('guest')
const islove = document.getElementById('love')

const text = prompt("Как ваше имя?","Гость")
var islove_value = confirm('Погладите меня?')

guest.innerText = text
if (islove_value){
    love.innerText = 'Гав-гав от меня! %-)'
} else {
    love.innerText = 'Ну не погладили и ладно :)'
}
