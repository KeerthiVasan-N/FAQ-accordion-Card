let ar = document.querySelectorAll(".flex");
// arr = document.querySelectorAll(".vi img");
// console.log(arr );
// ar = [...ar, ...arr];
ar.forEach((e) => {
  e.addEventListener("click", show);
});
function show(e) {
  console.log(e.target);
  e.target.closest(".content").classList.toggle("show");
}
