const tableBtn = document.getElementById("list-table-btn");
const tableBtnIcon = document.getElementById("list-table-btn-icon");
const listBtn = document.getElementById("list-btn");
const listBtnIcon = document.getElementById("list-btn-icon");

const tableSection = document.getElementById("list-btn-icon");
const listSection = document.getElementById("list-btn-icon");

function resetButtons() {
  tableBtnIcon.setAttribute("fill", "#C8C7C7");
  listBtnIcon.setAttribute("fill", "#C8C7C7");
}

function hideSection(section) {
  section.classList.add("hidden");
}

function showSection(section, btnIcon) {
  section.classList.remove("hidden");
  btnIcon.setAttribute("fill", "#3D8EDA");
}

tableBtn.addEventListener("click", function () {
  resetButtons();
  hideSection(listSection);
  showSection(tableSection, tableBtnIcon);
});

listBtn.addEventListener("click", function () {
  resetButtons();
  hideSection(tableSection);
  showSection(listSection, listBtnIcon);
});
