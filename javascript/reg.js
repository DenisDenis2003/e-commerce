      // Get customers from localStorage, default to empty array if not found
        let a = JSON.parse(localStorage.getItem("Customers") || "[]");

        // console.log(a)

        let submitbtn = document.getElementById("finalsubmit")
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        submitbtn.addEventListener("click",(e)=>{
            e.preventDefault()


          let uname =  document.getElementById("uname").value;
          let uemail =  document.getElementById("uemail").value;
          let upass =  document.getElementById("upass").value;
          let ucmpass =  document.getElementById("ucmpass").value;

          let nerror = document.getElementById("nerror")
          let eerror = document.getElementById("eerror")
          let perror = document.getElementById("perror")
          let cperror = document.getElementById("cperror")

          let isEmailValid , isUname , isPass, isCPass = false

          if(uname === ""){
            nerror.innerText = "Enter the User Name"
            isUname = false;
          }else{
            nerror.innerText = ""
            isUname = true
          }

          // console.log(emailRegex.test(uemail))
          if(uemail === ""){
            eerror.innerText = "Enter the Email"
            isEmailValid = false;
          }
          else if(!emailRegex.test(uemail)){
            eerror.innerText = "Email is invalid"
            isEmailValid = false;
          }else{
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

          if(ucmpass === ""){
            cperror.innerText = "Confirm the Password"
            isCPass = false;
          }else if(upass.length < 8){
             cperror.innerText = "Confirm Password must be 8 charactor"
             isCPass = false;
          }else if(upass !== ucmpass){
             cperror.innerText = "Password do not match"
             isCPass = false;
          }
          else{
            cperror.innerText = ""
            isCPass = true
          }
         
          if(isEmailValid && isUname && isPass && isCPass){


            let isExist = a.filter((ele) => ele.Email === uemail);

            if (isExist.length == 1) {
                alert("This email is already registered!");
                return; // stop further execution
            }

            let register = {
                UserName : uname,
                Email :uemail,
                Passwoard : upass,
                CMPasswoard : ucmpass
            }

           
             
            a.push(register)
            // console.log(a)

            localStorage.setItem("Customers",JSON.stringify(a))
            alert("Register Successfully")
            window.location.href = "index.html"


           
            document.getElementById("uname").value = ""
            document.getElementById("uemail").value = ""
            document.getElementById("upass").value = ""
            document.getElementById("ucmpass").value = ""

          }
        })