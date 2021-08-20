// all id setup 
function productIncreDec(product,price,Increasing) {
    const ProductInput = document.getElementById(product+"-input");

    if (Increasing)
    {
        ProductInput.value = parseInt(ProductInput.value) + 1;
    }
    else if (ProductInput.value > 0)
    {
        ProductInput.value = parseInt(ProductInput.value) - 1;
    }
    productNumber = ProductInput.value;
    let ProductTotal = document.getElementById(product + "-total");
    ProductTotal.innerText = productNumber * price;
    TotalCalculate()
};

function getInputValue(product) {
    let ProductTotal = document.getElementById(product + "-input").value;
    return ProductTotal;
}

function TotalCalculate() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const ProductTotal = phoneTotal + caseTotal;
    const tax = ProductTotal / 10;
    const TotalPrice = ProductTotal + tax;

    // update on the html 
    document.getElementById("Product-total").innerText = ProductTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total-price").innerText = TotalPrice;
}

// event declear 
document.getElementById("phone-plus").addEventListener("click", function () {
    productIncreDec("phone",1219,true)
    
});

document.getElementById("phone-minus").addEventListener("click", function () {
    productIncreDec("phone",1219,false)
});

document.getElementById("case-plus").addEventListener("click", function () {
    productIncreDec("case",59,true)
    
});

document.getElementById("case-minus").addEventListener("click", function () {
    productIncreDec("case",59,false)
});