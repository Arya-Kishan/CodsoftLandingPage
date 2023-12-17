let navTag = document.querySelector(".navTag")
function handleHam() {
    console.log(navTag.style.display);
    navTag.style.display == "flex" ? navTag.style.display = "none" : navTag.style.display = "flex";
}
function handleNav() {
    navTag.style.display ="none";
}

gsap.from(".logobox", {
    y: -100,
})
gsap.from(".hashbox", {
    opactiy: 0,
    y: -100,
})

gsap.from(".pic", {
    scrollTrigger: ".pic",
    y: 100,
    opactiy: 0,
    duration: .5,
})
gsap.from(".section6", {
    scrollTrigger: ".section6",
    y: 100,
    opactiy: 0,
    duration: .5,
})
gsap.from(".voucher1", {
    scrollTrigger: ".voucher1",
    y: 100,
    opactiy: 0,
    duration: .5,
})

gsap.from(".voucher2", {
    scrollTrigger: ".voucher2",
    y: 100,
    opactiy: 0,
    duration: .5,
})
gsap.from(".voucher3", {
    scrollTrigger: ".voucher3",
    y: 100,
    opactiy: 0,
    duration: .5,
})
