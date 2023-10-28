const documentBody = document.querySelector("body");

const logoYellow = document.querySelector(".logo-yellow");
const logoGray = document.querySelector(".logo-gray");
const logoBlue = document.querySelector(".logo-blue");
const logoDefault = document.querySelector(".logo-default");
const pageLink = document.querySelectorAll(".page-link");

const marks = document.querySelectorAll(".text-mark");

logoYellow.addEventListener("click", () => {
  logoYellow.classList.add("logo-clicked");
  documentBody.classList.add("hidden-scroll");
  setTimeout(() => {
    marks.forEach((item) => {
      item.classList.add("marks-contrast");
    });
    pageLink.forEach((item) => {
      item.classList.remove("high-contrast-links");
    });
    documentBody.style.backgroundColor = "#ffb703";
    logoYellow.classList.remove("logo-clicked");
    documentBody.classList.remove("hidden-scroll");
  }, 4000);
});
logoBlue.addEventListener("click", () => {
  logoBlue.classList.add("logo-clicked");
  documentBody.classList.add("hidden-scroll");
  setTimeout(() => {
    marks.forEach((item) => {
      item.classList.remove("marks-contrast");
    });
    pageLink.forEach((item) => {
      item.classList.add("high-contrast-links");
    });
    documentBody.style.backgroundColor = "#003566";
    logoBlue.classList.remove("logo-clicked");
    documentBody.classList.remove("hidden-scroll");
  }, 4000);
});
logoGray.addEventListener("click", () => {
  logoGray.classList.add("logo-clicked");
  documentBody.classList.add("hidden-scroll");
  setTimeout(() => {
    marks.forEach((item) => {
      item.classList.remove("marks-contrast");
    });
    pageLink.forEach((item) => {
      item.classList.remove("high-contrast-links");
    });
    documentBody.style.backgroundColor = "#8d99ae";
    logoGray.classList.remove("logo-clicked");
    documentBody.classList.remove("hidden-scroll");
  }, 4000);
});
logoDefault.addEventListener("click", () => {
  logoDefault.classList.add("logo-clicked");
  documentBody.classList.add("hidden-scroll");
  setTimeout(() => {
    marks.forEach((item) => {
      item.classList.remove("marks-contrast");
    });
    pageLink.forEach((item) => {
      item.classList.remove("high-contrast-links");
    });
    documentBody.style.backgroundColor = "#f8f9fa";
    logoDefault.classList.remove("logo-clicked");
    documentBody.classList.remove("hidden-scroll");
  }, 4000);
});
