// Catching elements of the DOM
const wrapper = document.querySelector('.wrapper')
const carousel = document.querySelector('.carousel')
const images = document.getElementsByTagName('mg')[0]
const buttons = document.querySelectorAll('.button')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

  // defining an array of images
const arrImages = [
  './assets/images/m1.jpeg',
  './assets/images/m2.jpg',
  './assets/images/m3.jpg',
  './assets/images/room2.jpeg',
  './assets/images/room3.jpeg',
  './assets/images/room9.jpg',
  './assets/images/room12.jpg'
]

let imageIndex = 0
let intervalId

// Define function to automatic image slider. Change the slide every 5s

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(), 5000)
}
autoSlide()

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  images.src = arrImages[imageIndex]
  imageIndex = imageIndex === arrImages.length - 1 ? 0 : imageIndex + 1
  if (imageIndex === arrImages.length - 1) {
    imageIndex = 0;
  } 
}

// add eventlistener to wrapper to stop slide on mouseover
wrapper.addEventListener("mouseover", () => clearInterval(intervalId))
// add eventlistener to wrapper to resume slide on mouseleave
wrapper.addEventListener("mouseleave", autoSlide)

// add the click event listener to update images onclick
nextBtn.addEventListener("click", () => {
  images.src = arrImages[(imageIndex += 1)]
  // implementing the restart when images reaches the last
  if (imageIndex === arrImages.length - 1) {
    imageIndex = 0
  }
})

prevBtn.addEventListener("click", () => {
  images.src = arrImages[(imageIndex -= 1)];
  if (imageIndex === 0){
    imageIndex=arrImages.length - 1
  }
})
