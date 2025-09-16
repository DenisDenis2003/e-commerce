 const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });


//click logout then go to login page
let lgbtn = document.querySelectorAll(".logout")

   lgbtn.forEach(ele => {
      ele.addEventListener("click",()=>{
      let logoutCheck = confirm("Do you want to logout ?")
      setTimeout(()=>{
        if(logoutCheck == 1){
        window.location.href = "index.html"
      }
      },1000)
      
    })
});
