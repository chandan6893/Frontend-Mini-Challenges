const accordians = document.querySelectorAll(".accordian");
const question   = document.querySelector(".question");
const icon       = document.querySelector(".icon");
const answer     =document.querySelector(".answer");

accordians.forEach(accordian=>{
    accordian.addEventListener("click",()=>{
        console.log("first")
        answer.classList.toggle("active")
    })
})