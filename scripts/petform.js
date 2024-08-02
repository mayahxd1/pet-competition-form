"use strict";

// Event Listeners
window.addEventListener("load", function() {
    const petInfo = document.forms[0];

    runForm();

    //Event handlers for form elements
    petInfo.elements.weight.oninput = runForm;
    petInfo.elements.days.oninput = runForm;
    petInfo.elements.sing.onchange = runForm;
    petInfo.elements.cute.onchange = runForm;
    petInfo.elements.trick.onchange = runForm;
    
});

// Function to run all other functions
function runForm() {
    kennelSize();
    boardDays();
    totalCost();
    showHide();
}

// Show or hide event fields
function showHide() {
    var field = document.querySelectorAll("fieldset");
    if (document.querySelector("input[name='sing']:checked")) {
        field[0].style.display = "block";
    } else {
        field[0].style.display = "none";
    }
    if (document.querySelector("input[name='cute']:checked")) {
        field[1].style.display = "block";
    } else {
        field[1].style.display = "none";
    }
    if (document.querySelector("input[name='trick']:checked")) {
        field[2].style.display = "block";
    } else {
        field[2].style.display = "none";
    }
}

//Change Kennel Size based on weight
function kennelSize() {
    var petInfo = document.forms[0];
    var weight = parseFloat(petInfo.elements.weight.value);
    var size;
    if (isNaN(weight)) {
        size = "";
    } else if (weight <= 4) {
        size = "mini";
    } else if ((weight > 4) && (weight <= 12)) {
        size = "small";
    } else if ((weight > 12) && (weight <= 50)) {
        size = "medium";
    } else if (weight > 50) {
        size = "large";
    } else {
        size = "";
    }
    petInfo.elements.size.value = size;
}

// Calculate Boarding Fee and Total Cost
function boardDays() {
    var petInfo = document.forms[0];
    var days = petInfo.elements.days.value;
    var boardFee;
    if (isNaN(days) || days === "") {
        days = 0;
        boardFee = 0.00;
    } else {
        days = parseInt(days);
        boardFee = days * 19.99;
    }
    petInfo.elements.boardingFee.value = boardFee.toFixed(2);
    totalCost();
}

// Calculate Registration Fee and Total Cost
function totalCost() {
    var petInfo = document.forms[0];
    var total = 0;
    var regCost = 0;
    var event = 0;
    var bordingCost = petInfo.elements.boardingFee.value;
    if (bordingCost === "") {
        bordingCost = 0;
    } else {
        bordingCost = parseFloat(bordingCost);
    }
    if (document.querySelector("input[name='sing']:checked")) {
        event++;
    }
    if (document.querySelector("input[name='cute']:checked")) {
        event++;
    }
    if (document.querySelector("input[name='trick']:checked")) {
        event++;
    }
    regCost = event * 120;
    total = regCost + bordingCost;
    petInfo.elements.boardingCost.value = bordingCost.toFixed(2);
    petInfo.elements.registrationCost.value = regCost.toFixed(2);
    petInfo.elements.totalCost.value = total.toFixed(2);
}

