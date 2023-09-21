
const movie = {name:'Avatar', age :30}
const serializedObject = JSON.stringify(movie)
localStorage.setItem('movie', serializedObject);
// class Movie {
//     constructor(movieName, movieImage, movieGenre, movieRelease, movieProductor) {
//         this.movieName = movieName;
//         this.movieImage = movieImage;
//         this.movieGenre = movieGenre;
//         this.movieRelease = movieRelease;
//         this.movieProductor = movieProductor;
//     }
    
    
// }

const movies = []
const user = ['name', '25']
localStorage.setItem('user', JSON.stringify('name'))

const divElement = document.createElement("div");
// Add the new movie to the collection 
function addMovie() {
    localStorage.getItem('movies')
    
    let image = prompt('What is the film poster ? Must be a link. ');    
    let name = prompt('Which movie do you want to add ? ');
    let genre = prompt('What is the genre of the movie ? ')
    let release = prompt('When was it release ? ');
    let productor = prompt('Who was the productor of the movie ? ');
    let newMovie = new Movie (name, image, genre, release, productor);

    movies.push(newMovie);

    localStorage.setItem('movies',JSON.stringify('image', 'name', 'genre', 'release', 'productor'));
    console.log(JSON.stringify(movies));
    
}

// create a new movie, and then allow it to appear on the html
function createMovie() {
    addMovie(movies);
    appendMovie(movies)
}

function appendMovie(movies) { 
    
    
    const lastMovie = movies[movies.length - 1];
    const div = document.createElement("article");
    const spanImage = document.createElement("div");
    const spanName = document.createElement("div");
    const spanGenre = document.createElement("div");
    const spanRelease = document.createElement("div");
    const spanProducer = document.createElement("div");
    
    spanImage.textContent = lastMovie.movieImage;
    spanName.textContent =  lastMovie.movieName;
    spanGenre.textContent =  lastMovie.movieGenre;
    spanRelease.textContent = lastMovie.movieRelease;
    spanProducer.textContent =  lastMovie.movieProductor;
    div.appendChild(spanImage)
    div.appendChild(spanName);
    div.appendChild(spanGenre);
    div.appendChild(spanRelease);
    div.appendChild(spanProducer);
    
    document.getElementById("Collection").appendChild(div);
}


