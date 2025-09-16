 const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });



// Correct container selector
const container = document.querySelector(".cards-container");

// Fetch products from localStorage
const products = JSON.parse(localStorage.getItem("productdetails")) || [];

// Loop through products and generate HTML dynamically
products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
  
        <div class="hover-icons">
          <button><i class="fa-regular fa-heart"></i></button>
          <button><i class="fa-solid fa-share-nodes"></i></button>
          <button><i class="fa-regular fa-eye"></i></button>
          <button class="cardbtn"><i class="fa-solid fa-bag-shopping"></i></button>
        </div>
      <img src="${p.productimg}" alt="${p.pname}">
        <h3 class="productname">${p.pname}</h3>
        <p class="old-price">${p.poldprice}</p>
        <p class="new-price">${p.pnewprice} <span class="discount">${p.pdiscount}</span></p>
        <span class="discount-badge">${p.pdiscountbadge}</span>

        `;
  container.appendChild(card);
});






  // add to cart count
//  let cartCount = document.querySelector("#cart-count");
// let cartBtn = document.querySelectorAll(".cardbtn");

// // Track added items with array
// let addedProducts = [];

// cartBtn.forEach((btn, index) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Use index or product id as unique identifier
//     let productId = index;

//     if (addedProducts.includes(productId)) {
//       alert("You already added this product to cart!");
//     } else {
//       addedProducts.push(productId); // add to array
//       let count = parseInt(cartCount.innerText) || 0;
//       count++;
//       cartCount.innerText = count;
//       alert("Product added to cart!");
//     }
//   });
// });



//click logout then go to login page
let lgbtn = document.querySelectorAll(".logout")

   lgbtn.forEach(ele => {
      ele.addEventListener("click",()=>{
      let logoutCheck = confirm("Do you want to logout ?")
      setTimeout(()=>{
        if(logoutCheck == 1){
        window.location.href = "login.html"
      }
      },1000)
      
    })
});




// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// update badge
// function updateCartCount() {
//   document.getElementById("cart-count").textContent = cart.length;
// }

// add to cart
// document.querySelectorAll(".cardbtn").forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let card = e.target.closest(".product-card");
//     let product = {
//       img: card.querySelector("img").src,
//       name: card.querySelector(".productname").innerText,
//       price: card.querySelector(".new-price").innerText
//     };
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("card added success")
//     // updateCartCount();
//   });
// });

// show count on page load
// updateCartCount();







let cartCount = document.querySelector("#cart-count");
let cartBtn = document.querySelectorAll(".cardbtn");

// Load cart from localStorage (or empty array)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count on page load
cartCount.innerText = cart.length;

// Add event listeners
cartBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let card = e.target.closest(".product-card");
    let product = {
      id: index, // unique id
      img: card.querySelector("img").src,
      name: card.querySelector(".productname").innerText,
      price: card.querySelector(".new-price").innerText,
    };

    // ✅ Check with filter 
    let exists = cart.filter((item) => item.id === product.id);

    if (exists.length > 0) {
      alert("You already added this product to cart!");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart count
      cartCount.innerText = cart.length;

      alert("Product added to cart!");
    }
  });
});


 
 


