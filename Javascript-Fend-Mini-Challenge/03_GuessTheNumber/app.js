const userInput = document.querySelector(".userInput");
const submitBtn = document.querySelector(".submitBtn");
const StartGameBtn = document.querySelector(".StartGameBtn");
const result = document.querySelector(".result");
const yourGusses = document.querySelector(".yourGusses");
const form = document.querySelector(".form");

let randomNumber = Math.floor(Math.random() * 100);

const allGussesArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNo = parseInt(userInput.value);
  // console.log(userNo, randomNumber);
  if (userNo < randomNumber) {
    result.innerText = "too low!";
  } else if (userNo > randomNumber) {
    result.innerText = "too high!";
  } else {
    result.innerText = "congrats!!!";
    submitBtn.disabled=true;
    StartGameBtn.disabled=false;
  }
  allGussesArr.push(userNo);
  console.log(allGussesArr);

  yourGusses.innerText = `your gusses ${allGussesArr.join(", ")}`;
  //    userInput.value="";
  form.reset();
});


StartGameBtn.addEventListener("click",()=>{
    yourGusses.innerText='';
    result.innerText='';
    submitBtn.disabled = false;
    StartGameBtn.disabled = true;
    randomNumber = Math.floor(Math.random() * 100);
})