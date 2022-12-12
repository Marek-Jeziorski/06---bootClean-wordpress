console.log("mobile works");
class MobileMenu {
  constructor() {
    this.header = document.querySelector("header");
    this.navIcon = document.querySelector(".header__nav-icon");
    this.navBar = document.querySelector(".header__navbar");

    this.events();
  }

  events() {
    this.navIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.navBar.classList.toggle("header__navbar--is-visible");
    this.header.classList.toggle("header--is-expanded");
    this.navIcon.classList.toggle("header__nav-icon--close-x");
  }
}

export default MobileMenu;
