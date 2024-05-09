const movieTitle = document.querySelector('.movie-title');
const releaseDate = document.querySelector('.release-date');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');

window.onload = () => {
    let url = 'https://api.themoviedb.org/3/movie/218?api_key=80932c92af95c93e664e5e8d17873a77';

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date)
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[1].iso_3166_1}`;
        movieDuration.textContent = `${data.runtime} minutes`;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;

        let posterUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;

        let genresToDisplay = '';

        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, ` ;
        });

        let genresUpdated = genresToDisplay.slice(0, -2) + '.';

        movieGenres.textContent = genresUpdated;


    });
}