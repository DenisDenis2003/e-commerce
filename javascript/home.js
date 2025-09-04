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
 let cartCount = document.querySelector("#cart-count")
 let cartBtn = document.querySelectorAll(".cardbtn")

cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let count = parseInt(cartCount.innerText) || 0;
    count++;
    cartCount.innerText = count;
  });
});


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


// store cart details in local storage

// let productcard = document.querySelectorAll(".product-card")

// let a = JSON.parse(localStorage.getItem("productdetails")) || [];

// productcard.forEach((ele)=>{
//       let prname = ele.querySelector(".productname").innerText
//       let proldprice = ele.querySelector(".old-price").innerText
//       let prnewprice = ele.querySelector(".new-price").innerText
//       let prdiscount = ele.querySelector(".discount").innerText
//       let prdiscountbadge = ele.querySelector(".discount-badge").innerText


//       let isCheck =  a.filter((ele)=> ele.pname === prname && ele.poldprice ===proldprice &&
//                         ele.pnewprice === prnewprice && ele.pdiscount === prdiscount && 
//                         ele.pdiscountbadge === prdiscountbadge)

//       if(isCheck.length === 0){

//         let productdetails = {
//         pname : prname,
//         poldprice : proldprice,
//         pnewprice : prnewprice,
//         pdiscount : prdiscount,
//         pdiscountbadge : prdiscountbadge
//       }



//       a.push(productdetails);
//       console.log(a);

//       }
      
// })

//  localStorage.setItem("productdetails",JSON.stringify(a))






 
 


