const images = [
  "/TravelWebsite/images/photo-1503220317375-aaad61436b1b.avif",
  "/TravelWebsite/images/photo-1539635278303-d4002c07eae3.avif",
  "/TravelWebsite/images/photo-1530789253388-582c481c54b0.avif",
  "/TravelWebsite/images/photo-1503457574462-bd27054394c1.avif",
  "/TravelWebsite/images/photo-5.avif",
  "/TravelWebsite/images/photo-6.avif",
];

let currentIndex = 0;

function changeBackground() {
  const header = document.querySelector(".header");
  if (header) {
    currentIndex = (currentIndex + 1) % images.length;
    header.style.backgroundImage = `url('${images[currentIndex]}')`;
  } else {
    console.error("Header element not found");
  }
}

setInterval(changeBackground, 4000); // Change background every 5 seconds

// document.querySelectorAll(".tilt-wrapper").forEach((wrapper) => {
//   wrapper.addEventListener("mousemove", (e) => {
//     const content = wrapper.querySelector(".content");
//     const rect = wrapper.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const tiltX = (y / rect.height - 1) * 20; // Adjust the multiplier for more or less tilt
//     const tiltY = (x / rect.width - 1) * -20; // Adjust the multiplier for more or less tilt
//     content.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
//   });

//   wrapper.addEventListener("mouseleave", () => {
//     const content = wrapper.querySelector(".content");
//     content.style.transform = `rotateX(0deg) rotateY(0deg)`;
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector(".header");
//   header.style.backgroundImage = "url('image1.jpg')";
// });

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".stacked-image");
  const container = document.querySelector(".stacked-image-container");

  images.forEach((image) => {
    const randomX = Math.random() * 20 - 10; // random value between -10 and 10
    const randomY = Math.random() * 30 - 10; // random value between -10 and 10
    const randomRotate = Math.random() * 40 - 25; // random rotation between -15 and 15 degrees

    image.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
  });

  // Add the spread class to the container after a short delay to allow initial rendering
  setTimeout(() => {
    container.classList.add("spread");
  }, 3000); // Adjust delay as needed
});
