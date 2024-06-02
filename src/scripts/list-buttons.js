const tilesBtn = document.getElementById("tiles-btn");
const tilesBtnIcon = document.getElementById("tiles-btn-icon");
const listBtn = document.getElementById("list-btn");
const listBtnIcon = document.getElementById("list-btn-icon");

const tilesSection = document.getElementById("section-tiles");
const listSection = document.getElementById("section-list");

function resetButtons() {
  tilesBtnIcon.setAttribute("fill", "#C8C7C7");
  listBtnIcon.setAttribute("fill", "#C8C7C7");
}

function hideSection(section) {
  section.classList.add("hidden");
}

function showSection(section, btnIcon) {
  section.classList.remove("hidden");
  btnIcon.setAttribute("fill", "#3D8EDA");
}

tilesBtn.addEventListener("click", function () {
  resetButtons();
  hideSection(listSection);
  showSection(tilesSection, tilesBtnIcon);
});

listBtn.addEventListener("click", function () {
  resetButtons();
  hideSection(tilesSection);
  showSection(listSection, listBtnIcon);
});
