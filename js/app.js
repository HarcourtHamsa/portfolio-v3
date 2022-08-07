var tl = gsap.timeline({});
var socialLinks = document.querySelectorAll(".social-links");
console.log(socialLinks);

window.paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

Pace.on("done", () => {
  tl.to(".pace", {
    autoAlpha: 0,
  });
  tl.to(".loader", 1, {
    y: "-100%",
  });

});
