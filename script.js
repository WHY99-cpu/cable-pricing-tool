
function calculate() {

    let cableType = document.getElementById("cableType").value;
    let length = parseFloat(document.getElementById("length").value);
    let connA = document.getElementById("connA").value;
    let connB = document.getElementById("connB").value;
    let qty = parseInt(document.getElementById("qty").value);

    let basePrice = (cableType === "coax") ? 10 : 20;
    let connectorPriceA = (connA === "sma") ? 5 : 8;
    let connectorPriceB = (connB === "sma") ? 5 : 8;

    let lengthCost = length * 2;

    let unitPrice = basePrice + connectorPriceA + connectorPriceB + lengthCost;
    let totalPrice = unitPrice * qty;

    document.getElementById("result").innerText =
        "Unit Price: $" + unitPrice.toFixed(2) +
        " | Total Price: $" + totalPrice.toFixed(2);
}
