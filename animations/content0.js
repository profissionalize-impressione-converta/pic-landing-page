document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.to(".content0-box-size", {
        scrollTrigger: {
            trigger: ".content0-box-size",
            start: "top",
            end: "top -2000",
            scrub: true
        },
        width: "0vw"
    })
});