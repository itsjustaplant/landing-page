const submitBtn = document.getElementById("submit-button")
const warningText = document.getElementById("warning-text")
const warningImg = document.getElementById("warning-img")
const input = document.getElementById("input")

function ValidateEmail()
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);


}

submitBtn.addEventListener('click', () => {
    const bool = ValidateEmail()
    if(!bool){
        warningImg.style.opacity = "100%"
        warningText.style.opacity = "100%"
        input.style.border = "1px solid var(--soft-red)"
    } else {
        warningText.style.opacity = "0%"
        warningImg.style.opacity = "0%"
        input.style.border = "1px solid var(--saturated-red)"
    }
})