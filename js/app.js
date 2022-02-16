function totalCost() {
    let bestPrice = document.getElementById('best-price');
    let exMemoryPrice = document.getElementById('ex-memory-price');
    let exStoragePrice = document.getElementById('ex-storage-price');
    let deliveryPrice = document.getElementById('delivery-price');

    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(exMemoryPrice.innerText) + parseFloat(exStoragePrice.innerText) + parseFloat(deliveryPrice.innerText);

    document.getElementById('grand-total-price').innerText = totalPrice.innerText;
}

document.getElementById('memory-32-btn').addEventListener('click', function () {
    console.log('clicked')
    let exMemoryPrice = document.getElementById('ex-memory-price');
    exMemoryPrice.innerText = '00';
    this.disabled = true;
    totalCost();
    const memoryBtn2 = document.getElementById('memory-64-btn');
    memoryBtn2.disabled = false;
});
document.getElementById('memory-64-btn').addEventListener('click', function () {
    let exMemoryPrice = document.getElementById('ex-memory-price');
    exMemoryPrice.innerText = 400;
    this.disabled = true;
    totalCost();
    const memoryBtn1 = document.getElementById('memory-32-btn');
    memoryBtn1.disabled = false;
});


document.getElementById('storage-1-btn').addEventListener('click', function () {
    let exStoragePrice = document.getElementById('ex-storage-price');
    exStoragePrice.innerText = '00';
    this.disabled = true;
    totalCost();
    const storageBtn2 = document.getElementById('storage-2-btn');
    storageBtn2.disabled = false;
    const storageBtn3 = document.getElementById('storage-4-btn');
    storageBtn3.disabled = false;
});
document.getElementById('storage-2-btn').addEventListener('click', function () {
    let exStoragePrice = document.getElementById('ex-storage-price');
    exStoragePrice.innerText = 1000;
    this.disabled = true;
    totalCost();
    const storageBtn1 = document.getElementById('storage-1-btn');
    storageBtn1.disabled = false;
    const storageBtn3 = document.getElementById('storage-4-btn');
    storageBtn3.disabled = false;
});
document.getElementById('storage-4-btn').addEventListener('click', function () {
    let exStoragePrice = document.getElementById('ex-storage-price');
    exStoragePrice.innerText = 2200;
    this.disabled = true;
    totalCost();
    const storageBtn1 = document.getElementById('storage-1-btn');
    storageBtn1.disabled = false;
    const storageBtn2 = document.getElementById('storage-2-btn');
    storageBtn2.disabled = false;
});

document.getElementById('free-delivery-btn').addEventListener('click', function () {
    let deliveryPrice = document.getElementById('delivery-price');
    deliveryPrice.innerText = '00';
    this.disabled = true;
    totalCost();
    const deliveryBtn2 = document.getElementById('paid-delivery-btn');
    deliveryBtn2.disabled = false;
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    let deliveryPrice = document.getElementById('delivery-price');
    deliveryPrice.innerText = 50;
    this.disabled = true;
    totalCost();
    const deliveryBtn2 = document.getElementById('free-delivery-btn');
    deliveryBtn2.disabled = false;
});

document.getElementById('promo-apply-btn').addEventListener('click', function () {
    let promoCode = document.getElementById('promo-apply-input');
    let grandTotalPrice = document.getElementById('grand-total-price');

    if (promoCode.value == 'bappy') {
        grandTotalPrice.innerText = parseFloat(grandTotalPrice.innerText) * 0.9;
        promoCode.value = '';
        this.disabled = true;
    }
    else {
        promoCode.value = '';
    }
})

