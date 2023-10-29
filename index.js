/* Assignment1 omar alzhrani 2140113 */
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundleMenu();
});
action.addEventListener("click", () => {
  hider();
});
function hundleMenu() {
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
}
function hider() {
  action.classList.remove("is-active");
  menu.classList.remove("is-active");
}

