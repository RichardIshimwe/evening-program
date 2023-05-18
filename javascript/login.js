let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');

// console.log(email)
// console.log(password)
// console.log(button)
let allUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log("all users",allUsers);

button.addEventListener('click', (event) => {
    event.preventDefault();
    let filteredArray = allUsers.filter(item => item.email === email.value);
    if(filteredArray.length != 0){
        alert("welcome");
    }else{
        alert("register first");
    }
});



