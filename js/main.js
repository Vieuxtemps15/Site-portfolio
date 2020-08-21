new WOW().init();

var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".project-pagination",
    clickable: true,
    bulletClass: "bullets",
    bulletActiveClass: "project-bullets-active",
  },
});
