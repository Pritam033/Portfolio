var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
 document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");
  const closeMenu = document.getElementById("close-menu");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
    toggle.classList.toggle("active");
  });

  closeMenu.addEventListener("click", () => {
    navList.classList.remove("show");
    toggle.classList.remove("active");
  });

  // Optional: Auto-close nav when clicking a link (mobile)
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
      toggle.classList.remove("active");
    });
  });
});
