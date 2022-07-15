document.getElementById("case-plus").addEventListener('click', function () {
    const caseInput = document.getElementById('caseNum');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;



})

document.getElementById("case-minuse").addEventListener('click', function () {
    const caseInput = document.getElementById('caseNum');
    const caseNumberText = caseInput.value;
    const caseNumber = parseInt(caseNumberText)
    if (caseNumber > 1) {
        caseInput.value = caseNumber - 1;
    }
})