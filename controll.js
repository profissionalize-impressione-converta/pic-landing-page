const sections = Array.from(document.getElementsByTagName('section'));

window.addEventListener('scroll', () => {
    section1(sections[0])
});

const getScrollPercentForDiv = (div) => {
    const scrollTop = window.scrollY;
    const divTop = div.offsetTop;
    const divHeight = div.offsetHeight;
    const divHeightAdjusted = divHeight - window.innerHeight;

    const distanceScrolledInDiv = scrollTop - divTop;
    const percent = (distanceScrolledInDiv / divHeightAdjusted) * 100;

    return Math.max(0, Math.min(100, percent));
}


const section1 = (section) => {
    const scrollPercent = getScrollPercentForDiv(section);

    console.log(`Scroll da seção: ${scrollPercent}%`);

    const div1 = document.getElementsByClassName("content0-side-bar-size")[0];

    const initial = 0;
    const final = 60;

    if (scrollPercent >= final) {
        div1.style.width = `0%`;
    } else if (scrollPercent <= initial) {
        div1.style.width = `100vw`;
    } else {
        const percentInRange = ((final - scrollPercent) * 100) / (final - initial);
        div1.style.width = `${percentInRange}vw`;
    }
}
