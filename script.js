
//  poster and song name change
const music = new Audio('audio/1.mp3')
// music.play();


const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Teri Meri Jindgi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Batao Yaad Hai Tumko <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Mare Dhol Judaiyan <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon , Gurinder</div>`,
        poster: "img/20.jpg",
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
    e.getElementsByTagName('div')[0].src =songs[i].songName;
})

// master play play puase button

let masterPlay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} );


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background = 'rgba(105,105,105, .0)';
    })
}

let index = 0;
let posterMasterPlay =document.getElementById('poster-master-play')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playlistplay')).forEach((e) =>{
    e.addEventListener('click',(el) =>{
        index =  el.target.id;

        music.src = `audio/${index}.mp3`;
        posterMasterPlay.src =`img/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });
  
         songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
         })
         makeAllBackground()
         Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgba(105, 105, 105, .1)"
         makeAllPlays();
         el.target.classList.add('bi-pause-circle-fill');
         el.target.classList.remove('bi-play-circle-fill');
         wave.classList.add('active1')
    });
})

let currentStart = document.getElementById("currentstart");
let currentEnd = document.getElementById("currentend");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener('timeupdate',()=>{
    let musicCurr = music.currentTime;
    let musicDurr = music.duration;

    let mint = Math.floor(musicDurr / 60);
    let sec = Math.floor(musicDurr % 60);
 
    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${mint}:${sec}`;

    let mint2 = Math.floor(musicCurr / 60);
    let sec2 = Math.floor(musicCurr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${mint2}:${sec2}`;
  
    let progressBar = parseInt((musicCurr / musicDurr) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100
});

// volume button

let volIcon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let volBar = document.getElementsByClassName('vol-bar')[0];
let volDot = document.getElementById('vol-dot');

vol.addEventListener( 'change', ()=>{
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-up-fill');
    }

  let vol_a = vol.value;
  volBar.style.width = `${vol_a}%`;
  volDot.style.left =`${vol_a}%`;
  music.volume = vol_a / 100;

})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index =Array.from(document.getElementsByClassName('songitem')).length
    }
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src =`img/${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

     songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
     })
     makeAllBackground()
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgba(105, 105, 105, .1)"
     makeAllPlays();
     el.target.classList.add('bi-pause-circle-fill');
     el.target.classList.remove('bi-play-circle-fill');
     wave.classList.add('active1')
})

next.addEventListener('click',()=>{
    index++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index =1;
    }
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src =`img/${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

     songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
     })
     makeAllBackground()
     Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgba(105, 105, 105, .1)"
     makeAllPlays();
     el.target.classList.add('bi-pause-circle-fill');
     el.target.classList.remove('bi-play-circle-fill');
     wave.classList.add('active1')
})






















// popular song section scroll button
let popSongLeft = document.getElementById('pop-song-left');
let popSongRight = document.getElementById('pop-song-right')
let popSong = document.getElementsByClassName('pop-song')[0];


popSongRight.addEventListener('click', ()=>{
  popSong.scrollLeft += 330;
})

popSongLeft.addEventListener('click', ()=>{
    popSong.scrollLeft -= 330;
  })

// popular artist section  scroll buttons

let popArtLeft = document.getElementById('pop-art-left');
let popArtRight = document.getElementById('pop-art-right')
let item = document.getElementsByClassName('item')[0];


popArtRight.addEventListener('click', ()=>{
  item.scrollLeft += 330;
})

popArtLeft.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
  })