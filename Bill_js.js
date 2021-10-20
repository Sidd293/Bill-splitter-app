var split_button = document.querySelector(".action-button");
split_button.addEventListener("click", (e) => {
    e.preventDefault();
    splitAmount()
});

var reset_button = document.querySelector("#reset-button");
reset_button.addEventListener("click", (e) => {
    e.preventDefault();
    resetAmount()
});

function splitAmount() {
    const amount = parseInt(document.querySelector("#amount").value);
    const persons = parseInt(document.querySelector("#persons").value);
    const tip_amount = parseInt(document.querySelector("#tip-amount").value);
    const amount_each = amount / persons + (tip_amount > 0 ? tip_amount : 0);
    if (amount_each > 0) {
        console.log(amount_each);
        const splitAmount = document.querySelector("#split-amount");
        splitAmount.innerHTML = "₹ " + amount_each.toFixed(2) + " each";
    
        splitAmount.style.display = "block";
        reset_button.style.display = "block";
    } else {
        alert("Please fill correct values");
    }  
}

function resetAmount() {
    document.querySelector('form').reset();
    const splitAmount = document.querySelector("#split-amount");
    splitAmount.style.display = "none";
    reset_button.style.display = "none";
}