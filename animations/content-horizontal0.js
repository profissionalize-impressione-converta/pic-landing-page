document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#horizontal-wrapper", {
        xPercent: -100, // se tiver 3 blocos de 100vw, movemos -200% (de 0% até -200%)
        ease: "none",
        scrollTrigger: {
            trigger: "#content-horizontal0",
            start: "top top",
            end: () => "+=" + document.querySelector("#content-horizontal0").scrollHeight,
            scrub: true,
            markers: true
        },
    });
});