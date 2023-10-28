const editButton = document.querySelector(".editar");

editButton.addEventListener("click", (event) => {
  event.preventDefault();

  form.style.display = "flex";
  personalData.style.display = "none";
});

function resumePrint() {
  window.print();
}
