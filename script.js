var genre = document.getElementsByClassName('.mini-genre');
var backdrop = document.getElementsByClassName('.backdrop');
var genreElements= document.getElementsByClassName('.nav-bar-genres');

backdrop.addEventListener('click', function close(){
    genreElements.style.display = 'none';
})


genre.addEventListener ('click', function open(){
    genreElements.style.display = 'block';
    backdrop.style.display ='block';
})