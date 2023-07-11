var numOfDrums = document.querySelectorAll('.drum').length

//detecting button press
for(var i = 0; i<numOfDrums; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
            
        var buttonInnerHtml = this.innerHTML
        playSound(buttonInnerHtml)
    })
}

//detecting keypress for sound
document.addEventListener('keydown', function(event){
    playSound(event.key)
})

function playSound(key){
    //alert(i)
    document.querySelector('.' + key).classList.add('pressed');
    setTimeout(function(){  document.querySelector('.' + key).classList.remove('pressed')}, 1000);
    switch (key) {

        case 'w':
            var sound = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3');
            sound.play();
            break;
        case 'a':
            var sound = new Audio('/Drum Kit Starting Files/sounds/tom-2.mp3');
            sound.play();
            break;
        case 's':
            var sound = new Audio('/Drum Kit Starting Files/sounds/tom-3.mp3');
            sound.play();
            break;
        case 'd':
            var sound = new Audio('/Drum Kit Starting Files/sounds/tom-4.mp3');
            sound.play();
            break;
        case 'j':
            var sound = new Audio('/Drum Kit Starting Files/sounds/snare.mp3');
            sound.play();
            break;
        case 'k':
            var sound = new Audio('/Drum Kit Starting Files/sounds/kick-bass.mp3');
            sound.play();
            break;
        case 'l':
            var sound = new Audio('/Drum Kit Starting Files/sounds/crash.mp3');
            sound.play();
            break;
        default:
            break;
    }   
}

document.querySelector('.w').addEventListener('click', function(){
    document.querySelector('.w').classList.add('pressed');
    setTimeout(function(){  document.querySelector('.w').classList.remove('pressed')}, 1000);
})