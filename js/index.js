const btn_pro = document.querySelector('#btn_projects');
const btn_menu = document.querySelector('#menu_btn');
const nav = document.querySelector('#menu_nav')

btn_pro.addEventListener("click", () => {
  console.log("hello world");
})


btn_menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn_menu.classList.toggle('active');
})
