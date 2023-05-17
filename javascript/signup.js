// >DOM, objects, arrays ,authentication, >event handling, >localstorage, conditional statemente, higher order functions
let username = document.getElementById("username")
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");

// console.log(username);
// console.log(email);
// console.log(password);
// console.log(button);
// localStorage.setItem('key', "clas");
// let store = localStorage.getItem("key");
// console.log(store)

button.addEventListener('click', (event) =>{
 event.preventDefault();
 const person = {
    username: username.value,
    email: email.value,
    password: password.value
 }
 console.log("person:", person);
//  console.log("username", username.value);
//  console.log("email", email.value);
//  console.log("password", password.value)
})

// ./
