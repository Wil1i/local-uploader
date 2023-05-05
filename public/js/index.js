var uploaderInput = document.getElementById("uploaderInput");
var uploadBtn = document.getElementById("uploadBtn");
var submitBtn = document.getElementById("uploadSubmit");
var files = document.querySelectorAll(".title")

uploadBtn.addEventListener("click", () => {
  uploaderInput.click();
  uploadBtn.style.display = "none";
  submitBtn.style.display = "flex";
});

submitBtn.addEventListener("click", () => {
  uploadBtn.style.display = "flex";
  submitBtn.style.display = "none";
});

for(let i = 0; i < files.length; i++){
  files[i].addEventListener("dblclick", async () => {
    const newName = prompt("Enter new name: ")
    
    if(!newName) return;

    await axios.post(`/rename?id=${files[i].id}&name=${newName}`)
    
    location.reload()
  })
}