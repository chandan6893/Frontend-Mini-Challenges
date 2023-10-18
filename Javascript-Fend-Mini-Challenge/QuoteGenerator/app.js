const Quotes = [
  {
    quote:
      "I try to create sympathy for my characters, then turn the monsters loose",
    writer: "—Stephen King",
  },
  {
    quote: "Prose is architecture, not interior decoration",
    writer: "—Ernest Hemingway",
  },
  {
    quote:
      "It's none of their business that you have to learn to write. Let them think you were born that way.",
    writer: "—Ernest Hemingway",
  },
  {
    quote:"And as imagination bodies forth The forms of things unknown, the poet's pen Turns them to shapes and gives to airy nothingA local habitation and a name.",
    writer:"—William Shakespeare (from A Midsummer Night’s Dream)"
  }
];

const randomQuote = document.querySelector(".randomQuote");
const writer = document.querySelector(".writer");
const GeneratorBtn = document.querySelector(".GeneratorBtn");

GeneratorBtn.addEventListener("click",()=>{
    console.log(randomQuote.innerText);
})