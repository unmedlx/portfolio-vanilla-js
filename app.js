// Html Elements
const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

//Functions
const pageSwitch = () => {
  console.log("repeat");
  //button click active class
  for (let i = 0; i < secBtn.length; i++) {
    console.log(i);
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
      //this only exist in regular function, not arrow function
    });
  }

  //section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //hide other sections
      console.log(sections);
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};

// Toggle Theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  allSections.classList.toggle("light-mode");
});

pageSwitch();
