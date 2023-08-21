let total = 0
function displayValues(target) {
    const productElement = target.querySelector('.card-body h2');
    const priceElement = target.querySelector('.card-body p span');
    const price =parseFloat(priceElement.innerText); 
    const product = productElement.innerText;
    const itemsList = document.getElementById('items'); 
    const counting = itemsList.childElementCount;
    const p = document.createElement('p');
    p.innerText = product
    p.classList.add('my-3');
    const space = "-"
    p.innerHTML = `${counting+1} ${space} ${product}`
    itemsList.appendChild(p);
    
    total = parseFloat(total) ;
    total += price;
   
     document.getElementById('total-price').innerText = total.toFixed(2);
     document.getElementById('grand-total').innerText = total.toFixed(2);
   
    const btnApply = document.getElementById('applyBtn'); 
    const btnPurchase = document.getElementById('purchase'); 
    if(total > 0){
        purchase.removeAttribute('disabled');
    } 
    else {
        btnApply.setAttribute('disabled','true');
    }
    
    if (total >= 200) {
        btnApply.removeAttribute('disabled');
    }
    else {
        btnApply.setAttribute('disabled','true');
    }
    btnApply.addEventListener('click',function(){
    const couponInput = document.getElementById('couponCode');
    const value = couponInput.value;
    if(value === 'SELL200'){
        let discount = 20;
        const discountAmount = total *(parseFloat(discount)/100);
        const grandTotal = total - discountAmount;

        document.getElementById('Discount').innerText = discountAmount.toFixed(2);
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2);



    }
    

    })
    btnPurchase.addEventListener('click', function() {
        window.location.reload();
    });

    
}




