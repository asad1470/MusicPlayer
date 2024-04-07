window.addEventListener("DOMContentLoaded",()=>{
let navbar=document.querySelector(".navbar");
let navIcon=document.querySelector("#hi");
let li=document.querySelectorAll("ul li");
let logo=document.querySelector(".logo h1");
let listItems=document.querySelector("#listItems");
let lastScrollTop = 0;


window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
    }
});
let show=false;
navIcon.addEventListener("click",()=>{
    if(show===false){
        show=true;
        navbar.style.backgroundColor='black';
        navbar.style.height='60%';
        navbar.style.transition='1s ease-in-out';
        li.forEach(list=>{
            list.style.color="white"; 
            list.style.display='block';
            navIcon.style.color='white';
            logo.style.display="none";
            list.style.fontSize="1rem"
            
        })
    }
        else{
            show=false;
            logo.style.transition=" 0.1s 7s ease-in"
            logo.style.display="block";
            navbar.style.height='50px';
            navbar.style.backgroundColor='black';
            navIcon.style.color='white';
            logo.style.color="white";
            navIcon.style.marginRight="3rem"
            li.forEach(list=>{
                list.style.color="white"; 
                // list.style.display='none';
              
               
                
            })
            
            
        }
        console.log(show)
   


})
let playbtn=document.querySelector(".center");
let playicon=document.querySelector("#playicon")
nowplaying=false;
playbtn.addEventListener("click",()=>{
    if(!nowplaying){
playicon.classList.add("fa-pause");
playicon.classList.remove("fa-play");
nowplaying=true;
audioPlayer.play();
    }
    else{
        playicon.classList.add("fa-play");
playicon.classList.remove("fa-pause");
nowplaying=false;
       audioPlayer.pause();
    }
  
})
let currentSongIndex=0;
let nextbtn=document.querySelector(".next");
let prevbtn=document.querySelector(".prev");
function playnext(){
    currentSongIndex++;
    if(currentSongIndex>=document.querySelectorAll(".wrapperdiv").length){
        currentSongIndex=0;
    }
  const nextSongUrl=document.querySelectorAll(".wrapperdiv")[currentSongIndex].getAttribute("data-song-url") 

playsongs(nextSongUrl);

}
nextbtn.addEventListener("click",playnext)

function playprev(){
    currentSongIndex--;
    if(currentSongIndex<0){
        currentSongIndex=document.querySelectorAll(".wrapperdiv").length-1;
    }
    const prevsongurl=document.querySelectorAll(".wrapperdiv")[currentSongIndex].getAttribute("data-song-url");
    playsongs(prevsongurl)
}
prevbtn.addEventListener("click",playprev)




const cardsContainer = document.querySelector('.cards');
let isDown = false;
let startX;
let scrollLeft;

cardsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    cardsContainer.style.cursor = 'grabbing'; 
    startX = e.pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('mouseleave', () => {
    isDown = false;
    cardsContainer.style.cursor = 'grab';
});

cardsContainer.addEventListener('mouseup', () => {
    isDown = false;
    cardsContainer.style.cursor = 'grab'; 
});

cardsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 2; 
    cardsContainer.scrollLeft = scrollLeft - walk;
});

let imgContainer=document.querySelector('#imgContainer');
let musicPLayer=document.querySelectorAll(".wrapperdiv");
let audioPlayer=document.querySelector(".audioplayer");
let volbar=document.querySelector("#volbar");
let timebar=document.querySelector("#timebar");
function playsongs(songurl){
audioPlayer.src=songurl;
audioPlayer.play();
}
function changeimg(imgurl){
 imgContainer.src=imgurl;

    
}
let isplaying=false;
musicPLayer.forEach(card=>{
    if(!isplaying){
        isplaying=true;
        

    }
card.addEventListener("click",()=>{
const imgurl=card.getAttribute('data-img-url');
const songurl=card.getAttribute("data-song-url"); 
playicon.classList.add("fa-pause");
playicon.classList.remove("fa-play");
playsongs(songurl);
changeimg(imgurl)    
})

})

volbar.addEventListener("input",()=>{
    audioPlayer.volume=volbar.value/100;
})
audioPlayer.addEventListener("timeupdate",()=>{
    const currentTime=audioPlayer.currentTime;
    const duration=audioPlayer.duration;
    const progress=(currentTime/duration)*100;
    timebar.value=progress;
})
timebar.addEventListener("click",(e)=>{
    const width=timebar.clientWidth;
    const offset=e.offsetX;
    const duration=audioPlayer.duration;
    audioPlayer.currentTime=(offset/width)*duration;
})
})
const videoplayer = document.querySelector("#videoplayer");
const containerdiv = document.querySelectorAll(".video");
let hideImg=document.querySelector("#hideimg");

function playvideo(videourl){
    videoplayer.src=videourl;
}
containerdiv.forEach(card=>{
    card.addEventListener("click",()=>{
        hideImg.style.display="none";
        videoplayer.style.display="block"
        console.log(hideImg)
        const videourl=card.getAttribute("data-video-url");
        playvideo(videourl);
videoplayer.play();

      
    })
    
})







