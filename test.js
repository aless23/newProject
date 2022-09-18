"use strict";

let nameAjax = XMLHttpRequest();
nameAjax.onereadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
};

nameAjax.open("GET", "http://google.com", true);
nameAjax.send();

function myFunction(datas) {
  console.log(datas);
}

// localStorage.setItem("myAge", 23);
// console.log(localStorage.getItem("myAge"));

// let a = [1, 2, 3];
// localStorage.setItem("myArr", JSON.stringify(a)); // преобразование значений в строку (string) JSON
// let b = localStorage.getIt; // разбирает строку, с возможным дальнейшим преобразованием в type (Object)
// console.log(b);
// console.log(b[1]);

// let a = 5;
// a = a * 2;

// try {
//   document.querySelector(".test").innerHTML = a; // если был не правильный код, его можно поместить в блок try catch
// } catch (err) {
//   console.log(err);
//   console.log("1");
// }
// console.log(a);

// document.querySelector(".div-1").addEventListener("touchstart", myTouchs);
// document.querySelector(".div-1").addEventListener("touchend", myTouchEnd);

// function myTouchs(event) {
//   console.log(event);
//   console.log("touch");
//   document.querySelector(".outres").innerHTML += "its work ";
// }

// function myTouchEnd() {
//   document.querySelector(".outres2").innerHTML += " endCs";
// }

// document.querySelector(".i-1").onkeypress = (event) => {
//   console.log(event);
// };

// let a = "hello, hi, goodmorning";
// console.log(a.split(","));
// Если в документации указан аргумент в квадратных скобках, то его писать не обязательно

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// let a1_res = a1.map(function (item) {
//   item *= 2;
//   return item;
// });

// console.log(`Массив ${a1} умноженный на 2 будет выглядеть так: ${a1_res}`);
// console.log(a1_res);

// let arr = [1, 400, 12, 0, 11, -2];
// let result = arr.map(function (item, index) {
//   console.log(item);
// эта функция будет применяться к каждому элементу массива
//   return item;
// });

// console.log(result);

// let arr = [1, 5, 7, 9, 11];
// let knopka = document.querySelector(".solveClick");
// let cykl = document.querySelector(".outData");
// function resCount() {
//   for (let i = 0; i < arr.length; i++) {
//     cykl.innerHTML += arr[i] + " ";
//   }
// }

// knopka.onclick = resCount;

// function first() {
//   console.log("hi everyone!!");
// }
// first();

// butFunc.onclick = first;

// for (let i = 0; i < divens.length; i++) {
//   console.log(divens[i]);
// }

// способ №1
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// способ №2
// for (let key in arr) {
//   console.log(arr[key]);
// }
//способ № 3
// for (let key of arr) {
//   console.log(arr[key]);
// }

// a.add(4);
// a.add(23);
// a.add("string first");
// console.log(a);
// console.log(a[0]);
// console.log(a.length);
// for (let item of a) {
//   console.log(item);
// }

// let a = {
//   hum: 5,
//   time: "yes",
//   "space control": 54,
// };
// console.log(a["space control"]);

// let out = "";

// for (let key in a) {
//   out += key + "---" + a[key] + "<br>";
// }

// document.querySelector(".out2").innerHTML = out;

// let mas = [1, 0, 0, 0, 0];
// document.querySelector(".out2").innerHTML = mas;
// let f = 0;
// document.querySelector(".massiv").onclick = () => {
//   if (f + 1 < 5) {
//     mas[f] = 0;
//     mas[f + 1] = 1;
//     f++;
//   }
//   document.querySelector(".out2").innerHTML = mas;
// };
// let a = [1, 2, 3];
// let b = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

//console.log(b);

// let out = "";

// for (let i = 0; i < b.length; i++) {
//console.log(b[i]);
//   for (let k = 0; k < b.length; k++) {
//     console.log(b[i][k]);
//     if (b[i][k] > 4) {
//       out += b[i][k] + " ";
//     }
//   }
//   out += "<br>";
// }

// document.querySelector(".out").innerHTML = out;

// const knopka = document.querySelector(".bigbtn");
// knopka.onclick = function () {
//   this.classList.toggle("three");
// };

