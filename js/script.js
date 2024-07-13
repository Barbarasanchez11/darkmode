const body= document.body
const slice=document.getElementById("slice")
const cricle=document.getElementById("circle")
const movetext=document.getElementById("movetext")

slice.addEventListener("click", () => {
    cricle.classList.toggle("nigth")
    body.classList.toggle("dark")
    movetext.classList.toggle("movetext")
})