var sun = document.getElementById("sun");
const body = document.querySelector("body");
const p = document.querySelector("div.mural > p");
const logintxt = document.getElementById("logintxt");
const noPostsMessage = document.getElementById("noPostsMessage");
const npet = document.getElementById("npet");
const currentPage = document.getElementById("currentPage");
const pictureInput = document.getElementById("picture");
var transitionTime = 0.6;

document.addEventListener("DOMContentLoaded", function () {
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");

  if (darkModeEnabled === "true") {
    transitionTime = 0;
    enableDarkMode();
    sun.classList.toggle("night");
    
  }
});

sun.onclick = function () {
  sun.classList.toggle("night");
  var darkModeEnabled = localStorage.getItem("darkModeEnabled");

  if (darkModeEnabled === "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

function enableDarkMode() {
  const h2Erro = document.getElementById("h2Erro");
  const pErro = document.getElementById("pErro");
  sun.classList.add("darkToggle");
  body.style.background = "#282828";
  body.style.transition = transitionTime + "s";
  localStorage.setItem("darkModeEnabled", "true");
  if (p) {
    p.style.color = "#ffffff";
  }
  if(pictureInput){
    pictureInput.style.transition = transitionTime + "s";
    pictureInput.style.backgroundColor = "#353535";
    pictureInput.style.borderColor = "#fff";
  }
  if (logintxt) {
    logintxt.style.color = "#ffffff";
  }
  if (currentPage) {
    currentPage.style.color = "#ffffff";
  }
  if (npet) {
    npet.style.color = "#ffffff";
  }
  if (h2Erro) {
    h2Erro.style.color = "#ffffff";
  }
  if (pErro) {
    pErro.style.color = "#ffffff";
  }
  if (noPostsMessage) {
    noPostsMessage.style.color = "#ffffff";
  }
  transitionTime = 0.6;
}

function disableDarkMode() {
  const h2Erro = document.getElementById("h2Erro");
  const pErro = document.getElementById("pErro");
  sun.classList.remove("darkToggle");
  body.style.background = "#ffffff";
  body.style.transition = transitionTime + "s";
  localStorage.setItem("darkModeEnabled", "false");
  if (p) {
    p.style.color = "#282828";
  }
  if(pictureInput){
    pictureInput.style.transition = transitionTime + "s";
    pictureInput.style.backgroundColor = "#ddd";
    pictureInput.style.borderColor = "#9e9e9e";
  }
  if (npet) {
    npet.style.color = "#282828";
  }
  if (h2Erro) {
    h2Erro.style.color = "#282828";
  }
  if (pErro) {
    pErro.style.color = "#282828";
  }
  if (logintxt) {
    logintxt.style.color = "#282828";
  }
  if (currentPage) {
    currentPage.style.color = "#282828";
  }
  if (noPostsMessage) {
    noPostsMessage.style.color = "#282828";
  }
  transitionTime = 0.6;
}
