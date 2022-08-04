"use strict";

let answer = prompt('Сколько фильмов вы посмотрели?');

const perosonalMovieDb = {
count: answer,
movies:{},
actors: {},
genres: [],
privat: false,
};

const a = prompt('Один из последних просмотренных фильмов', ""),
    b = prompt ('На сколько оцените его?', ""),
    c = prompt('Один из последних просмотренных фильмов', ""),
    d = prompt ('На сколько оцените его?', "");

    perosonalMovieDb.movies[a] = b;
    perosonalMovieDb.movies[c] = d;

    console.log(perosonalMovieDb);


// Разновидность функций
// function declaration: function example (){ code } создаётся до начала выполнения скрипта, можна вызвать перед объявлением
// function expression: let example = function (){ code }; создаётся только тогда, когда доходит поток кода, можно вызвать только после объявления
// стрелочные функции: () = > не имеет своего контекста (this)
