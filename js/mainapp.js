const songTitle = document.querySelector('.song-title');
const thumbnail = document.querySelector('#thumbnail');
const BG = document.querySelector('#BG');
const pp = document.querySelector('#pp');
const progressBar = document.querySelector('#progressBar');
const song = document.querySelector('#song');
var playing=true;

var songs = ['music/0.mp3','music/1.mp3','music/2.mp3','music/3.mp3','music/4.mp3','music/5.mp3','music/6.mp3','music/7.mp3','music/8.mp3','music/9.mp3','music/10.mp3','music/11.mp3','music/12.mp3','music/13.mp3','music/14.mp3','music/15.mp3','music/16.mp3','music/17.mp3','music/18.mp3','music/19.mp3','music/20.mp3','music/21.mp3','music/22.mp3','music/23.mp3','music/24.mp3'
,'music/25.mp3','music/26.mp3','music/27.mp3','music/28.mp3','music/29.mp3'
,'music/30.mp3','music/31.mp3','music/32.mp3','music/33.mp3','music/34.mp3'
,'music/35.mp3','music/36.mp3','music/37.mp3','music/38.mp3'
,'music/39.mp3','music/40.mp3','music/41.mp3','music/42.mp3','music/43.mp3','music/44.mp3','music/45.mp3','music/46.mp3','music/47.mp3','music/48.mp3','music/49.mp3','music/50.mp3','music/51.mp3','music/52.mp3','music/53.mp3','music/54.mp3'],
songIndex=0,
thumbnails=['images/0.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg'
,'images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg','images/16.jpg','images/17.jpg','images/18.jpg','images/19.jpg','images/20.jpg'
,'images/21.jpg','images/22.jpg','images/23.jpg','images/24.jpg','images/25.jpg','images/26.jpg','images/27.jpg','images/28.jpg','images/29.jpg','images/30.jpg'
,'images/31.jpg','images/32.jpg','images/33.jpg','images/34.jpg','images/35.jpg','images/36.jpg','images/37.jpg','images/38.jpg','images/39.jpg','images/40.jpg'
,'images/41.jpg','images/42.jpg','images/43.jpg','images/44.jpg','images/45.jpg','images/46.jpg','images/47.jpg','images/48.jpg','images/49.jpg','images/50.jpg','images/51.jpg','images/52.jpg','images/53.jpg','images/54.jpg'],
songNames=['Love Yourself - Justin Beiber','Falling - Trevor Daniel','Bad Guy - Billie eilish','Haan main galat - pritam | Arijit','kaho na kaho - Sunny lashari',
'Let Me - zayn malik','jo bheji thi dua - Arijit Singh','Safari - serena','Tu hi yaar mera - Arijit | Neha Kakkar',
'Bella Ciao - Money Heist',
'Bekhayali - Sachet Tandon',
'Senorita - Shawn Mendes | Camila cabello',
'Bollywood Retro Medley - Sidhartha Slathia',
'Sugar & Brownies - Dhaka',
'Valentine',
'Mann Mera - Tina | Rajeev',
'Aap ki kashish - Himesh reshammiya',
'On My Way - Alan Walker',
'Allah Maaf Kare - Sonu Nigam',
'Attention - Charlie Puth',
'Astronomia - Coffin Dance',
'Afreen Afreen - Coke Studio',
'Complicated - Dimitri Vegas',
'In my feelings - Drake Kiki do you love me',
'New Rules - Dua Lipa',
'Frse Machayenge - Emiway Bantai',
'Machayenge - Emiway Bantai',
'Tujhe Kitna Chahne lage hum - Arijit Singh',
'Gulabi Aankhe - Sanam',
'Haaye Oye - Ash King | Nikhil',
'Hamari Adhuri Kahani - Arijit Singh',
'Hum Mar Jayenge- Arijit Singh | Tulsi',
'Intentions - Justin Beiber',
'Phir Mohabbat - Arijit Singh',
'Maa tujhe Salam - A.R Rahman',
'Main Rang Sharbato ka - Atif Aslam',
'Girls Like You - Maroon5',
'Mere Umar k naujawano ',
`They don't really care about us - MJ`,
'I took a Pill in Ibiza - Mike Posner',
'One Bottle down - Yo Yo Honey Singh',
'Story of my Life - One Direction',
'Pal Pal dil k paas - Arijit singh',
'Wow - Post Malone',
'Sunflower - Post Malone',
'Raabta - Arijit Singh',
'Sach Keh Raha Deewana - Sanam',
'Look at her now - Selena Gomez',
'Tere liye - Atif Asalm | Shreya Ghosal',
'Tere Mitti - B Praak',
'Tum mile - Pritam | Neeraj Sridhar',
'See You Again - Wiz Khalifa | Charlie Puth',
'Makhna - Yo Yo Honey Singh',
'Zara sa - KK | pritam',
'Zara Zara Behekta hai - Omkar Singh'];



function playPause(){
    if(playing){
        const song = document.querySelector('#song'),pp = document.querySelector('#pp'),
        thumbnail = document.querySelector('#thumbnail');
        pp.src="images/Pause.png";
        song.play();//play song
        playing=false;
        thumbnail.style.transform = 'scale(1.2)';

    }
    else{
        const song = document.querySelector('#song');
        pp.src="images/play.png";
        song.pause();//pause song
        playing=true;
        thumbnail.style.transform = 'scale(1)';
    }

}

function nextsong(){
     songIndex++;
     if(songIndex>54)songIndex=0;
     document.querySelector('#song').src=songs[songIndex];
     document.querySelector('#thumbnail').src=thumbnails[songIndex];
     document.querySelector('#BG').src=thumbnails[songIndex];
     playPause();
     document.querySelector('.song-title').innerHTML=songNames[songIndex];
}
function previoussong(){
    songIndex--;
    if(songIndex<0)songIndex=54;
    document.querySelector('#song').src=songs[songIndex];
    document.querySelector('#thumbnail').src=thumbnails[songIndex];
    document.querySelector('#BG').src=thumbnails[songIndex];
    playPause();
    document.querySelector('.song-title').innerHTML=songNames[songIndex];
}

function updateProgressValue(){
    const progressBar = document.querySelector('#progressBar'),song = document.querySelector('#song');
    if(document.querySelector('#song')!=null){progressBar.max = document.querySelector('#song').duration;
    progressBar.value =  document.querySelector('#song').currentTime;}
}
setInterval(updateProgressValue,700);
