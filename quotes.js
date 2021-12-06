const quotes = [
    {
        quote:"I think that somehow, we learn who we really are and then live with that decision.",
        author: "Eleanor Roosevelt",
    },
    {
        quote:"Life is not fair; get used to it.",
        author: "Bill Gates",
    },
    {
        quote:"Politeness, n. The most acceptable hypocrisy.",
        author: "Ambrose Bierce",
    },
    {
        quote:"I hear and I forget. I see and I remember. I do and I understand.",
        author: "Confucius",
    },
    {
        quote:"A friend to all is a friend to none.",
        author: "Aristotle",
    },
    {
        quote:"Cherish all your happy moments: they make a fine cushion for old age.",
        author: "Christopher Morley",
    },
    {
        quote:"Study the past if you would define the future.",
        author: "Confucius",
    },
    {
        quote:"We need men who can dream of things that never were.",
        author: "John F. Kennedy",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author: "Cicero",
    },
    {
        quote:"The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;