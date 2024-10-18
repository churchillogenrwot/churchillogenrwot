function calculateTax(income) {
    const taxRate = 0.15; 
    let taxPayable = income * taxRate;
    return taxPayable;
}
let income = 50000; 
console.log("Tax payable: " + calculateTax(income) + " NGN");
