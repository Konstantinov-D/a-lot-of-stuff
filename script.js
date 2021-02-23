// обновленный вид записи конструктора
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log('hello' + this.name);
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('alex', 44);

console.log(ivan);
console.log(alex);
ivan.hello();







//     Функция-конструктор
// Функции-конструкторы являются обычными функциями. Но есть два соглашения:
// 1.	Имя функции-конструктора должно начинаться с большой буквы.
// 2.	Функция-конструктор должна вызываться при помощи оператора "new".
// Например:

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false







let menu = document.querySelector('.menu'),
    text = document.createTextNode('Пятый пункт');
menu.appendChild(text);
menu.classList.add('menu-item');

let menu = document.querySelector('.menu');
let children = menu.children;
let a = children[1];
let b = children[2];
a.replaceWith(b);

let menuItems1 = document.querySelector('li:nth-child(2)');
let menuItems2 = document.querySelector('li:nth-child(3)');

menuItems2.parentNode.insertBefore(menuItems2, menuItems1);








document.body.style.background = 'url(../img/apple_true.jpg)';

var title = document.getElementById('title');
title.innerHTML = "Мы продаем только подержанную технику Apple";

var adv = document.getElementById("adv");
adv.parentNode.removeChild(adv);

// Каждые 2 сек выводится Hello
let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000);
})




// при клике делает кнопку красного цвета

let Btn = document.querySelector('button');
Btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'red';
})



// стрелочные функции ES6
let obj = {
    number: 5,
    sayNumber = function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
}
obj.sayNumber();