'use strict';
const userName = prompt("What is your first name?");
if (userName === null){
    alert('You canceled the input')
}else{
const userNametrimed = userName.trim();
alert(userNametrimed ? `Hello, ${userNametrimed}. How are you?` : `Hello stranger! How are you?` )
}