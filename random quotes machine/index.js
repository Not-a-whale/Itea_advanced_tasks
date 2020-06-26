var quotes = [
  {
    name: "Pliny the Elder",
    quote:
      "True glory consists in doing what deserves to be written; in writing what deserves to be read.",
    image: "books",
  },
  {
    name: "Werner von Braun",
    quote: "Once the rockets are up, who cares where they come down?",
    image: "rockets",
  },
  {
    name: "Henry Ford",
    quote: "People can have the Model T in any color – so long as it’s black.",
    image: "cars",
  },
  {
    name: "Jean-Jacques Rousseau",
    quote: "Happiness: a good bank account, a good cook and a good digestion.",
    image: "happiness",
  },
  {
    name: "Lyall Watson",
    quote:
      "If the brain were so simple we could understand it, we would be so simple we couldn’t.",
    image: "brain",
  },
  {
    name: "Joseph Campbell",
    quote: "Computers are like Old Testament gods: lots of rules and no mercy.",
    image: "computers",
  },
  {
    name: "Steve Wozniak",
    quote: "Never trust a computer you can’t throw out a window.",
    image: "computer",
  },
];

// Getting DOM elements

var newQuote = document.querySelector("#new-quote");
var author = document.querySelector("#author");
var newImage = document.querySelector("#newImage");
var text = document.querySelector("#text");
var tweetQuote = document.querySelector("#tweet-quote");

newQuote.addEventListener("click", displayQuote);

window.onload = displayQuote();

function displayQuote() {
  var number = Math.floor(Math.random() * quotes.length);
  author.innerHTML = quotes[number].name;
  text.innerHTML = quotes[number].quote;
  newImage.setAttribute("src", "./images/" + quotes[number].image + ".jpg");
  console.log("./images/" + quotes[number].image + ".jpg");
}
