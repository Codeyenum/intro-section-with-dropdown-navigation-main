const menuButton = document.querySelector(".menu_icon");
const closeButton = document.querySelector(".close_icon")
const navCard = document.querySelector(".mobile_nav-card");
const backgroundDim = document.querySelector(".background_dimmer")

menuButton.addEventListener("click", () => {
   navCard.classList.remove("hide");
   backgroundDim.classList.remove("hide");
})

closeButton.addEventListener("click", () => {
   navCard.classList.add("hide");
   backgroundDim.classList.add("hide");
})