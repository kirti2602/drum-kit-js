let allButtons = document.getElementsByClassName('drum');

for(let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener('click', function(){
        // let audio = new Audio('sounds/'+  i   +'.mp3'); //stored the sound in js
        // audio1.play(); //playing the sound

        playAudio(allButtons[i].textContent);
    });
}

// 'keypress' event for connecting your keyboard with your website

document.addEventListener('keypress', function(){
     
    playAudio(event.key);
    // event.key is used to get whatever you just pressed from the keyboard
})


function playAudio(keyboardKey){

switch(keyboardKey){

case 'w':
    let audio1 = new Audio('sounds/0.mp3');
    audio1.play();
    break;

case 'a':
        let audio2 = new Audio('sounds/1.mp3');
        audio2.play();
        break;

case 's':
    let audio3 = new Audio('sounds/2.mp3');
    audio3.play();
    break;


case 'd':
    let audio4 = new Audio('sounds/3.mp3');
    audio4.play();
    break;

case 'j':
    let audio5 = new Audio('sounds/4.mp3');
    audio5.play();
    break;

case 'k':
    let audio6 = new Audio('sounds/5.mp3');
    audio6.play();
    break;

case 'l':
    let audio7 = new Audio('sounds/6.mp3');
    audio7.play();
    break;

default: 
console.log('you pressed wrong key!!!')
break;
             }



    }