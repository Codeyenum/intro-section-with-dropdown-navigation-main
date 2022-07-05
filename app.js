const menuButton = document.querySelector(".menu_icon");
const closeButton = document.querySelector(".close_icon")
const navCard = document.querySelector(".mobile_nav-card");
const navCardLinks = document.querySelector(".mobile_nav-card a");
const backgroundDim = document.querySelector(".background_dimmer")
const features = document.querySelector(".features");
const featuresList = document.querySelector(".features_list");
const featuresArrowDown = document.querySelector(".features .arrow-down")
const featuresArrowUp = document.querySelector(".features .arrow-up")

menuButton.addEventListener("click", () => {
   navCard.classList.remove("hide");
   backgroundDim.classList.remove("hide");
})

closeButton.addEventListener("click", () => {
   navCard.classList.add("hide");
   backgroundDim.classList.add("hide");
})

features.addEventListener("mouseover", () => {
   featuresList.classList.toggle("hide");
   featuresArrowDown.classList.toggle("hide");
   featuresArrowUp.classList.toggle("hide");
   navCard.style.gap = "0";
   navCardLinks.style.margin = "2rem 0"
})

// features.addEventListener("mouseout", () => {
//    featuresList.classList.toggle("hide");
//    featuresArrowDown.classList.toggle("hide")
//    featuresArrowUp.classList.toggle("hide")
// })

featuresList.addEventListener("mouseenter", () => {
   featuresList.classList.toggle("hide");
   featuresArrowDown.classList.toggle("hide")
   featuresArrowUp.classList.toggle("hide")
   // navCard.style.gap = "0";
})

featuresList.addEventListener("mouseout", () => {
   featuresList.classList.toggle("hide");
   featuresArrowDown.classList.toggle("hide")
   featuresArrowUp.classList.toggle("hide")
   navCard.style.gap = "2rem";   
})