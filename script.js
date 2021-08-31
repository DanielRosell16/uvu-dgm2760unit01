
// document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B in Provo!"

document.querySelector('main > h1').innerText = "Welcome to Joe's!"

let userName = prompt("What is your name?")

let message = `Hello ${userName}, welcome to the best lodging in Utah county`;

// let message = "Hello " + userName + ", welcome to the best lodging in Utah"

document.querySelector('#greeting').innerHTML = message;

