"user strict";

document.querySelector(".one_btn").onclick = () => {
  let radioBs = document.querySelectorAll('input[type="radio"]');
  console.log(radioBs);

  for (let i = 0; i < radioBs.length; i++) {
    if (radioBs[i].checked) {
      console.log(radioBs[i].value);
    }
  }
};
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
