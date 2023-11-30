// // youtube Link
// // https://www.youtube.com/watch?v=vU_U-UBMOnM
// const accordians = document.querySelectorAll(".accordian");

// accordians.forEach((accordian) => {
//   const icon = accordian.querySelector(".icon");
//   const answer = accordian.querySelector(".answer");
//   accordian.addEventListener("click", () => {
//     // icon.classList.toggle("active");
//     // answer.classList.toggle("active");

//     // BUT best would be

//     if (icon.classList.contains("active")) {
//       icon.classList.remove("active");
//       answer.style.maxHeight = null;
//     } else {
//       icon.classList.add("active");
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     }
//   });
// });

const accordians = document.querySelectorAll(".accordian");
let currentAccordion = null;

accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");
  accordian.addEventListener("click", () => {
    if (currentAccordion && currentAccordion !== accordian) {
      const currentIcon = currentAccordion.querySelector(".icon");
      const currentAnswer = currentAccordion.querySelector(".answer");
      currentIcon.classList.remove("active");
      currentAnswer.style.maxHeight = null;
    }

    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    currentAccordion = accordian;
  });
});
