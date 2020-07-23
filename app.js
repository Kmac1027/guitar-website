function likeGuitar(){
    var like = prompt('Would you Like to Learn to Play Guitar?');
    if (like === 'yes'){
        alert('WELCOME! This is the right place for you!');
    } 
    else if (like === 'no'){
        alert('Maybe this isnt the Website for you')
    } 
    else{
        alert('Sorry i didnt get that?')
    }
}
likeGuitar();

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


