 'use strict'

 console.log('Задание 1') // Получить значение атрибута value

    let inp1=document.querySelector('.el1'); // queryselector связывает элемент html с переменной в js
    let val1= inp1.getAttribute('value'); // считывает значение данного атрибута
    console.log(val1); // выведет в консоль 'text'
  

  console.log('Задание 2') // замена атрибута value в значение 'child'.

  inp1.setAttribute('value', 'child'); // заменяем атрибут 
  console.log(inp1.value); // выводим в консоль новое значение атрибута


  console.log('Задание 3') // удалить у предыдущего элемента атрибут value

  inp1.removeAttribute('value'); // удаляем атрибут value
  console.log(inp1.value);

  console.log('Задание 4') // проверяем наличие атрибута value

  let elem=document.querySelector('.el1'); //queryselector связывает элемент html с переменной в js
   console.log(elem.hasAttribute('value')); // выводим в консоль. если атрибут есть,то выведет true, если нету- false.

   console.log('Задание 5') // по клику на див в конец его текста добавилось содержимое его атрибута data-text

   let elem1=document.querySelector('.el2'); // queryselector связывает элемент html с переменной в js
   elem1.addEventListener('click', function(){ // добавляю событие
    elem1.textContent+=elem1.dataset.str // добавляю к тексту атрибут элемента 
   });
   console.log(elem1.textContent)

   console.log('Задание 6')

   let btn1=document.querySelector('.button1'); // queryselector связывает элемент html с переменной в js
    let txt6=document.querySelector('.task6text'); // queryselector связывает элемент html с переменной в js
    btn1.addEventListener('click', function(){  // добавляю событие
        btn1.dataset.num= Number(btn1.dataset.num)+1; //делаем атрибут в формате номера и добавляем 1
        txt6.textContent=btn1.dataset.num;  // заменяем текст элемента на значение атрибута
    });


    console.log('Задание 7')

    let elem2=document.querySelector('.el3'); // queryselector связывает элемент html с переменной в js
    elem2.addEventListener('blur', function(){  // добавляю событие
      if(elem2.value.length==5){ 
        console.log('все гуд!') // если правильно не больше 5,то выведет 'все гуд!'
      } else{
        console.log('меняй)') // если не правильно и больше 5,то выведет 'меняй)'
      }
    });

    console.log('Задание 8')

    let div=document.querySelector('.el4'); // queryselector связывает элемент html с переменной в js
    div.addEventListener('click', function(){ // добавляю событие
      div.textContent=Number(div.dataset.productPrice)*Number(div.dataset.productAmount) //умножаем значение атрибутов
    });

    console.log('Задание 9')

    let p=document.querySelectorAll('.snum'); // queryselector связывает элемент html с переменной в js
    for(let i=0; i<p.length; i++){ //цикл переберающий массив элементов 
      p[i].dataset.nump=i+1 // записываем в атрибуты порядковый номер 
      p[i].textContent=p[i].dataset.nump // показываем порядковые номера в абзацах
    }

    console.log('Задание 10')

    let parent=document.querySelector('#elem'); // queryselector связывает элемент html с переменной в js
    let child=parent.firstElementChild; // обращаемся к первому элементу
    child.style.color="red"; // выделяем его красным цветом

    console.log('Задание 11')
    let parent1=document.querySelector('#elem1'); // queryselector связывает элемент html с переменной в js
    let children=parent1.children; // обращаемся ко всем элементам
    for(let el of children){ // цикл переберает массив 
      el.textContent+='!' // добавляем к каждому массиву "!"
    }

    console.log('Задание 12')

    let elem3=document.querySelector('#elem3')
    let parent2=elem3.parentElement // родительский элемент
    parent2.style.borderColor='red' // обозначаем цвет

    console.log('Задание 13')

    let elem4=document.querySelector('#elem4')
    let parent3=elem4.closest('.www') // ищем ближайший родительский элемент
    console.log(parent3) // выводим в консоль

    console.log('Задание 14')

    let elem5=document.querySelector('#elem5')
    let parent4=elem5.previousElementSibling // обращаемся к предыдущему элементу
    parent4.textContent+='!' // добавляем в конец текста '!'

    console.log('Задание 15')

    let elem6=document.querySelector('#elem6')
    let parent5=elem6.nextElementSibling // обращаемся к следующему элементу
    parent5.textContent+='!' // добавляем в конец текста '!'

    console.log('Задание 16')

    let element=document.getElementById('element')
    element.textContent='понедельник'

    console.log('Задание 17')

    let element1=document.getElementsByClassName('p') // сделала через класссы, так как он покрасит все теги,если бы я делала через команду getElementsByTagName
    for( let e of element1){
      e.style.color='red'
    }

    console.log('Задание 18')

    let element2=document.getElementsByClassName('www1') // сделала через класссы, так как он покрасит все теги,если бы я делала через команду getElementsByTagName
    for( let e of element2){ // цикл переберает массив 
      e.style.color='red' // обозначаем цвет
    }

    console.log('Задание 19')

    let parent7 = document.querySelector('#parent7');
    let elems1=parent7.getElementsByClassName('www2'); // создаем первую переменную с элементами с классом www2
    let elems2=parent7.getElementsByClassName('ggg'); // создаем вторую переменную с элементами с классом ggg
    console.log(elems1) //выводит массив
    console.log(elems2) // выводит массив
    


















    









  




