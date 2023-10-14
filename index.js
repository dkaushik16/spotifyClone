
//initialising variables
let songIndex=0;
let audioElement=new Audio('./songs/whateverItTakes.mp3');
let masterPlay=document.getElementById('masterPlay');
let mypro=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songitem'));
let masterSong=document.getElementById('mastersong');




let songs=[
    {songname:"Whatever_It_Takes", filepath:"./songs/whateverItTakes.mp3",coverpath:"./images/imd3.jpg"},
    {songname:"Believer", filepath:"./songs/believer.mp3",coverpath:"./images/imd1.jpg"},
    {songname:"Thunder", filepath:"./songs/thunder.mp3",coverpath:"./images/imd4.jpg"},
    {songname:"Dil_dhadakne_do", filepath:"./songs/z1.mp3",coverpath:"./images/znd.jpg"},
    {songname:"Senorita", filepath:"./songs/z2.mp3",coverpath:"./images/znd.jpg"},
    {songname:"Dildara", filepath:"./songs/dil.mp3",coverpath:"./images/ra.jpg"},
    {songname:"Tum_se_hi", filepath:"./songs/tumse.mp3",coverpath:"./images/jbm.jpg"}
  ]

  songItem.forEach((element,i) => {
    
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
  });

  //play-pause handling
  masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-pause');
     gif.style.opacity=1;
   }
   else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
   }
  })

  //time-update
  audioElement.addEventListener('timeupdate',()=>{
    //updating the seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    mypro.value=progress;
      
  });

  mypro.addEventListener('change',()=>{
    audioElement.currentTime=mypro.value*audioElement.duration/100;
  });

  const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play-circle');
    })
  }

  Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`./songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        masterSong.innerText=songs[songIndex].songname;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0; 
    }
    })
  });

  document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>6)
      {songIndex=0;
             } 
      else{
         songIndex+=1;}

      audioElement.src=`./songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        masterSong.innerText=songs[songIndex].songname;
  });

  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
         songIndex=0; 
         }
    else {
        songIndex -=1;
       }

    audioElement.src=`./songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      masterSong.innerText=songs[songIndex].songname;
});


  
