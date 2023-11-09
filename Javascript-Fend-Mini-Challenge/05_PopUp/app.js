// const btn=document.querySelector(".btn");
// const containerA = document.querySelector(".Container-A");
// const containerB = document.querySelector(".Container-B");

// btn.addEventListener("click",()=>{
//     containerB.style.display = "none";
//     console.log("first");
// })


const btn = document.querySelector(".btn");
const containerA = document.querySelector(".Container-A");
const containerB = document.querySelector(".Container-B");

btn.addEventListener("click", () => {
  if (containerB.style.display === "none") {
    containerB.style.display = "block";
  } else {
    containerB.style.display = "none";
  }
  console.log("first");
});
