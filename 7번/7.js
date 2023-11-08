let count = 0;
let timer = setInterval(function () {
  count++;
  const display = document.querySelector(".display");
  display.innerHTML = count;
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);

// 휴... 10 넘어갈까 봐 조마조마했다;
