//section animation slide in and fadein-------------------

const fadein = document.querySelectorAll(".fadeIn");
const options = {
  threshold: 0,
  rootMargin: "-150px",
};
const apperOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    apperOnScroll.unobserve(entry.target);
  });
}, options);

fadein.forEach((fader) => {
  apperOnScroll.observe(fader);
});
