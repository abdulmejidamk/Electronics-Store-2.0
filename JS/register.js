const reg = document.getElementById("reg");

const register = document.getElementById("to-show");

reg.addEventListener("click", showCard);

function showCard(e) {
  register.classList.remove("hidden");
  e.preventDefault();
}
