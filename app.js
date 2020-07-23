
function likeGuitar(){
    var like = prompt('Would you Like to Learn to Play Guitar?');
    if (like == 'yes'){
        alert('WELCOME! This is the right place for you!');
    } 
    else if (like == 'no'){
        alert('Maybe this isnt the Website for you')
    } 
    else{
        alert('Sorry i didnt get that?')
    }
    return like;
}
// likeGuitar();

// var like;
// while(true){ 
//     like = prompt('Would you Like to Learn to Play Guitar?');
//     if(like == 'yes'){
//         alert('welcome');
//         break;
//     }
//     if(like == 'no'){
//         alert('Maybe This isnt the Website for You');
//         break;
//     }
//     alert('Sorry, I didnt get that, Please answer yes or no');
// }

var blah;
while(blah != 'yes' && blah != 'no'){
    blah = likeGuitar()
}


var userTime = prompt('what time is it?');

if (userTime < 12 ){
   document.write('<h3>' + 'Good Morning' + '</h3>')
} else if (userTime >= 12 && userTime < 18){
   document.write('<h3>' + 'Good Afternoon' + '</h3>')
} else if (userTime >= 18){
    document.write('<h3>' + 'Good Evening' + '</h3>')
}

function getuserName(){
    var userNameInFunction = prompt('what is your name?');
    //document.write('<h3>' + userNameInFunction + '</h3>');
    return userNameInFunction;
}

var userName = getuserName();

document.write('<h3>' + userName + '</h3>');

// for (var i = 0; i <= 12; i = i + 1) {
//    console.log(1 * 8);
// }

var wannaPlay = prompt('Do you want to play a game');
var correctAnswer = 12;

while(wannaPlay == 'yes' || wannaPlay == 'Yes'){
    for (var i = 0; i < 100; i = i + 1){
        var userAnswer = prompt('please enter a number between 1 and 20');
        if(userAnswer == correctAnswer){
            wannaPlay = prompt('DING DING DING, THAT IS CORRECT!!! would you like to play again?');
            break;
        } else {
            if (userAnswer < correctAnswer){
            alert('Incorrect, too low, try again');
        } else {
            if (userAnswer > correctAnswer){
            alert('Incorrect, too high, try again');
            }
        }
    }
  }
}