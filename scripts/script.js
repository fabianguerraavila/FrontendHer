const hamBurger = document.querySelector(".knop");

function klapUit() {
   let hetMenu = document.querySelector(".list");
   hetMenu.classList.toggle("laatZien");
}

hamBurger.addEventListener("click", klapUit);