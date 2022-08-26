console.log("Welcome to the Spotofy");
let songIndex = 0;
let AudioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItems'));


let songs = [
    {songName: 'Sukoon Mila', filePath: 'songs/1.mp3', coverPath: 'Covers/1.jpg'},
    {songName: 'Maana Ke Hum Yaar Nahin', filePath: 'songs/2.mp3', coverPath: 'Covers/2.jpg'},
    {songName: 'Nazm Nazm', filePath: 'songs/3.mp3', coverPath: 'Covers/3.jpg'},
    {songName: 'Tum Jab Paas', filePath: 'songs/4.mp3', coverPath: 'Covers/4.jpg'},
    {songName: 'Soch Na Sake', filePath: 'songs/5.mp3', coverPath: 'Covers/5.jpg'},
    {songName: 'Hoor', filePath: 'songs/6.mp3', coverPath: 'Covers/6.jpg'},
    {songName: 'Meherbani', filePath: 'songs/7.mp3', coverPath: 'Covers/7.jpg'},
    {songName: 'Dariya', filePath: 'songs/8.mp3', coverPath: 'Covers/8.jpg'},
    {songName: 'Tere Sang Yaara', filePath: 'songs/9.mp3', coverPath: 'Covers/9.jpg'},
    {songName: 'Matkar Maya Ko Ahankar', filePath: 'songs/10.mp3', coverPath: 'Covers/10.jpg'}
];

songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName').innerText = songs[i].songName;
});

// AudioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', () =>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = '100%';
        

    }else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = '0%';

    }
})

//Listen to Evennts
AudioElement.addEventListener( 'timeupdate', () =>{
    //update seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener ('change', ()=>{
    AudioElement.currentTime = myProgressBar.value * AudioElement.duration / 100 ;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach ((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        AudioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName; 
        AudioElement.currentTime = 0;
        AudioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }else{
        songIndex+=1;
    }
    AudioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 9;
    }else{
        songIndex-=1;
    }
    AudioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    AudioElement.currentTime = 0;
    AudioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})