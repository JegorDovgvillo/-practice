// const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };
// const lastMovies = prompt('Последний фильм?', '');
// const moviesGrade = +prompt('На сколько оцените?', '');
// personalMovieDB.movies[lastMovies] = moviesGrade;

// const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Последний фильм?', ''),
//         b = +prompt('На сколько оцените?', '');
//     personalMovieDB.movies[a] = b;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         i--;
//     }

// }

// if (personalMovieDB.count == 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Error');
// }

// let i = 0;
// while (i<2) {
//     let a = prompt('Последний фильм?', ''),
//         b = +prompt('На сколько оцените?', '');
//         personalMovieDB.movies[a] = b;
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         i--;
//     }

// }
// if (personalMovieDB.count == 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Error');
// }
// let i = 0;
// do {
//     let a = prompt('Последний фильм?', ''),
//         b = +prompt('На сколько оцените?', '');
//     personalMovieDB.movies[a] = b;
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//     }
// } while (i < 2)
// console.log('Достаточно');

// if (personalMovieDB.count == 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Error');
// }
// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 4));
// function ret() {
//     let num = 50;
//     return num;
// }
// function getMathResult(a, b) {
//     let res = 0;
//     if (typeof (b) != 'number' && b == 0 && b < 0) {
//         return a
//     }
//     for (let i = 1; i <= b; i++) {
//         if (i == b) {
//             res += (a * i);

//         } else {
//             res = (a * i) + '---';
//         }
//     }
//     return res;
// }
// getMathResult(2, 6);
// let numberOfFilms;
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
//     }
// }
// start();
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Последний фильм?', ''),
//             b = +prompt('На сколько оцените?', '');
//         personalMovieDB.movies[a] = b;
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             i--;
//         }

//     }
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//     if (personalMovieDB.count == 10) {
//         console.log('Просмотренно довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Error');
//     }
// }
// detectPersonalLevel();
// let numberOfFilms;
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
// function writeYourGenres() {
//     for(let i = 1; i < 4; i++) {
//         let a = prompt(`Ваш любимый жанр под номером ${i}?`);
//         personalMovieDB.genres[i - 1] = a;
//     }
// }