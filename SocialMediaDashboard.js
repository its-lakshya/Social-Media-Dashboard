let circle = document.querySelector(".circle");
let container = document.querySelector(".container");
let body = document.querySelector(".body");
let mainheading = document.querySelector(".mainheading");
let facebook = document.querySelector(".facebook");
let twitter = document.querySelector(".twitter");
let instagram = document.querySelector(".instagram");
let youtube = document.querySelector(".youtube");
let small1 = document.querySelector(".small1");
let small2 = document.querySelector(".small2");
let small3 = document.querySelector(".small3");
let small4 = document.querySelector(".small4");
let small5 = document.querySelector(".small5");
let small6 = document.querySelector(".small6");
let small7 = document.querySelector(".small7");
let small8 = document.querySelector(".small8");
let overview = document.querySelector(".overview");

let toggleanimation = () => {
  circle.classList.toggle("circleanimation");
  body.classList.toggle("darkmode");
  facebook.classList.toggle("cardsdarkmode");
  twitter.classList.toggle("cardsdarkmode");
  instagram.classList.toggle("cardsdarkmode");
  youtube.classList.toggle("cardsdarkmode");
  small1.classList.toggle("smalldarkmode");
  small2.classList.toggle("smalldarkmode");
  small3.classList.toggle("smalldarkmode");
  small4.classList.toggle("smalldarkmode");
  small5.classList.toggle("smalldarkmode");
  small6.classList.toggle("smalldarkmode");
  small7.classList.toggle("smalldarkmode");
  small8.classList.toggle("smalldarkmode");
  overview.classList.toggle("overviewdarkmode");
  // alert("hello")
};

let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", toggleanimation);
