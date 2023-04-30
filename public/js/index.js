var uploaderInput = document.getElementById("uploaderInput");
var uploadBtn = document.getElementById("uploadBtn");
var submitBtn = document.getElementById("uploadSubmit");

uploadBtn.addEventListener("click", () => {
  uploaderInput.click();
  uploadBtn.style.display = "none";
  submitBtn.style.display = "flex";
});

submitBtn.addEventListener("click", () => {
  submitBtn.disabled = true;
  submitBtn.innerHTML = "در حال آپلود...";
});
