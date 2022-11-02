const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};
const lastMovies = prompt('Последний фильм?', '');
const moviesGrade = +prompt('На сколько оцените?', '');
personalMovieDB.movies[lastMovies] = moviesGrade;
