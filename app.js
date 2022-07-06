const menuButton = document.querySelector(".menu_icon");
const closeButton = document.querySelector(".close_icon")

const navCard = document.querySelector(".mobile_nav-card");
const navCardLinks = document.querySelector(".mobile_nav-card a");
const backgroundDim = document.querySelector(".background_dimmer")

const features = document.querySelector(".features");
const featuresList = document.querySelector(".features_list");
const featuresArrowDown = document.querySelector(".features .arrow-down")
const featuresArrowUp = document.querySelector(".features .arrow-up")

const company = document.querySelector(".company");
const companyList = document.querySelector(".company_list");
const companyArrowDown = document.querySelector(".company .arrow-down")
const companyArrowUp = document.querySelector(".company .arrow-up")

menuButton.addEventListener("click", () => {
   navCard.classList.remove("hide");
   backgroundDim.classList.remove("hide");
})

closeButton.addEventListener("click", () => {
   navCard.classList.add("hide");
   backgroundDim.classList.add("hide");
})

features.addEventListener("mouseenter", () => {
   featuresList.classList.remove("hide");
   featuresArrowDown.classList.add("hide");
   featuresArrowUp.classList.remove("hide");
   features.style.marginBottom = "0"
   navCard.style.gap = "1rem";
   navCardLinks.style.margin = "1rem 0"
})

featuresList.addEventListener("mouseleave", () => {
   featuresList.classList.add("hide");
   featuresArrowDown.classList.remove("hide")
   featuresArrowUp.classList.add("hide")
   features.style.marginBottom = "1rem"
   navCard.style.gap = "1rem";
})

company.addEventListener("mouseenter", () => {
   companyList.classList.remove("hide");
   companyArrowDown.classList.add("hide");
   companyArrowUp.classList.remove("hide");
   navCard.style.gap = "1.5rem";
})

companyList.addEventListener("mouseleave", () => {
   companyList.classList.add("hide");
   companyArrowDown.classList.remove("hide")
   companyArrowUp.classList.add("hide")
   company.style.marginBottom = "0"
   navCard.style.gap = "1.5rem";
})
