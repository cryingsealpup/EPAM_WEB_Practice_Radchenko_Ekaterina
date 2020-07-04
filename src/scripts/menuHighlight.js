import "../styles/menu.scss";

var navItems = document.querySelectorAll(".nav__item");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("nav__item--active");
		})
		this.classList.add("nav__item--active");
	});
});