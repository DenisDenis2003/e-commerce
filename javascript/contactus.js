 const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });


    let a = JSON.parse(localStorage.getItem("contactusdetails") || "[]")

   let submitbtn = document.querySelector("#contactsubmit")

   submitbtn.addEventListener("click",(e)=>{
        e.preventDefault()

        let uname = document.querySelector("#uname").value
        let uemail = document.querySelector("#uemail").value
        let umessage = document.querySelector("#umessage").value


        let contactdetails = {
            username :uname,
            useremail :uemail,
            usermessage :umessage
        }

        a.push(contactdetails);

        localStorage.setItem("contactusdetails",JSON.stringify(a))

        uname = document.querySelector("#uname").value = " "
        uemail = document.querySelector("#uemail").value =" "
        umessage = document.querySelector("#umessage").value =" "


   })


   //logout
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

