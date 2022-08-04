"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDb.count < 10){
  console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDb.count > 10 < 30 ){
    console.log('Вы класический зритель');
} else if (personalMovieDb.count > 30){
    console.log('Вы киноман');
} else { console.log('Произошла ошибка!');}


// for (let i = 0; i < 2; i++){
//   let a = prompt ('Один из просмотренных фильмов 1?'),
//    b = prompt ('На сколько оцените его?'),
//    if (a != null && b != null && a != '' && b != '' && a.length < 50){ 
//     personalMovieDb.movies[a] = b; 
//   }
//     else{ 
//     i--; 
// }
// }

// Если перед prompt поставить +, резальтат будет конвертирован в числовой тип
// Если была нажата кнопка отмены в переменную записывается null
// const a = prompt('Один из просмотренных фильмов?'),
// b = prompt('На сколько оцените его?'),
// c = prompt ('Один из просмотренных фильмов?'),
// d = prompt ('На сколько оцените его?');

// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;

console.log(personalMovieDb);

// Разновидность функций
// function declaration: function example (){ code } создаётся до начала выполнения скрипта, можна вызвать перед объявлением
// function expression: let example = function (){ code }; создаётся только тогда, когда доходит поток кода, можно вызвать только после объявления
// стрелочные функции: () = > не имеет своего контекста (this)
