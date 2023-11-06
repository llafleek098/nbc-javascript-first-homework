const prm = document.querySelector(".btn");

prm.addEventListener("click", function () {
  const input = prompt("원하는 내용을 입력하세요: ");
});

if (input !== null) {
  alert("입력한 내용:" + input);
}
