
let loginbtn = document.getElementById("finallogin")

finallogin.addEventListener("click",(e)=>{
  e.preventDefault()

  let email = document.getElementById("uemail").value
  let password = document.getElementById("upass").value

    let customer =  JSON.parse(localStorage.getItem("Customers"))

    // console.log(customer)
    
    let isExist = customer.filter((ele)=> ele.Email === email && ele.Passwoard === password)
    console.log(isExist)


    if(isExist.length == 1){
          alert("Login Successfully")
          window.location.href = "home.html"
        }else{
          alert("You are not User , Please Register..")
      }
})