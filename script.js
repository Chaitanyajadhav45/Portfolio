let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let submitLink = document.querySelector("#submitLink");

let subject = "";
let description = "";

input.addEventListener("input", (e) => {
  subject = e.target.value;
});

textarea.addEventListener("input", (e) => {
  description = e.target.value;
});

submitLink.addEventListener("click", (e) => {
  let mailtoLink = `mailto:chaitanyajadhav715@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(description)}`;
  submitLink.href = mailtoLink;
});
