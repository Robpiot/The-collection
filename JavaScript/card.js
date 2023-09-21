const collection = [
    {
        cover : "../Assets/81ogsUqshzL.jpg",
        Name : "Thriller",
        Genre : "Contemporary RNB, Pop",
        Author : "Michael Jackson",
        Release :"1982",
        
    },
    {
        cover : "../Assets/ACDC_Back_in_Black_cover.svg.png",
        Name : "Back in Black",
        Genre : ["Rock"],
        Author : "AC/DC",
        Release :"1980",
        
    },
    {
        cover : "../Assets/The_Bodyguard_Original_Soundtrack_Album_Bande_Originale.jpg",
        Name : "The Bodyguard",
        Genre : "Pop",
        Author : "Various Artists",
        Release :"1992",
        
    },
    {
        cover : "../Assets/the_very_best_of_the_eagles.jpg",
        Name : "The very best of the Eagles",
        Genre : "Rock",
        Author : "Eagles",
        Release :"1994",
        
    },
    {
        cover : "../Assets/saturday_night_fever_the_original_movie_sound_track_Bande_Originale.jpg",
        Name : "Saturday Night Fever",
        Genre : "Disco",
        Author : "Various Artists",
        Release :"1977",
        
    },
    {
        cover : "../Assets/the_dark_side_of_the_moon.webp",
        Name : "The Dark Side Of The Moon",
        Genre : "Art Rock",
        Author : "Pink Floyd",
        Release :"1973",
        
    },
    {
        cover : "../Assets/bat_out_of_hell.jpg",
        Name : "Bat Out Of Hell",
        Genre : "Rock",
        Author : "Meat Load",
        Release :"1977",
        
    },
    {
        cover : "../Assets/come_on_over.jpg",
        Name : "Come On Over",
        Genre : "Pop Rock",
        Author : "Shania Twain",
        Release :"1997",
        
    },
    {
        cover : "../Assets/sgt_peppers_lonely_hearts_club_band.jpg",
        Name : "SGT Peppers lonely Hearts Club Band",
        Genre : "Pop Rock",
        Author : "The Beatles",
        Release :"1967",
        
    },
    {
        cover : "../Assets/falling_into_you.jpg",
        Name : "Falling Into You",
        Genre : "Pop",
        Author : "Céline Dion",
        Release :"1996",
        
    }
]


function cardHeader(link) {
    const body = document.getElementById('main');
    const article = document.createElement('article');
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.className = 'rounded-full w-35 h-35'
    article.className = '';
    div.className = '';
    article.id ='card'
    img.src = link;
    
    body.prepend(article);
    article.prepend(div)
    div.prepend(img);
    
}

function badges(Genre) {
    const badge = document.getElementById('badge');
    
    badge.className = 'text-size'
    if(!Array.isArray(Genre)) {
        Genre = [Genre]
    }
    Genre.forEach(element => {
        const span = document.createElement('span');
        span.innerHTML = element;
        badge.append(span)
    })
    
    
} 

function cardTitle(Name, Release) {
    const body = document.getElementById('author');
    const title = document.createElement('h3');
    const paragraphe = document.createElement('p');
    
    
    paragraphe.classList= '';
    
    title.innerHTML = Name; 
    paragraphe.innerHTML= Release;
    
    body.append(title)
    body.append(paragraphe)
}

function cardAuthor(item) {
    const author = document.getElementById('author')
    const list = document.createElement('ul');
    const authorName = document.createElement('h3');
    
    authorName.innerHTML = author;
    author.className = 'text-center';
    author.append(list);
    author.append(authorName);
    
    if(!Array.isArray(item)) {
        item = [item]
    }
    
    item.forEach(element => {
        const listElement = document.createElement('li');
        listElement.className = ''
        authorName.innerHTML = element;
        list.append(listElement);
    })
}



function cardBody(Name, Genre, Release, Author) {
    const article = document.getElementById('card');
    const badge = document.createElement('div');
    const title = document.createElement('div');
    const release = document.createElement('div');
    const body = document.createElement('div');

    console.log(Release);
    
    body.id = 'body'
    badge.id = 'badge'
    title.id = 'author'
    release.id = 'release'
    
    body.className = '';
    badge.className = '';
    
    article.append(body);
    body.append(badge);
    body.append(title),
    body.append(release);
    
    article.className = '';
    badges(Genre);
    cardTitle(Name,Release)
    cardAuthor(Author)
    
}




function cardFooter () {
    const article = document.getElementById('card');
    const footer = document.createElement('div');
    const link = document.createElement('a');
    const img = document.createElement('img');
    
    footer.id = 'card-footer';
    img.src='../Assets/spotify.svg'
    link.href = 'https://www.spotify.com';
    link.className = 'text-center white'
    link.append(img);
    footer.append(link);
    article.append(footer)
    
}
function card() {
    collection.forEach(element => {
        let link = element.cover;
        let name = element.Name;
        let release = element.Release;
        let genre = element.Genre;
        let author = element.Author;
        
        cardHeader(link);
        cardBody(name, genre, release, author);
        cardFooter();
        
    })
    
}

card()




