let ourskills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .progress .total-fill span");
console.log(spans);
window.onscroll = function () {
  if (window.scrollY >= ourskills.offsetTop - 250) {
    console.log("Reach Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
