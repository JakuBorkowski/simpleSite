const mainContent = document.querySelector("main");
console.log(mainContent.children);
[...mainContent.children].forEach((element) => {
  console.log(element);
});
const observer = new IntersectionObserver((entry) => {
  entry.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("vis");
    } else {
      entry.target.classList.remove("vis");
    }
  });
});
[...mainContent.children].forEach((element) => {
  observer.observe(element);
});
