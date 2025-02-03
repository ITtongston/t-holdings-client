import gsap from "gsap";

export const fadeIn = (target, duration = 1, delay = 0) => {
  gsap.fromTo(
    target,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease: "power2.out" }
  );
};

export const slideInFromLeft = (
  target,
  duration = 1,
  delay = 0,
  distance = 100
) => {
  gsap.fromTo(
    target,
    { x: -distance, opacity: 0 },
    { x: 0, opacity: 1, duration, delay, ease: "power2.out" }
  );
};

export const slideInFromRight = (
  target,
  duration = 1,
  delay = 0,
  distance = 100
) => {
  gsap.fromTo(
    target,
    { x: distance, opacity: 0 },
    { x: 0, opacity: 1, duration, delay, ease: "power2.out" }
  );
};
