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

const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
let i = 0;
do {
    let a = prompt('Последний фильм?', ''),
        b = +prompt('На сколько оцените?', '');
        personalMovieDB.movies[a] = b;
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        i--;
    }
} while (i < 2) 
    console.log('Достаточно');

if (personalMovieDB.count == 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Error');
}