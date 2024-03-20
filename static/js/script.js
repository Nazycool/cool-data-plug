let toggle = document.querySelector(".toggle__menu");
let toggle_icon = document.querySelector(".toggle_menu i");
let dropdownMenu = document.querySelector(".dropdown__menu");

toggle.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggle_icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
