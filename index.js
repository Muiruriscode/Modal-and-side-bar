const theme = document.querySelector(".home-section");
const modal = document.getElementById("modal");
const modalHeading = document.querySelector(".heading");
const img = document.getElementById("modal-image");

function modalFunc(image, src) {
  modal.style.display = "flex";
  modal.style.transform = "translateY(130vh)";
  modalHeading.textContent = `${image} selected`;
  img.setAttribute("src", `${src}`);
}

function modalCloseFunc(e) {
  console.log(e);
  if (e.target.classList.contains("modal-section")) {
    modal.style.display = "none";
  }
}
