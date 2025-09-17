

//    let finallogin = document.getElementById("finallogin")

//   finallogin.addEventListener("click",(e)=>{
//     e.preventDefault()

//     let uemail = document.getElementById("uemail").value
//     let upass = document.getElementById("upass").value

// if(uemail === "admin" && upass ==="admin123"){
//     alert("Login Successfully")
//     window.location.href = "dash.html"
// }else{
//     alert("wrong username or passwoard")
// }
// })





let loginbtn = document.getElementById("finallogin")



//   let email = document.getElementById("uemail").value
//   let password = document.getElementById("upass").value


  let finallogin = document.getElementById("finallogin")
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        finallogin.addEventListener("click",(e)=>{
            e.preventDefault()


        
          let uemail =  document.getElementById("uemail").value;
          let upass =  document.getElementById("upass").value;
       

        
          let eerror = document.getElementById("eerror")
          let perror = document.getElementById("perror")
        

          let isEmailValid ,  isPass = false

         

          // console.log(emailRegex.test(uemail))
          if(uemail === ""){
            eerror.innerText = "Enter the Email"
            isEmailValid = false;
          }
         else{
            eerror.innerText = ""
            isEmailValid = true;
          }
          // debugger;

          if(upass === ""){
            perror.innerText = "Enter the password"
            isPass = false;
          }else if(upass.length < 8){
             perror.innerText = "Password must be 8 charactor"
             isPass = false;
          }else{
            perror.innerText = ""
            isPass = true
          }

        
         
          if(isEmailValid && isPass ){

            if(uemail === "admin" && upass ==="admin123"){
                alert("Login Successfully")
                window.location.href = "dash.html"
            }else{
                alert("Wrong username or passwoard")
            }


          }
        })
        




