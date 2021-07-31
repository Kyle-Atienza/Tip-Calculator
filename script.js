var billAmount = 0
var tipPercent = 0
var peopleQty = 1

var billInput = document.querySelector(".bill>.bill-input>input")
var poepleInput = document.querySelector(".people>.people-input>input")
console.log(billInput)

var totalTipAmount = document.querySelector(".tip-amount>.total")
var totalTipPerson = document.querySelector(".total-amount>.total")
function computeTipAmount(bill, percent) {
    var tipAmount = bill * percent
    totalTipAmount.innerHTML = "$" + tipAmount.toFixed(2)
}
function computeTipPerson(bill, percent, people) {
    var tipPerson = (bill * percent) / people
    totalTipPerson.innerHTML = "$" + tipPerson.toFixed(2)
}

function checkValue(value, input) { //checks if the input value is numeric and valid
    if (value == "") {
        input.classList.add("invalid")
        return "Can't be zero"
    } else if (isNaN(value)) {
        input.classList.add("invalid")
        return "Invalid Input"
    } else if (!isNaN(value)) {
        input.classList.remove("invalid")
        return value
    }
}

var tipSelect = document.querySelector(".tip-select>.buttons").children
var custom = document.querySelector(".tip-select>.buttons>.custom")
var tipActive = 0
for (let i = 0; i < tipSelect.length; i++) { //tip selector
    let amount = tipSelect[i]
    if (amount.tagName == 'BUTTON') {
        amount.addEventListener("click", function () {
            tipSelect[tipActive].classList.remove("active")
            tipActive = i
            tipPercent = amount.dataset.amount
            amount.classList.add("active")
            custom.value = ""
            custom.classList.remove("invalid")

            console.log(billAmount)
            console.log(peopleQty)
            console.log(tipPercent)
            computeTipAmount(billAmount, tipPercent)
            computeTipPerson(billAmount, tipPercent, peopleQty)
        })
    }
}
custom.addEventListener("input", function () { //custom tip percent input
    var value = checkValue(custom.value, custom)
    if (value != "Can't be zero" && value != "Invalid Input") {
        tipPercent = "." + value
    }
    if (custom.value == '') {
        custom.classList.remove("invalid")
    }
    for (let i = 0; i < tipSelect.length; i++) {
        tipSelect[tipActive].classList.remove("active")
    }

    console.log(billAmount)
    console.log(peopleQty)
    console.log(tipPercent)
    computeTipAmount(billAmount, tipPercent)
    computeTipPerson(billAmount, tipPercent, peopleQty)

})

var billWarn = document.querySelector(".bill>h3>.warning")
var peopleWarn = document.querySelector(".people>h3>.warning")
function checkInput(value, input, className) {
    var warning = checkValue(value, input)
    if (warning == "Can't be zero" || warning == "Invalid Input") {
        if (className == "people") {
            peopleWarn.innerHTML = warning
        } else if (className == "bill") {
            billWarn.innerHTML = warning
        }
    } else {
        if (className == "people") {
            peopleWarn.innerHTML = ""
            if (value == 0) {
                peopleQty = 1
            } else {
                peopleQty = value
            }
        } else if (className == "bill") {
            billWarn.innerHTML = ""
            billAmount = value
        }
        // console.log(warning)
    }

    console.log(billAmount)
    console.log(peopleQty)
    console.log(tipPercent)
    computeTipAmount(billAmount, tipPercent)
    computeTipPerson(billAmount, tipPercent, peopleQty)

}

function resetInput() {
    billInput.value = ""
    poepleInput.value = ""
    for (let i = 0; i < tipSelect.length; i++) {
        tipSelect[tipActive].classList.remove("active")
    }
    custom.value = ""
    totalTipAmount.innerHTML = "$0.00"
    totalTipPerson.innerHTML = "$0.00"

}
/*

    console.log(billAmount)
    console.log(peopleQty)
    console.log(tipPercent)
*/



//computeTipAmount(100, .15)