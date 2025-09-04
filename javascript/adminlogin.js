

   let finallogin = document.getElementById("finallogin")

  finallogin.addEventListener("click",(e)=>{
    e.preventDefault()

    let uemail = document.getElementById("uemail").value
    let upass = document.getElementById("upass").value

if(uemail === "admin" && upass ==="admin123"){
    alert("Login Successfully")
    window.location.href = "dash.html"
}else{
    alert("wrong username or passwoard")
}
})