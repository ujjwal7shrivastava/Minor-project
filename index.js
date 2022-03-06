var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/Zara Sa  [LOFI].jpg",
        audioSrc:"./audio/Zara Sa Lofi Slowed And Reverb Dev Bhawsar Lo-fi Mix _Use 🎧 For Best Experience _Emraan Hashmi Lo-fi.mp3",
        title:"Zara sa [L O F I ]"
    },

    {
        id:2,
        imageSrc:"./thumbnails/Dil ko  [LOFI].jpg",
        audioSrc:"./audio/Dil Ko Karaar Aaya - (Slowed+Reverb+Lofi) _ Yasser desai _ Neha Kakkar Song_@Indian Song_AudioLyrics.mp3",
        title:"Dil KO [L O F I]"
    },

    {
        id:3,
        imageSrc:"./thumbnails/Maine Royaan [LOFI}.jpg",
        audioSrc:"./audio/Maine Royaan _ Lofi_Remix_ Tanveer Evan..mp3",
        title:"Maine Royaan [L O F I]"
    },

    {
        id:4,
        imageSrc:"./thumbnails/STAY  [LOFI].jpg",
        audioSrc:"./audio/The Kid LAROI, Justin Bieber - STAY (Official Lofi Remix).mp3",
        title:"STAY  [LOFI]"
    },

    {
        id:5,
        imageSrc:"./thumbnails/TERI ORE [LOFI].jpg",
        audioSrc:"./audio/Teri Oree [Slow + Reverb] - Rahat Fateh Ali Khan,Shreya Ghoshal _ Music lovers _ Textaudio.mp3",
        title:"TERI ORE [LOFI]"
    },

    {
        id:6,
        imageSrc:"./thumbnails/Ektara [L O F I].jfif",
        audioSrc:"./audio/Iktara  - Wake Up Sid _ [slowed + reverb] _ Textaudio.mp3",
        title:"Ektara [L O F I]"
    },

    {
        id:7,
        imageSrc:"./thumbnails/Love Nwantiti [L O F I].jfif",
        audioSrc:"./audio/love nwantiti (tiktok remix slowed + with lyrics).mp3",
        title:"Love Nwantiti [L O F I]"
    },

    {
        id:8,
        imageSrc:"./thumbnails/In dino {L O F I].jfif",
        audioSrc:"./audio/In Dino [slowed + reverb] • 𝐵𝑜𝓁𝓁𝓎𝓌𝑜𝑜𝒹 𝐵𝓊𝓉 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸.mp3",
        title:"In dino {L O F I]"
    },

    {
        id:9,
        imageSrc:"./thumbnails/hokka bar.jpg",
        audioSrc:"./audio/Hookah bar (slowed+reverb).mp3",
        title:"hokka bar"
    },

    {
        id:10,
        imageSrc:"./thumbnails/Raanjhanaa [L O F I].jpg",
        audioSrc:"./audio/Raanjhanaa - WORMONO x @Veerdo  Lofi Remake (Slowed + Reverb) _ 3 AM 🌃Bollywood Lofi.mp3",
        title:"Raanjhanaa [L O F I].jpg"
    },

    {
        id:11,
        imageSrc:"./thumbnails/srivali.jpg",
        audioSrc:"./audio/Srivalli [Lo-fi]- Pushpa • Javed Ali _@JAZ Scape _Textaudio Lyrics.mp3",
        title:"srivali"
    },


]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`

                <div class="audio">
                <div class="audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;


}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}

