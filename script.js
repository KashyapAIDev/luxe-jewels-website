// Loader

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

});

// Scroll To Collection

function scrollToCollection() {

  document.getElementById("collection")
    .scrollIntoView({
      behavior: "smooth"
    });

}

// Buy Buttons

const buttons = document.querySelectorAll(".card-content button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Thank you for shopping with Luxe Jewels!");

  });

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});

// Newsletter

const subscribeBtn =
  document.querySelector(".newsletter-box button");

subscribeBtn.addEventListener("click", () => {

  alert("Subscribed Successfully!");

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});