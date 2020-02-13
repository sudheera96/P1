function calculateTax(total) {
    var tax = (total * 5.5) / 100;
    document.getElementById("tax").innerHTML = tax;
}
function calculateTip(rate) {
    var total = document.getElementById("total").value;
    var tip = (total * rate) / 100;
    document.getElementById("tip").innerHTML = tip;
}
function calculateGrandtotal() {
    var total = parseFloat(document.getElementById("total").value);
    var tax = parseFloat(document.getElementById("tax").innerHTML);
    var tip = parseFloat(document.getElementById("tip").innerHTML);
    var grandTotal = total + tax + tip;
    document.getElementById("grandTotal").innerHTML = grandTotal;

}