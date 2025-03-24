function updatePrice() {
    let ticketPrice = 100; 
    let quantity = document.getElementById("quantity").value;
    let totalPrice = ticketPrice * quantity;
    document.getElementById("total-price").innerText = totalPrice;
}
body {
    font-family: Arial, sans-serif;
    background-color: #1a1a1a;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


.shop-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
    max-width: 1000px;
    position: relative;
}


.products-wrapper {
    overflow: hidden;
    width: 100%;
}


.products {
    display: flex;
    gap: 15px;
    transition: transform 0.5s ease-in-out;
}


.product {
    flex: 0 0 250px; 
    background: #2c2c2c;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}


.product img {
    width: 100%;
    border-radius: 5px;
}


.price {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

.cart-btn {
    background: #ffcc00;
    border: none;
    padding: 8px;
    width: 100%;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease;
}

.cart-btn:hover {
    background: #ffaa00;
}


.prev-btn, .next-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;
}

.prev-btn:hover, .next-btn:hover {
    background: rgba(255, 255, 255, 0.5);
}