console.log("Welcome to Spotify");

let songNumber =0;
let audioElement = new Audio('songs/Fix you.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
//audioElement.play();

let songs = [
    {songName: "Human Kind", filePath: "songs/Human kind.mp3" , coverPath: "covers/MOTS.png"},
    {songName: "Clocks", filePath: "songs/Clocks.mp3" , coverPath: "covers/Clocks1.jpg"},
    {songName: "Church", filePath: "songs/Church.mp3" , coverPath: "covers/EL.png"},
    {songName: "Fix You", filePath: "songs/Fix you.mp3" , coverPath: "albumcover.jpg"},
    {songName: "When I need a friend", filePath: "songs/WINAF.mp3" , coverPath: "covers/EL.png"},
    {songName: "Star", filePath: "songs/Star.mp3" , coverPath: "covers/MOTS.png"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})




//Resume or pause music
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    myProgressBar

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100)
    myProgressBar.value = progress;
})

//seeking audio with changes in progress bar
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    
    })