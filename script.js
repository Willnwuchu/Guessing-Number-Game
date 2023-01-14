 let secretNumber = Math.trunc(Math.random()*20);
 

 
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {

const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess);

const displayMessage = function (message){
    document.querySelector('.message').textContent = message; 
}


// When there is no input
if (!guess) {
    // document.querySelector('.message').textContent = '🛑No Number!';
    displayMessage('🛑No Number!') ;

    // when player wins
}else if(guess === secretNumber){
    // document.querySelector('.message').textContent = '😂Correct Score!';
    displayMessage('😂Correct Score!') ;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    }else if (guess!==secretNumber){
        if(score > 1){
        // document.querySelector('.message').textContent = guess > secretNumber ?' 🗺️Number Too High!' : '💬Number Too Low!';
        displayMessage( guess > secretNumber ?' 🗺️Number Too High!' : '💬Number Too Low!'
        )
        
        score--;
        document.querySelector('.score').textContent = score;
        
    }}else{
        // document.querySelector('.message').textContent = '☠️You Lost the Game!';
        displayMessage('☠️You Lost the Game!');
        document.querySelector('.score').textContent = 0;

    //when guess is too high
}//else if (guess > secretNumber){
//     if(score>1){
//         score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = '🗺️Number Too High!';

//     }else{
//         document.querySelector('.message').textContent = '☠️You Lost the Game!';
//         document.querySelector('.score').textContent = 0;

//         //when guess is too low
//     }
//     }else if (guess < secretNumber){
//         if(score>1){
//             score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = '💬Number Too Low!';
//         }else{
//             document.querySelector('.message').textContent = '☠️You Lost the Game!'; 
//             document.querySelector('.score').textContent = 0;
//         }
    
// }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random()*20);
    document.querySelector('.number').textContent = "?";

    // document.querySelector('.message').textContent = 'Start guessing...🤔';
    displayMessage('Start guessing...🤔');

    document.querySelector('.guess').value = Number('');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});

//Refactoring a code

