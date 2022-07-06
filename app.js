const menuButton = document.querySelector(".menu_icon");
const closeButton = document.querySelector(".close_icon")

const navCard = document.querySelector(".mobile_nav-card");
const navCardHovers = document.querySelector(".mobile_nav-card p");
const backgroundDim = document.querySelector(".background_dimmer")

const features = document.querySelectorAll(".features");
const featuresList = document.querySelectorAll(".features_list");
const featuresArrowDown = document.querySelectorAll(".features .arrow-down")
const featuresArrowUp = document.querySelectorAll(".features .arrow-up")

const company = document.querySelectorAll(".company");
const companyList = document.querySelectorAll(".company_list");
const companyArrowDown = document.querySelectorAll(".company .arrow-down")
const companyArrowUp = document.querySelectorAll(".company .arrow-up")

menuButton.addEventListener("click", () => {
   navCard.classList.remove("hide");
   backgroundDim.classList.remove("hide");
})

closeButton.addEventListener("click", () => {   
   navCard.classList.add("hide");
   backgroundDim.classList.add("hide");
})

features.forEach((feature) => feature.addEventListener("click", () => {
   featuresList.forEach((x) => x.classList.toggle('hide'));
   featuresArrowDown.forEach((x) => x.classList.toggle('hide'));
   featuresArrowUp.forEach((x) => x.classList.toggle('hide'));
   features.forEach((x) => x.classList.toggle('hovering'));
}))

company.forEach((comp) => comp.addEventListener("click", () => {
   companyList.forEach((x) => x.classList.toggle('hide'));
   companyArrowDown.forEach((x) => x.classList.toggle('hide'));
   companyArrowUp.forEach((x) => x.classList.toggle('hide'));
   company.forEach((x) => x.classList.toggle('hovering'));
}))




// ###...MOUSE EVENTS...###
// mouseenter", () => {
//    featuresList.classList.remove("hide");
//    featuresArrowDown.classList.add("hide");
//    featuresArrowUp.classList.remove("hide");
//    features.classList.add("hovering");
// })

// featuresList.addEventListener("mouseleave", () => {
//    featuresList.classList.add("hide");
//    featuresArrowDown.classList.remove("hide");
//    featuresArrowUp.classList.add("hide");
//    features.classList.remove("hovering");
// })

// company.addEventListener("mouseenter", () => {
//    companyList.classList.remove("hide");
//    companyArrowDown.classList.add("hide");
//    companyArrowUp.classList.remove("hide");
//    company.classList.add("hovering");
// })

// companyList.addEventListener("mouseleave", () => {
//    companyList.classList.add("hide");
//    companyArrowDown.classList.remove("hide")
//    companyArrowUp.classList.add("hide");
//    company.classList.remove("hovering");
// })