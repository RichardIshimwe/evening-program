let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("button");
let parentDiv = document.querySelector(".blogs")

// console.log(title);
// console.log(description);
// console.log(button);
let allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
button.addEventListener("click", (event) =>{
event.preventDefault();
let division =document.createElement('div');
let heading = document.createElement('h2');
let paragraph =document.createElement('p');
division.setAttribute('class','division');
heading.innerHTML = title.value;
paragraph.innerHTML = description.value;
division.appendChild(heading);
division.appendChild(paragraph);
parentDiv.appendChild(division);
let blog = {
    title: title.value,
    description: description.value
};
// localStorage.setItem("key", value)

// console.log("blog:", blog );
allBlogs.push(blog);
console.log("final array:", allBlogs);
localStorage.setItem("blogs", JSON.stringify(allBlogs));
});

