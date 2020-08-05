var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        playMusic(this.innerHTML);
        pressedAnimation(this.innerHTML);
    })
}

document.addEventListener('keydown', function(event){
    playMusic(event.key);
    pressedAnimation(event.key);
})

function playMusic(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
            
    
        default:
            console.log(this.innerHTML);
    }
}

function pressedAnimation(key) {
    switch (key) {
        case "w":
            document.querySelector(".w").classList.add("pressed");
            break;
        case "s":
            document.querySelector(".s").classList.add("pressed");
            break;
        case "a":
            document.querySelector(".a").classList.add("pressed");
            break;
        case "d":
            document.querySelector(".d").classList.add("pressed");
            break;
        case "j":
            document.querySelector(".j").classList.add("pressed");
            break;
        case "k":
            document.querySelector(".k").classList.add("pressed");
            break;
        break;
        case "l":
            document.querySelector(".l").classList.add("pressed");
            break;
        break;
            
    
        default:
            console.log(this.innerHTML);
    }
    setTimeout(function() {
        document.querySelector(".pressed").classList.remove("pressed");
    }, 100);
}