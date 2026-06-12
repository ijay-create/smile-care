import Lenis from "lenis";

export function initSmoothScroll() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return lenis;
}