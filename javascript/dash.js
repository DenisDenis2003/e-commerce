
  document.querySelector(".uptbtn").style.display = "none"

// Fetch customers from localStorage


let customers = JSON.parse(localStorage.getItem("Customers")) || [];

let tableBody = document.querySelector("#customerTable tbody");

if (customers.length === 0) {
  tableBody.innerHTML = `<tr>
                                  <td colspan="4" style="text-align:center; color:red;">
                                            No Customers Found
                                  </td>
                            </tr>`;
} else {
  customers.forEach((ele, index) => {
    let row = `
          <tr>
            <td>${index + 1}</td>
            <td>${ele.UserName}</td>
            <td>${ele.Email}</td>
            
          </tr>
        `;
    tableBody.innerHTML += row;
  });
}


//save form
let productdetails = []
function renderProducts() {
  productdetails = JSON.parse(localStorage.getItem("productdetails")) || []

  let tableBody2 = document.querySelector(".products tbody")

  tableBody2.innerHTML = ""

  if (productdetails.length == 0) {
    tableBody2.innerHTML = `<tr> 
                                 <td colspan="5" style="text-align:center; color:red;">
                                          No Products Found
                                 </td>      
                              </tr>`;
  } else {
    productdetails.forEach((ele, index) => {
      let row = `
              <tr>
              <td>${index + 1}</td>
              <td>
                  <img src ="${ele.productimg}" alt="" width="100px" height="100px">
              </td>
              <td>${ele.pname}</td>
              <td>$ ${ele.poldprice}</td>
              <td>$ ${ele.pnewprice}</td>
              <td>${ele.pdiscount}% OFF</td>
              <td> <button type="submit" class="btns" onclick="edit(${index})">Edit</button>
               <button type="submit" id="deletebtn" onclick="deleteItem(${index})">Delete</button></td>
              </tr>     
      `;
      tableBody2.innerHTML += row;
    });

  }
}
renderProducts()

//delete in table

function deleteItem(id){

  let c = confirm("Do you want to delete this item ?")

  if(c){
    let productdetails = JSON.parse(localStorage.getItem("productdetails"))

  let remaining =productdetails.filter((ele,index) => index != id)

  localStorage.setItem("productdetails",JSON.stringify(remaining))

  alert("Your Product is deleted")
  renderProducts()
  }else{
    alert("Thank you, Your data id safe..")
  }

}


//edit form
function edit(id){
  let pdetails =JSON.parse(localStorage.getItem("productdetails"))

  let filterprocucts = pdetails.filter((ele,index)=> index == id)
  filterprocucts = filterprocucts[0]

  document.querySelector(".productname").value = filterprocucts.pname
  document.querySelector(".ogprice").value = filterprocucts.poldprice
  document.querySelector(".dsprice").value = filterprocucts.pnewprice
  document.querySelector(".offprecentage").value = filterprocucts.pdiscount
  document.querySelector(".pimg").value = filterprocucts.productimg
  document.querySelector(".pindex").value = id;

  //hide button
  document.querySelector(".uptbtn").style.display = "block"
  document.querySelector(".smtbtn").style.display = "none"
}
  //update

  // document.querySelector(".uptbtn").addEventListener("click",(e)=>{
  //   e.preventDefault()

  // let productname = document.querySelector(".productname").value
  // let ogprice = document.querySelector(".ogprice").value
  // let dsprice = document.querySelector(".dsprice").value
  // let offprecentage = document.querySelector(".offprecentage").value
  // let pimg = document.querySelector(".pimg").value
  // let pindex = document.querySelector(".pindex").value;


  // let updatedproducts =  JSON.parse(localStorage.getItem("productdetails"))

  //  let setproducts = updatedproducts.map((ele,index)=>
  //   index == pindex ? { pname: productname, productimg: pimg, poldprice: ogprice, pnewprice: dsprice, 
  //     pdiscount: offprecentage} : ele
  // )

  // localStorage.setItem("productdetails",JSON.stringify(setproducts))
  // alert("Update Successfully")
  // renderProducts()

  // document.querySelector(".uptbtn").style.display = "none"
  // document.querySelector(".smtbtn").style.display = "block"

  // document.querySelector(".form").reset()

  // })



//click logout then go to login page
let lgbtn = document.querySelector(".logout")
lgbtn.addEventListener("click", () => {
  let logoutCheck = confirm("Do you want to logout ?")
  setTimeout(() => {
    if (logoutCheck == 1) {
      window.location.href = "index.html"
    }
  }, 1000)

})



// dashboardDetails hide
let dashboardLink = document.querySelector(".dashboardLink")
let customerTableSection = document.getElementById("customerTable")
let products = document.querySelector(".products")
let dashboardcontent = document.querySelector(".dashboardcontent")
let usercontact = document.querySelector(".usercontact")
//when i enter to dash page
customerTableSection.style.display = "none";
products.style.display = "none";
usercontact.style.display = "none";
dashboardcontent.style.display = "block"


dashboardLink.addEventListener("click", (e) => {
  e.preventDefault();
  customerTableSection.style.display = "none";
  products.style.display = "none";
  usercontact.style.display = "none";
  dashboardcontent.style.display = "block"
});

// productdetails hide
let productslink = document.querySelector(".productslink")
productslink.addEventListener("click", (e) => {
  e.preventDefault();
  customerTableSection.style.display = "none";
  dashboardcontent.style.display = "none"
  usercontact.style.display = "none";
  products.style.display = "block";

});

