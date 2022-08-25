//Select elements

const accordion = document.getElementById("accordion-container");
const imgBox = document.querySelector(".img-box");

accordion.addEventListener("click", (e) => {
  //Get class list of targeted element
  const targetClass = e.target.classList;

  //Add and remove active class list
  if (targetClass.contains("accordion-question")) {
    e.target.nextElementSibling.classList.toggle("accordion-answer-active");
    e.target.classList.toggle("accordion-question-active");
  }
});

//Moving box around when we hover over questions
accordion.addEventListener("mouseover", () => {
  imgBox.classList.add("img-box-active");
});

accordion.addEventListener("mouseout", () => {
  imgBox.classList.remove("img-box-active");
});
