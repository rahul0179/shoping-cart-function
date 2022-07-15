
function updateProductNumber(id, sign, totalId) {
    const productInput = document.getElementById(id);
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


}

// iPhone 11 Silicone Case - Black quantity 

document.getElementById("case-plus").addEventListener('click', function () {
    const caseInput = updateProductNumber('caseNum', true, "caseValue");
    console.log(caseInput);



})

document.getElementById("case-minuse").addEventListener('click', function () {
    const caseInput = updateProductNumber('caseNum', false, "caseValue");

})


// iPhone 11 128GB Black quentity
document.getElementById("iphone-minus").addEventListener('click', function () {
    const iphoneNum = updateProductNumber("iphoneNum", false, "iphoneValue")
})
document.getElementById("iphone-plus").addEventListener('click', function () {
    const iphoneNum = updateProductNumber("iphoneNum", true, "iphoneValue");
})


// clear button 
document.getElementById('remove').addEventListener('click', function () {
    console.log("click remove button");
})