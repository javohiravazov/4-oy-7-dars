const elInput1 = document.querySelector(".input1");
const elInput2 = document.querySelector(".input2");
const elInput3 = document.querySelector(".input3");
const elBtn = document.querySelector(".btn");
const elClear = document.querySelector(".clear");
const result = document.querySelector(".result");

elBtn.addEventListener("click", function () {
  const newCard = document.createElement("div");
  const newTitle = document.createElement("h4");
  const newParaghraph = document.createElement("p");
  const newNumber = document.createElement("p");

  newTitle.style.paddingTop = "7px";
  newParaghraph.style.paddingTop = "10px";
  newParaghraph.style.opacity = "0.8";
  newNumber.style.color = "#008efd";
  newNumber.style.paddingTop = "10px";

  newCard.className = "contacts";
  newTitle.textContent = elInput1.value;
  newParaghraph.textContent = elInput2.value;
  newNumber.textContent = Number(elInput3.value);
  newCard.appendChild(newTitle);
  newCard.appendChild(newParaghraph);
  newCard.appendChild(newNumber);
  result.appendChild(newCard);
});

function clear() {
  result.innerHTML = "";
  elInput1.value = "";
  elInput2.value = "";
  elInput3.value = "";
  contacts.value = "";
}
elClear.addEventListener("click", function () {
  clear();
});
