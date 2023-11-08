const numberElements = document.querySelectorAll(".number");

for (let i = 0; i < numberElements.length; i++) {
  const currentNumber = parseInt(numberElements[i].textContent);
  const updatedNumber = currentNumber + 10;
  numberElements[i].textContent = updatedNumber;
}
