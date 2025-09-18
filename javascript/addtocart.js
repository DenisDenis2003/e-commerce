 const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });


// Get cart from localStorage
const cartContainer = document.getElementById('cartContainer');
const totalCostEl = document.querySelector(".totalcost span:last-child");
const cartCountEl = document.getElementById("cart-count");

// Render function to update cart display
function renderProducts() {
  const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML = ''; // Clear existing content

  if (updatedCart.length === 0) {
    cartContainer.innerHTML = `<div class="empty-cart">Your cart is empty 🛍️</div>`;
    totalCostEl.textContent = "0";
    cartCountEl.textContent = "0";
  } else {
    let total = 0;
    updatedCart.forEach((item, index) => {
      if (!item.quantity) item.quantity = 1; // default quantity

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-price">${item.price}</div>
          <div class="item-actions">
            <span>Quantity : </span>
            <button class="decre" data-id="${index}" onclick="rem(${index})">➖</button>
            <span class="qty">${item.quantity}</span>
            <button class="incre" data-id="${index}">➕</button>
            <button type="button" class="deletebtn" data-id="${index}">🗑️ Delete</button>
          </div>
        </div>
      `;
      cartContainer.appendChild(itemDiv);

      // update total
      let price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      total += price * item.quantity;
    });

    totalCostEl.textContent = total.toFixed(2);
    cartCountEl.textContent = updatedCart.length;

    // Add event listeners for delete
    document.querySelectorAll('.deletebtn').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        deleteItem(id);
      });
    });

    // Add event listeners for increment
    document.querySelectorAll('.incre').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        updateQuantity(id, 1);
      });
    });

    // Add event listeners for decrement
    document.querySelectorAll('.decre').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        updateQuantity(id, -1);
      });
    });
  }
}

// Update quantity
function updateQuantity(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[id]) {
    cart[id].quantity = (cart[id].quantity || 1) + change;
    if (cart[id].quantity < 1) cart[id].quantity = 1; // prevent 0
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderProducts();
}

// Delete function
function deleteItem(id) {
  let confirmDelete = confirm("Do you want to delete this item?");
  if (confirmDelete) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let updatedCart = cart.filter((_, index) => index != id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Your product is deleted");
    renderProducts();
  } else {
    alert("Thank you, your product is safe.");
  }
}


renderProducts();

// Buy Now button
const buyNowBtn = document.querySelector(".buy-now-btn");
let total = document.querySelector("#total").innerHTML

buyNowBtn.addEventListener("click", () => {
  const totalCost = document.querySelector(".totalcost span:last-child").textContent;
  if(totalCost==0){
    alert("Please add Products")
  }
 
   
 else  {
  let confirmBuy = confirm(`Do you want to buy now?\nTotal Cost:$${totalCost}`);
  
if(confirmBuy){
  alert("✅ Thank you for your purchase!");
  localStorage.removeItem("cart")
    window.location.href = "home.html"
}
    else {
    alert("Purchase cancelled.");
  }
    // you can clear cart if you want:
    // localStorage.removeItem("cart");
    // renderProducts();
  } 
});


// Logout
let lgbtn = document.querySelectorAll(".logout");
lgbtn.forEach(ele => {
  ele.addEventListener("click", () => {
    let logoutCheck = confirm("Do you want to logout ?");
    setTimeout(() => {
      if (logoutCheck == 1) {
        window.location.href = "index.html";
      }
    }, 1000);
  });
});


function rem(index){
  let qtyEl = document.querySelectorAll(".qty")[index];
  let qty = parseInt(qtyEl.innerHTML);

  if(qty <= 1){
    alert("Quantity cannot be less than 1");
  }
}