// customer table shown
let CustomerDisplay = document.querySelector(".CustomerDisplay")
CustomerDisplay.addEventListener("click", (e) => {
  e.preventDefault()
  customerTable.style.display = "block";
  products.style.display = "none";
  usercontact.style.display = "none";
  dashboardcontent.style.display = "none"

})

let contactlink = document.querySelector(".contactlink")
contactlink.addEventListener("click", (e) => {
  e.preventDefault()
  customerTable.style.display = "none";
  products.style.display = "none";
  dashboardcontent.style.display = "none"
  usercontact.style.display = "block";
})


document.getElementById("totalCustomers").innerText = customers.length
document.getElementById("totalProducts").innerText = productdetails.length 



  let a = JSON.parse(localStorage.getItem("productdetails")) || [];

    let btn = document.querySelector(".smtbtn");

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      let pimg = document.querySelector(".pimg").value.trim();
      let productname = document.querySelector(".productname").value.trim();
      let ogprice = document.querySelector(".ogprice").value.trim();
      let dsprice = document.querySelector(".dsprice").value.trim();
      let offprecentage = document.querySelector(".offprecentage").value.trim();

      let pimgerror = document.querySelector("#pimgerror");
      let productnameerror = document.querySelector("#productnameerror");
      let ogpriceerror = document.querySelector("#ogpriceerror");
      let dspriceerror = document.querySelector("#dspriceerror");
      let offprecentageerror = document.querySelector("#offprecentageerror");

      const urlPattern =
        /^(https?:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

      const re = /^[-+]?\d+$/;
      const areg =/^[A-Za-z]+$/

      // Flags
      let ispimg = false,
        isproductname = false,
        isogprice = false,
        isdsprice = false,
        isoffprecentage = false;

      // ✅ Image URL validation
      if (pimg === "") {
        pimgerror.innerText = "Enter the url";
      } else if (!urlPattern.test(pimg)) {
        pimgerror.innerText = "Enter the correct url";
      } else {
        pimgerror.innerText = "";
        ispimg = true;
      }

      // ✅ Product name validation
      if (productname === "") {
        productnameerror.innerText = "Enter the product name with feature";
      }else {
        productnameerror.innerText = "";
        isproductname = true;
      }

      // ✅ Original price validation
      if (ogprice === "") {
        ogpriceerror.innerText = "Enter the original price";
      } else if (!re.test(ogprice)) {
        ogpriceerror.innerText = "Enter a valid number";
      } else {
        ogpriceerror.innerText = "";
        isogprice = true;
      }

      // ✅ Discount price validation
      if (dsprice === "") {
        dspriceerror.innerText = "Enter the discount price";
      } else if (!re.test(dsprice)) {
        dspriceerror.innerText = "Enter a valid number";
      } else {
        dspriceerror.innerText = "";
        isdsprice = true;
      }

      // ✅ Offer percentage validation
      if (offprecentage === "") {
        offprecentageerror.innerText = "Enter the offer percentage";
      } else if (!re.test(offprecentage)) {
        offprecentageerror.innerText = "Enter a valid number";
      } else {
        offprecentageerror.innerText = "";
        isoffprecentage = true;
      }

      // ✅ Final check
      if (ispimg && isproductname && isogprice && isdsprice && isoffprecentage) {
        let details = {
          productimg: pimg,
          pname: productname,
          poldprice: ogprice,
          pnewprice: dsprice,
          pdiscount: offprecentage,
          pdiscountbadge: offprecentage,
        };

        a.push(details);

        localStorage.setItem("productdetails", JSON.stringify(a));
        localStorage.setItem("defaultproductdetails", JSON.stringify(a));

        document.querySelector(".form").reset();

        renderProducts();
      }
    });



// customertablepush
let contactusdetails = JSON.parse(localStorage.getItem("contactusdetails")) || [];

let tBody = document.querySelector(".usercontact tbody");



if (contactusdetails.length === 0) {
  tBody.innerHTML = `<tr>
                       <td colspan="4" style="text-align:center; color:red;">
                         No Messages Found
                       </td>
                     </tr>`;
} else {
  contactusdetails.forEach((ele, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${ele.username}</td>
        <td>${ele.useremail}</td>
        <td>${ele.usermessage}</td>
      </tr>
    `;
    tBody.innerHTML += row;
  });
}


document.querySelector(".uptbtn").addEventListener("click",(e)=>{
    e.preventDefault()

  let productname = document.querySelector(".productname").value
  let ogprice = document.querySelector(".ogprice").value
  let dsprice = document.querySelector(".dsprice").value
  let offprecentage = document.querySelector(".offprecentage").value
  let pimg = document.querySelector(".pimg").value
  let pindex = document.querySelector(".pindex").value;


  let updatedproducts =  JSON.parse(localStorage.getItem("productdetails"))

   let setproducts = updatedproducts.map((ele,index)=>
    index == pindex ? { pname: productname, productimg: pimg, poldprice: ogprice, pnewprice: dsprice, 
      pdiscount: offprecentage} : ele
  )

  localStorage.setItem("productdetails",JSON.stringify(setproducts))
  alert("Update Successfully")
  renderProducts()

  document.querySelector(".uptbtn").style.display = "none"
  document.querySelector(".smtbtn").style.display = "block"

  document.querySelector(".form").reset()

  })
