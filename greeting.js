﻿const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    console.log("hello");
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + username;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    //show the greeting
    paintGreetings(savedUsername)
}