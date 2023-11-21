let billAmount = 0;
let tipPercentage = 0;
let number = 1;
function calculateTip(percentage) {
    billAmount = parseFloat(document.getElementById('billAmount').value);
    number = parseFloat(document.getElementById('numberOfPeople').value);
    tipPercentage = percentage;
    updateResult();
}

function calculateTotal() {
    updateResult();


    function updateResult() {
        let tipAmount = (billAmount * tipPercentage) / 100;
        let totalPerPerson = (billAmount + ((billAmount * tipPercentage) / 100)) / number;

        document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
        document.getElementById('totalPerPerson').innerText = totalPerPerson.toFixed(2);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let buttonElemanlari = document.querySelectorAll("button");
    let oncekiRenk;
    buttonElemanlari.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.style.backgroundColor === "green") {
                button.style.backgroundColor = button.dataset.originalColor;
                oncekiRenk = null;
            } else {
                button.dataset.originalColor = button.style.backgroundColor;
                button.style.backgroundColor = "green";
                if (oncekiRenk && oncekiRenk !== button) {
                    oncekiRenk.style.backgroundColor = oncekiRenk.dataset.originalColor;
                }
                oncekiRenk = button;
            }
        });
    });
});