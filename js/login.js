const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_input")
const loginButton = document.querySelector("#login_button")
const greeting = document.querySelector("#greeting")
const USERNAME_KEY = "username"


function handleLogin(event){
    event.preventDefault();
    loginForm.classList.add("hidden");

    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
    localStorage.setItem(USERNAME_KEY, username)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function greetingToUser(){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedUsername}`;
}


if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleLogin);
} else{
    greetingToUser();
}




