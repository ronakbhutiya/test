const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
// sticky nav bar
const section_hero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? nav_header.classList.add("sticky")
      : nav_header.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-80px",
    threshold: "0",
  }
);
observer.observe(section_hero);

const arr = [40, 50, 12, 4, 600, 2];
let temp;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
// if (arr[i] > arr[j]) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
