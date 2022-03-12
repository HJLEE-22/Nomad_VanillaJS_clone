const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_input")
const loginButton = document.querySelector("#login_button")
const greeting = document.querySelector("#greeting")

function handleLogin(event){
    event.preventDefault();
    loginForm.classList.add("hidden");

    const username = loginInput.value
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");

}

loginForm.addEventListener("submit", handleLogin)
//form에 이벤트리스너를 걸어야 하는군//