function calculate() {

    // 1. Read user inputs
    let cableType = document.getElementById("cableType").value;
    let length = parseFloat(document.getElementById("length").value);
    let connA = document.getElementById("connA").value;
    let connB = document.getElementById("connB").value;
    let qty = parseInt(document.getElementById("qty").value);

    // 2. Define pricing rules
    let basePrice = 0;

    if (cableType === "coax") {
        basePrice = 10;
    } else if (cableType === "fiber") {
        basePrice = 20;
    }

    let connectorPriceA = (connA === "sma") ? 5 : 8;
    let connectorPriceB = (connB === "sma") ? 5 : 8;

    let lengthCost = length * 2;

    // 3. Calculate pricing
    let unitPrice = basePrice + connectorPriceA + connectorPriceB + lengthCost;

    // Volume discount example
    if (qty >= 100) {
        unitPrice = unitPrice * 0.9;  // 10% discount
    }

    let totalPrice = unitPrice * qty;

    // 4. Display result
    document.getElementById("result").innerText =
        "Unit Price: $" + unitPrice.toFixed(2) +
        " | Total Price: $" + totalPrice.toFixed(2);
}
