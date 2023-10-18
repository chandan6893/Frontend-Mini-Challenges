const count = document.querySelector(".CounterCount");
const plusBtn = document.querySelector(".CounterButtonsPlus");
const minusBtn = document.querySelector(".CounterButtonsMinus");
const resetBtn = document.querySelector(".CounterResetBtn");
const incOrDecBy = document.querySelector(".CounterIncOrDecInputTag");

plusBtn.addEventListener("click",()=>{
    console.log("PLUS");
    // (count.innerText) is string,we have to change it to a number by using parseInt()
    // console.log(parseInt(count.innerText)+1)
    const incByValue=parseInt(incOrDecBy.value)
    count.innerText = parseInt(count.innerText) + incByValue;
})

minusBtn.addEventListener("click", () => {
  // (count.innerText) is string,we have to change it to a number by using parseInt()

  const decByValue = parseInt(incOrDecBy.value);
  count.innerText = parseInt(count.innerText) - decByValue;
});

resetBtn.addEventListener("click",()=>{
   count.innerText=0;
    
})