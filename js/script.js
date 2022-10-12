let elInput = document.querySelector(".input")
let elDelate = document.querySelector(".btn-delate")
let elText = document.querySelector(".user-text")
let arrey = [];

elInput.addEventListener("input", () => {
  localStorage.setItem("user-text", JSON.stringify(elInput.value))
  elText.textContent = localStorage.setItem("user-text")
});

elDelate.addEventListener("click", () => {
  localStorage.clear();
  elInput.value = '';
  elText.textContent = '';
})