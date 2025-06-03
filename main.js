document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.to(".box-size", {
        scrollTrigger: {
            trigger: ".box-size",
            start: "top",
            end: "top -2000",
            scrub: true,
            markers: true
        },
        width: "0vw"
    })
});