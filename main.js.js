let audio = new Audio ('hozy-i-swiezy.ogg');

let playButton = document.querySelector('button.play');
let playButtonIcon = playButton.querySelector('i');


playButton.addEventListener('click', function () {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', function () {
    playButtonIcon.className = "icon ion-ios-pause";
});

audio.addEventListener('pause', function () {
    playButtonIcon.className = "icon ion-ios-play";
});

