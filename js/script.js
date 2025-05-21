let mobileNumber = document.getElementById("mobileNumber")
let pinNumber = document.getElementById("pinNumber")
let loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", () => {
    let numberValue = mobileNumber.value
    let pinValue = pinNumber.value
    if (numberValue == "01711989790" && pinValue == "2000") {
        window.location.href = "./home.html"
    }
    else if (numberValue == "" && pinValue == "") {
        alert("Please fill the input field.")
    }
    else {
        // alert("Mile Nai")
        mobileNumber.value = ""
        pinNumber.value = ""
    }
})