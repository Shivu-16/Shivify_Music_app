console.log("welcome to shivify")

// 
let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('songPlayBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));  
 
let songs = [
    {songName:"Lemonade" , filePath:"songs/1.mp3" , coverPath: "covers/lemonade.jfif" },
    {songName:"Born To Shine" , filePath:"songs/2.mp3" , coverPath: "covers/Jatti-Cover.jpg" },
    {songName:"Cali" , filePath:"songs/3.mp3" , coverPath: "covers/lemonade.jfif" },
    {songName:"Do You Know" , filePath:"songs/4.mp3" , coverPath: "covers/Do-You-Know-1.jpg" },
    {songName:"Jatti" , filePath:"songs/5.mp3" , coverPath: "covers/Jatti-Cover.jpg" },
    {songName:"Lover" , filePath:"songs/6.mp3" , coverPath: "covers/Lover-1.jpg" },
    {songName:"Putt Jatt Da" , filePath:"songs/7.mp3" , coverPath: "covers/Putt-Jatt-Da-1.jpg" },
    {songName:"Raat Di Gedi" , filePath:"songs/8.mp3" , coverPath: "covers/Raat-Di-Gedi-Cover.jpg" }
]

//Naming of Songs from JS
songitem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Play /Pause Button use
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1 ; 
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0 ; 
    }
})

// Seek Bar functioning
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})

//User defined playiing function
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        index = parseInt(e.target.id); 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');  
        audioElement.src = `songs/${index}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0 ; 
        audioElement.play() ;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=8){
        index = 1
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=1){
        index = 8
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})