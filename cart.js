
function updateProductNumber(id, sign, totalId) {
    const productInput = document.getElementById(id + "-Num");
    let productNumber = productInput.value;

    if (sign == true) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (sign == false && productNumber > 0) {

        productNumber = parseInt(productNumber) - 1;


    }
    productInput.value = productNumber;
    // update total 
    const total = document.getElementById(totalId);

    if (totalId == "iphoneValue") {
        const totalValue = productNumber * 1219;
        total.innerText = totalValue;
    }
    else if (totalId == "caseValue") {
        const totalValue = productNumber * 59;
        total.innerText = totalValue;

    }

    // calculate totalcal
    calculateTotal();


}

// total cash function 

function getInputValue(id) {
    const productInput = document.getElementById(id + "-Num");

    const productNumber = parseInt(productInput.value);
    return productNumber;



}

function calculateTotal() {
    const phoneTotal = getInputValue("iphone") * 1219;
    const caseTotlal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotlal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update intha html 
    document.getElementById("subtotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;

}




// iPhone 11 Silicone Case - Black quantity 

document.getElementById("case-plus").addEventListener('click', function () {
    const caseInput = updateProductNumber('case', true, "caseValue");




})

document.getElementById("case-minuse").addEventListener('click', function () {
    const caseInput = updateProductNumber('case', false, "caseValue");

})


// iPhone 11 128GB Black quentity
document.getElementById("iphone-minus").addEventListener('click', function () {
    const iphoneNum = updateProductNumber("iphone", false, "iphoneValue")
})
document.getElementById("iphone-plus").addEventListener('click', function () {
    const iphoneNum = updateProductNumber("iphone", true, "iphoneValue");
})

