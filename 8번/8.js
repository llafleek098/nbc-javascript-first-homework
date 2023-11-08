const upbtn = document.querySelectorAll(".up-button");

window.addEventListener("scroll", () => {
  console.log({ scrollY });
});

if (scrollY > 100) {
  upbtn.classList.add("show");
} else {
  upbtn.classList.remove("show");
}

upbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
