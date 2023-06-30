const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.getElementsByTagName("img")[0],
  buttons = document.querySelectorAll(".button"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");

const arrImages = [
  "./assets/images/m1.jpeg",
  "./assets/images/m2.jpg",
  "./assets/images/m3.jpg",
  "./assets/images/room2.jpeg",
  "./assets/images/room3.jpeg",
  "./assets/images/room9.jpg",
  "./assets/images/room12.jpg",
];

let imageIndex = 0,
  intervalId;

// Define function to automatic image slider. Change the slide every 3s

const autoSlide = () => {

  intervalId = setInterval(() => slideImage(), 5000);
};
autoSlide();

//A function that updates the carousel display to show the specified image
const slideImage = () => {
  images.src = arrImages[imageIndex];
  imageIndex = imageIndex === arrImages.length - 1 ? 0 : imageIndex + 1;

    if (imageIndex === arrImages.length - 1) {
      imageIndex = 0;
    } 
};

// add eventlistener to wrapper to stop slide on mouseover
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// add eventlistener to wrapper to resume slide on mouseleave
wrapper.addEventListener("mouseleave", autoSlide);


// add the click event listener to update images onclick
nextBtn.addEventListener("click", () => {
  images.src = arrImages[(imageIndex += 1)];
  // implementing the restart when images reaches the last
  if (imageIndex === arrImages.length - 1) {
    imageIndex = 0;
  }
});


prevBtn.addEventListener("click", () => {
    images.src = arrImages[(imageIndex -= 1)];
    if (imageIndex === 0){
        imageIndex=arrImages.length-1
  console.log(imageIndex);

    }
});
