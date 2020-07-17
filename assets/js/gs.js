var animateTourTl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
animateTourTl
  .fromTo(".screenshot-modal", { zIndex: 0 }, { zIndex: 1, duration: 0.1 })
  .fromTo(
    ".slide",
    { translateY: "-100%" },
    { translateY: 0, stagger: 0.2, duration: 0.9 }
  )
  .to(".main-body", { display: "none", duration: 0 })
  .fromTo(".modal-content", { opacity: 0 }, { opacity: 1 })
  .fromTo("#closeBtn", { opacity: 0 }, { opacity: 1, duration: 0.5 });

var animateTour1Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
var animateTour2Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
var animateTour3Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
var animateTour4Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
var animateTour5Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });
var animateTour6Tl = gsap.timeline({ defaults: { duration: 1 }, paused: true });

animateTour1Tl
  .to(
    ".tour-screen-1",

    { display: "block", duration: 0 }
  )
  .fromTo(".tour-screen-1", { opacity: 0 }, { opacity: 1 });
animateTour2Tl
  .to(".tour-screen-2", { display: "block", duration: 0 })
  .fromTo(".tour-screen-2", { opacity: 0 }, { opacity: 1 });
animateTour3Tl
  .to(".tour-screen-3", { display: "block", duration: 0 })
  .fromTo(".tour-screen-3", { opacity: 0 }, { opacity: 1 });
animateTour4Tl
  .to(".tour-screen-4", { display: "block", duration: 0 })
  .fromTo(".tour-screen-4", { opacity: 0 }, { opacity: 1 });
animateTour5Tl
  .to(".tour-screen-5", { display: "block", duration: 0 })
  .fromTo(".tour-screen-5", { opacity: 0 }, { opacity: 1 });
animateTour6Tl
  .to(".tour-screen-6", { display: "block", duration: 0 })
  .fromTo(".tour-screen-6", { opacity: 0 }, { opacity: 1 });
animateTour1Tl.play();
// Add Animation to Respective Next Button
var nextBtns = ["nextBtn1", "nextBtn2", "nextBtn3", "nextBtn4", "nextBtn5"];
nextBtns.forEach((btn) =>
  document.getElementById(btn).addEventListener("click", (e) => {
    var id = parseInt(btn.slice(7, 8));

    eval(`animateTour${id}Tl.reverse()`);
    eval(`setTimeout(()=>(animateTour${id + 1}Tl.play()), 1200)`);
  })
);
// Add Animation to Respective Previous Button
var prevBtns = ["prevBtn1", "prevBtn2", "prevBtn3", "prevBtn4", "prevBtn5"];
prevBtns.forEach((btn) =>
  document.getElementById(btn).addEventListener("click", (e) => {
    var id = parseInt(btn.slice(7, 8));

    eval(`animateTour${id + 1}Tl.reverse()`);
    eval(`setTimeout(()=>(animateTour${id}Tl.play()), 1200)`);
  })
);
document.getElementById("closeBtn").addEventListener("click", () => {
  if (animateTourTl.isActive() === true) {
    return;
  }
  animateTourTl.reverse();
});
