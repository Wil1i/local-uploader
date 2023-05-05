var uploaderInput = document.getElementById("uploaderInput");
var uploadBtn = document.getElementById("uploadBtn");
var submitBtn = document.getElementById("uploadSubmit");

uploadBtn.addEventListener("click", () => {
  uploaderInput.click();
  uploadBtn.style.display = "none";
  submitBtn.style.display = "flex";
});

submitBtn.addEventListener("click", () => {
  uploadBtn.style.display = "flex";
  submitBtn.style.display = "none";
});
