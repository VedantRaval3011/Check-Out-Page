
function validateForm() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let num = document.getElementById("Phone").value;
    let emailID = document.getElementById("E-mail").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");


    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (address == null || address == "") {
        alert("Address can't be blank");
        return false;
    }
    else if (city == null || city == "") {
        alert("City can't be blank");
        return false;
    }
    else if (isNaN(num)) {
        alert("Enter Numeric value only");
        return false;
    }
    else if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        return false;
    }
    else {
        alert("Form validation succeeded")
        return true;
    }

}

const ButtonNumberOne = document.getElementById("increment-1");
const ButtonNumberTwo = document.getElementById("increment-2");
const ButtonNumberThree = document.getElementById("decrement-1");
const ButtonNumberFour = document.getElementById("decrement-2");
const ResOne = document.getElementById("result-1");
const ResTwo = document.getElementById("result-2");

ButtonNumberOne.addEventListener("click", () => {
    ResOne.textContent++;
});

ButtonNumberTwo.addEventListener("click", () => {
    ResTwo.textContent++;
})

ButtonNumberThree.addEventListener("click", () => {
    ResOne.textContent--;
})

ButtonNumberFour.addEventListener("click", () => {
    ResTwo.textContent--;
})





