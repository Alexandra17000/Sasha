 'use strict'

console.log('Задание 1')

let elem = document.getElementById('elem') //getElementById позволяет получить элемент страницы по его атрибуту id.
let out = document.getElementById('output') //getElementById позволяет получить элемент страницы по его атрибуту id.

elem.addEventListener('blur', function() { // добавляю событие
    out.textContent = elem.value
})

console.log('Задание 2-3')

let input = document.querySelector('#input') // queryselector связывает элемент html с переменной в js
let button = document.querySelector('#button')  // queryselector связывает элемент html с переменной в js
let buttonn = document.querySelector('#buttonn') // queryselector связывает элемент html с переменной в js

button.addEventListener('click', function() { // добавляю событие
    input.disabled = true
})

buttonn.addEventListener('click', function() { // добавляю событие
    input.disabled = false
})

console.log('Задание 4-5')

let check = document.querySelector('#check') // queryselector связывает элемент html с переменной в js
let baton = document.querySelector('#baton') // queryselector связывает элемент html с переменной в js
let para = document.querySelector('#p') // queryselector связывает элемент html с переменной в js

baton.addEventListener('click', function(){ // добавляю событие
    if (check.checked) {
        p.textContent = 'привет'
    } else {
        p.textContent = 'Здравтвуйте'
    }})

let r = document.querySelector('#r') // queryselector связывает элемент html с переменной в js

r.addEventListener('click', function() { // добавляю событие
    if (check.checked == false) {
        check.checked = true
    } else {
        check.checked = false
    }
})

console.log('Задание 6')

let buttonnn = document.querySelector('#radio4'); // queryselector связывает элемент html с переменной в js
let div = document.querySelector('#div'); // queryselector связывает элемент html с переменной в js

let radioButtons = document.querySelectorAll('input[name="radio"]'); // queryselector связывает элемент html с переменной в js

buttonnn.addEventListener('click', function() { // добавляю событие

    for (let radio of radioButtons) {
        
        if (radio.checked) {
            
            div.textContent = radio.value;
            break;
        }
    }
});

console.log('Задание 7')

let inn = document.querySelector('#in') // queryselector связывает элемент html с переменной в js
let div1 = document.querySelector('#div1') // queryselector связывает элемент html с переменной в js

inn.addEventListener('blur', function() { // добавляю событие
    div1.textContent = inn.value
})

console.log('Задание 8')

let c = document.querySelector('#c1') // queryselector связывает элемент html с переменной в js
let div2 = document.querySelector('#div2') // queryselector связывает элемент html с переменной в js

c.addEventListener("click", function() { // добавляю событие
    if (c.checked == true){
        div2.textContent = 'проверено'
    }
    else {
        div2.textContent = 'не проверено'
        
    }
})

console.log('Задание 9')

let inc = document.querySelector('#inc') // queryselector связывает элемент html с переменной в js

inc.addEventListener('blur', function() { // добавляю событие
    if (inc.value.length <= 5) {
       inc.style.borderColor = 'green'
    } else{
        inc.style.borderColor = 'red'
    }
})

console.log('Задание 10')

let inp = document.querySelector('#inp') // queryselector связывает элемент html с переменной в js
let div3 = document.querySelector('#div3') // queryselector связывает элемент html с переменной в js

inp.addEventListener('input', function(){ // добавляю событие
    div3.textContent = 'Осталось: '+(5-inp.value.length)
    if (inp.value.length > 5){
        div3.textContent = 'Не больше 5 символов!'
        
    }
})

console.log('Задание 12')

let select = document.querySelector('#select') // queryselector связывает элемент html с переменной в js
let div4 = document.querySelector('#div4') // queryselector связывает элемент html с переменной в js

select.addEventListener('change', function() { // добавляю событие
    if ((select.value % 4 === 0 && select.value  % 100 !== 0) || select.value % 400 === 0) {
        div4.textContent = 'Високосный год'
    }else {
        div4.textContent = 'Не високосный год'
    }
})

console.log('Задание 13')

let select1 = document.querySelector('#select1') // queryselector связывает элемент html с переменной в js

let div5 = document.querySelector("#div5") // queryselector связывает элемент html с переменной в js

select1.addEventListener('change', function() { // добавляю событие
    if(select1.value == 6 || select1.value == 7){
        div5.textContent = 'Выходной'
    } else {
        div5.textContent = 'Рабочий день'
    }
})

console.log('Задание 14')

let select2 = document.querySelector('#select2') // queryselector связывает элемент html с переменной в js

let div6 = document.querySelector('#div6') // queryselector связывает элемент html с переменной в js

let date = new Date()

console.log(date.getMonth)
select2.addEventListener('change', function() { // добавляю событие
    if (select2.value == date.getMonth()) {
        div6.textContent = 'This month'
    }
})

let ins = document.querySelector('#ins')  // queryselector связывает элемент html с переменной в js

let select3 = document.querySelector('#select3') // queryselector связывает элемент html с переменной в js

ins.addEventListener('blur', function(){ // добавляю событие
    if (ins.value == select3.value) {
        select3.style.borderColor = 'red'
    }
    else {
        select3.style.borderColor = 'green'
    }
})
