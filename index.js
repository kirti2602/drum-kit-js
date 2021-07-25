let allButtons = document.getElementsByClassName('drum');

for(let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener('click', function(){

        playAudio(allButtons[i].textContent);
        addAnimation(allButtons[i].textContent);

    });
}

// 'keypress' event for connecting your keyboard with your website

document.addEventListener('keypress', function(){
     
    playAudio(event.key);
    addAnimation(event.key)
    // event.key is used to get whatever you just pressed from the keyboard
})


function playAudio(keyboardKey){

switch(keyboardKey){

case 'w':
    let audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();
    break;

case 'a':
        let audio2 = new Audio('sounds/tom-2.mp3');
        audio2.play();
        break;

case 's':
    let audio3 = new Audio('sounds/tom-3.mp3');
    audio3.play();
    break;


case 'd':
    let audio4 = new Audio('sounds/tom-4.mp3');
    audio4.play();
    break;

case 'j':
    let audio5 = new Audio('sounds/snare.mp3');
    audio5.play();
    break;

case 'k':
    let audio6 = new Audio('sounds/crash.mp3');
    audio6.play();
    break;

case 'l':
    let audio7 = new Audio('sounds/kick-bass.mp3');
    audio7.play();
    break;

default: 
console.log('you pressed wrong key!!!')
break;
             }
}

function addAnimation(buttonName){
    document.querySelector('.' + buttonName).classList.add('pressed');
    document.body.style.backgroundColor = 'black';
    setTimeout(function(){
        document.querySelector('.' + buttonName).classList.remove('pressed');
        document.body.style.backgroundColor = '#283149';
    }, 100);
}

