//section animation slide in and fadein-------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".js-scroll").classList.add("divImage");
      document.querySelectorAll(".jscontent").classList.add("divContent");
    }
  });
});
observer.observe(document.querySelectorAll(".section"));
