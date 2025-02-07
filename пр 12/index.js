'use strict'

//1 координаты мышки

let div1 = document.querySelector(".div1"); // queryselector связывает элемент html с переменной в js

document.addEventListener('mousemove', (event)=>{// добавляю событие (мышь)
    div1.textContent=event.clientX+' : '+event.clientY; //координаты x:y мыши
});

//2 при клике-зелёный, двойной клик-красный

let btn2= document.querySelector(".btn2"); // queryselector связывает элемент html с переменной в js

btn2.addEventListener('click', func);// добавляю событие
btn2.addEventListener('dblclick', func);// добавляю событие
function func(event) {
    if(event.type=='click'){// первое событие при одном клике
        btn2.style.color='green'; // задаём ему зелёный цвет
    }if(event.type=='dblclick'){//второе событие при двойдном клике
        btn2.style.color='red';//задаём ему красный цвет
    };
};

//3 привязать к ul обработчик клика. Если клик был по тегу li,то в конце текста будет'!',если ul-выведет в консоль

let ul3 = document.querySelector(".ul3"); // queryselector связывает элемент html с переменной в js

ul3.addEventListener('click', (event)=>{// добавляю событие
    if(event.target.tagName=="UL"){ //первое событие по клику ul выведет в консоль
        console.log(ul3);
    }if(event.target.tagName=="LI"){ //второе событие по клику li в конец текста добавит '!'
        event.target.textContent+='!';
    };
});

//4 инпут,в котором будет выводить значения введенных клавиш и их коды

let inp4=document.querySelector(".inp4"); // queryselector связывает элемент html с переменной в js

inp4.addEventListener('keydown', (event)=>{// добавляю событие (при нажатии на клавишу будет выводить её значение)
    inp4.value=event.code;// при вводе в инпут,будет выводить значение и код клавиши, то есть,например, KeySы,Enter и тд.
});

//5 при нажатии Enter содержимое в инпуте очищалось и попадало в абзац под инпутом

let inp5 = document.querySelector(".inp5"); // queryselector связывает элемент html с переменной в js
let txt5 = document.querySelector(".txt5"); // queryselector связывает элемент html с переменной в js

inp5.addEventListener('keydown', (event)=>{// добавляю событие (при нажатии на Enter)
    if(event.code=="Enter"){
        txt5.textContent=inp5.value;//(абзац 'rezult' будет очищаться и меняться на значение которое написали в инпуте)
        inp5.value="";//(здесь как раз будет пусто в инпуте)
    };
});

//6 при нажатии клавиши Alt по клику элемент будет перекрашиваться в красный цвет

let btn6 = document.querySelector(".btn6");// queryselector связывает элемент html с переменной в js

btn6.addEventListener('click', (event)=>{// добавляю событие 
    if(event.altKey){// altKey означает что если Alt нажат,то покрасится в красный цвет,если нет,то не покрасится
        btn6.style.color="red";
    };
});

//7 по клику на ссылку в конец записывался ее href, а перехода по ссылке не происходило

let links = document.querySelectorAll(".a7");// queryselector связывает элемент html с переменной в js

for(let elem of links){//цикл переберающий массив элементов 
    elem.addEventListener('click', (event)=>{// добавляю событие (по клику на link1,link2,link3)
        event.preventDefault();//убираю событие у ссылки на переход
        event.target.textContent+=elem.href;// записывается href ссылки
    });
};

//8 по клику на ссылку в абзац записалась сумма введенных чисел в инпуте

let inp81 = document.querySelector("#one");// queryselector связывает элемент html с переменной в js
let inp82 = document.querySelector("#two");// queryselector связывает элемент html с переменной в js
let txt8 = document.querySelector(".txt8");// queryselector связывает элемент html с переменной в js
let link8 = document.querySelector(".a8");// queryselector связывает элемент html с переменной в js

link8.addEventListener('click', (event)=>{// добавляю событие (по клику на ссылку)
    event.preventDefault();//убираю событие у ссылки на переход
    txt8.textContent=Number(inp81.value)+Number(inp82.value); // при вводе в первый и второй инпут чисел,кликаем на ссылку и выводит результат их суммы
});

//9 проверить всплытие событий

let div91 = document.querySelector(".one");// queryselector связывает элемент html с переменной в js
let div92 = document.querySelector(".two");// queryselector связывает элемент html с переменной в js
let div93 = document.querySelector(".three");// queryselector связывает элемент html с переменной в js

div91.addEventListener('click', ()=>{// добавляю событие (по клику будет всплывать 'one')
    alert('one')
});
div92.addEventListener('click', ()=>{// добавляю событие (по клику будет всплывать 'two')
    alert('two')
});
div93.addEventListener('click', ()=>{// добавляю событие (по клику будет всплывать 'three')
    alert('three')
});


//10 Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.

let div10 = document.querySelector(".div10");// queryselector связывает элемент html с переменной в js

div10.addEventListener('click', (event)=>{// добавляю событие (по клику)
    if(event.target.tagName=="DIV"){ //если кликаем на DIV, то
        event.target.style.border="3px solid blue" // перекрашивается в синий
    }if(event.target.tagName=="UL"){ //если кликаем на UL, то
        event.target.style.border="3px solid red" // перекрашивается в красный
    }if(event.target.tagName=="LI"){ //если кликаем на LI, то
        event.target.style.border="3px solid yellow" // перекрашивается в жёлтый
    };
});



