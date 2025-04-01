const input = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value.trim() || "Anonymous";
});
