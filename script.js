const glide = new Glide(".glide", {
  type: "carousel",
  perView: 5,
  gap: 20,
  autoplay: 3000,
  hoverpause: true,
  animationDuration: 800,
  animationTimingFunc: "ease-in-out",
  perView: 5,
  breakpoints: {
    600: {
      perView: 2,
    },
    1024: {
      perView: 3,
    },
  },
});

glide.mount();
