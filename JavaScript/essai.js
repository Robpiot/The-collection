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
        Genre : "Rock",
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


function createSection(collection) {
    collection.forEach(item =>{
    const article = document.createElement("article");
    console.log(article);
    article.textContent = item;
    HTMLTableSectionElement.appendChild(section)
    document.getElementById("main").appendChild(article)


})
}
createSection(collection)