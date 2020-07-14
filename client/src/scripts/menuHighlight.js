import "../styles/menu.scss";

var navItems = document.querySelectorAll(".nav__item");
navItems.forEach(function(e) {
	e.addEventListener("click", function() {
		navItems.forEach(function(e2) {
			e2.classList.remove("nav__item--active");
		});
		this.classList.add("nav__item--active");
	});
});