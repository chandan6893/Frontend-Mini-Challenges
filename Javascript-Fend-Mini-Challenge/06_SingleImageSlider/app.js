const slides=document.querySelectorAll(".slide");
console.log(slides);
let counter=0;
slides.forEach((slide,ind)=>{
   slide.style.left=`-${ind*100}%`;
 
});
const goPrev = () => {
  counter--;
  slideImages();
};

const goNext = () => {
  counter++;
  slideImages();
};


const slideImages=()=>{
    slides.forEach((slide)=>{
       let x= slide.style.transform = `translateX(${counter * 100}%)`;
       console.log("first",x)
    })
}
