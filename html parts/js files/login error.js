

let emailinput = document.getElementById("inputofemail");
let passinput = document.getElementById("inputofpasswordlogin");


let emailcontainer = document.querySelector(".invalidemailcontainer");
let passcontainer = document.querySelector(".invalidpasswordcontainer");

emailinput.addEventListener("input" , function () {
 

let email = emailinput.value.trim();
if(!email || !email.includes("@gmail.com")){
  
  emailcontainer.innerHTML =  "";

  let card = document.createElement("div");
  card.innerHTML =`<p id = "invalidemail">Invalid Email. Try Again</p>`
  button.style.backgroundColor = "grey";
  emailcontainer.append(card);
    
}
else{
    emailcontainer.innerHTML = "";
    button.style.backgroundColor = "#4abaaf";
}
})

passinput.addEventListener("input", function() {

let pass = passinput.value.trim();

if(!pass || pass.length < 8 || !validpassword(pass)){
    passcontainer.innerHTML =  "";

  let card = document.createElement("div");
  card.innerHTML =`<p id = "invalidemail">Invalid password</p>`
  button.style.backgroundColor = "grey";
  passcontainer.append(card);
}
else{
    passcontainer.innerHTML = "";
     button.style.backgroundColor = "#4abaaf";
}

})

let button = document.getElementById("buttonoflogin");
button.addEventListener("click", ()=>{
 if(emailcontainer.innerHTML === "" || passcontainer === "" ){
    if(emailinput.value.trim() != "" && passinput.value.trim() != ""){
        window.location.href = "html part.html"
    
    
    }
    
   
 }

})

function validpassword(passw){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let digit ="0123456789"
    let special = "~`!@#$%^&*()_+{}:<>?,./;'[]-=";

    let count = 0;
    for(const char of upper){
        if(passw.includes(char)){
            count +=1
            break
        }

    }

    for(const char of lower){
        if(passw.includes(char)){
            count+=1
            break
        }
    }

    for(const char of digit){
        if(passw.includes(char)){
            count +=1
            break
        }
    }

    for(const char of special){
        if(passw.includes(char)){
            count += 1
            break
        }
    }

    if(count == 4){
        return true
    }
    return false
}





