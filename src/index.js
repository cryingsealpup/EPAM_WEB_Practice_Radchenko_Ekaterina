import "./styles/menu.scss";

var navItems = document.querySelectorAll(".nav__link");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("nav__link--active");
		})
		this.classList.add("nav__link--active");
	});
});
alert("js is here");