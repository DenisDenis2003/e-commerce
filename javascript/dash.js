
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
            <td>${ele.Passwoard}</td>
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
                                          No Customers Found
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
              <td>${ele.poldprice}</td>
              <td>${ele.pnewprice}</td>
              <td>${ele.pdiscount}</td>
              <td>${ele.pdiscountbadge}</td>
              <td> <button type="submit" class="btns" onclick="edit(${index})">Edit</button>
               <button type="submit">Delete</button></td>
              </tr>     
      `;
      tableBody2.innerHTML += row;
    });

  }
}
renderProducts()

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

  //update

  let updatebtn =  document.querySelector(".uptbtn")
  updatebtn.addEventListener("click",(e)=>{
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
      pdiscount: offprecentage, pdiscountbadge: offprecentage } : ele
  )

  localStorage.setItem("productdetails",JSON.stringify(setproducts))
  alert("Update Successfully")
  renderProducts()

    document.querySelector(".uptbtn").style.display = "none"
  document.querySelector(".smtbtn").style.display = "block"

  document.querySelector(".form").reset()

  })
}


//click logout then go to login page
let lgbtn = document.querySelector(".logout")
lgbtn.addEventListener("click", () => {
  let logoutCheck = confirm("Do you want to logout ?")
  setTimeout(() => {
    if (logoutCheck == 1) {
      window.location.href = "login.html"
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
document.getElementById("totalProducts").innerText = productdetails.length + 16




let a = JSON.parse(localStorage.getItem("productdetails")) || [];

let btn = document.querySelector(".smtbtn")

btn.addEventListener("click", (e) => {
  e.preventDefault()

  let productname = document.querySelector(".productname").value
  let ogprice = document.querySelector(".ogprice").value
  let dsprice = document.querySelector(".dsprice").value
  let offprecentage = document.querySelector(".offprecentage").value
  let pimg = document.querySelector(".pimg").value

  let details = {
    productimg: pimg,
    pname: productname,
    poldprice: ogprice,
    pnewprice: dsprice,
    pdiscount: offprecentage,
    pdiscountbadge: offprecentage
  }

  a.push(details)

  localStorage.setItem("productdetails", JSON.stringify(a))


  document.querySelector(".productname").value = ""
  document.querySelector(".ogprice").value = ""
  document.querySelector(".dsprice").value = ""
  document.querySelector(".offprecentage").value = ""

  renderProducts()
})


// customertablepush
let contactusdetails = JSON.parse(localStorage.getItem("contactusdetails")) || [];

let tBody = document.querySelector(".usercontact tbody");



if (contactusdetails.length === 0) {
  tBody.innerHTML = `<tr>
                       <td colspan="4" style="text-align:center; color:red;">
                         No Customers Found
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