//HTML 5 требует указывать атрибут data в тегах, чтобы можно было к ним обращаться
// const paragraph = document.querySelector(".first");
// console.log(document.querySelector("meta").getAttribute("[name]"));

// let typeGas = document.querySelectorAll(".typegas");
// for (let i = 0; i < typeGas.length; i++) {
//   typeGas[i].onclick = function () {
//     let gallons = document.querySelector(".galloFormul").value;
//     let price = this.getAttribute("data");
//     console.log(gallons * price);
//   };
// }

// let createElement = document.createElement("div"); // Добавляем элемент на страницу (пример: Div с классом newClass)
// createElement.innerHTML = "hello!";
// createElement.classList.add("newClass");
// console.log(createElement);
// document.querySelector(".reds").appendChild(createElement); // публикуем созданный элемент на странице в указанном месте
// paragraph.classList.add("one", "two"); // Позволяет подключать css стили (классы), через JS

// let p = 0;
// let starc = document.querySelector(".out");

// while (p < 4) {
//   starc.innerHTML += "*";
//   p++;
// }

// let butFunc = document.querySelector(".bigBtn");

// function first() {
//   console.log("hi everyone!!");
// }
// first();

// butFunc.onclick = first;

// let knopka = document.querySelector(".bigBtn2");

// knopka.onclick = () => {
//   console.log("This is arrow function");
// };

// let outData = document.querySelector(".out");
// let elem = document.createElement("div");

// for (let i = 0; i < 10; i++) {
//   let my_div = document.getElementById("first_div");
//   document.body.insertBefore(elem, my_div);
// outData.innerHTML = outData.innerHTML + '3*' + i + '=' + (i*3) + '<br>'; идентичная запись ES6 интерполяции
//outData.innerHTML += "<div style='float:left; width:70px;'>";
//   for (let k = 0; k < 10; k++) {
//     elem.innerHTML += `${i} * ${k} = ${i * k}<br>`;
//   }
// }

// Проверяет состояние radio кнопки (нажата или нет)
// document.querySelector(".one_btn").onclick = () => {
//   let radioBs = document.querySelectorAll('input[type="radio"]');
//   console.log(radioBs);

//   for (let i = 0; i < radioBs.length; i++) {
//     if (radioBs[i].checked) {
//       console.log(radioBs[i].value);
//     }
//   }
// };
//divVariable.style.background = "green";

// перебирает все заданные элементы, и задаёт для них определённые свойства (пример: добавляем тегу Div зелёный цвет)
// for (let i = 0; i < divVariable.length; i+= 1){
//     console.log(divVariable[i]);
//     divVariable[i].style.background = 'green';
// }

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
//     style change
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
// document.querySelector('span').innerHTML = document.querySelector('#one').value; //выводим значение на страницу через span Inner HTML
// }

// document.querySelector('.btn_1').onclick = () => {
//     console.log(document.querySelector('#ch2').value);
//     let controlCheck = document.querySelector('#ch2');
//     console.log(controlCheck.checked);
//     controlCheck.checked ? console.log('Нажата кнопка') : console.log('Кнопка не нажата');
// }

// document.querySelector('#btn_2').onclick = (event) => {
//     event.preventDefault(); // метод позволяет фиксировать состояние страницы, пресекает доступ к AJAX, и при нажатии на кнопку не обновлять страницу
//     let formCheck = document.querySelector('form');
//     console.log(formCheck);
//     console.log(formCheck.second.value)
// }
//Событие oninput срабатывает каждый раз, когда изменяется состояние элемента

// const arr = [1, 12, 16, 25],
// sorteding = arr.sort(sortForNumber);

// function sortForNumber(a, b){ТщвуОЫ (1 xfcnm) ~Fktrcfylh Keotyrj`
//     return a - b;
// }

// console.log(sorteding);

// function reverseString(strings){
//     let splitString = strings.split("");
//     let reversArray =  splitString.reverse();
//     let joinArray = reversArray.join("");
//     return joinArray;
// }

// Цикл который перерворачивает строку
// function reversString(str){
//     let string = "";
//     for (let i = str.length - 1; i >= 0; i--){
// string += str[i];
//     }
//     return string;
// }

// console.log(reversString("hello"));
