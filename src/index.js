import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".dark",
      start: "top bottom",
      scrub: true,
      anticipatePin: 1,
   },
});

tl.from("img", { x: 200, opacity: 0, duration: 1 }).from(
   ".content",
   {
      y: 300,

      duration: 1,
   },
   "-=0.5"
);
