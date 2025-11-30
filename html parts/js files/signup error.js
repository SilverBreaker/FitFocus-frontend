
let nameinput = document.getElementById("inputofname");
let emailinput = document.getElementById("inputofemail");
let passinput = document.getElementById("inputofpasswordlogin");


let Emailcontainer = document.querySelector(".invalidemailcontainer");
 let Namecontainer = document.querySelector(".invalidnamecontainer");
let passcontainer = document.querySelector(".invalidpasswordcontainer");




emailinput.addEventListener("input" , function () {
 

let email = emailinput.value.trim();
if(!email || !email.includes("@gmail.com")){
  
  Emailcontainer.innerHTML =  "";

  let card = document.createElement("div");
  card.innerHTML =`<p id = "invalidemail">Invalid Email. Try Again</p>`
  button.style.backgroundColor = "grey";
  Emailcontainer.append(card);
    
}
else{
    Emailcontainercontainer.innerHTML = "";
    button.style.backgroundColor = "#4abaaf";
}

})

nameinput.addEventListener("input", function () {
   

let name = nameinput.value.trim();
if(!name){
    
    Namecontainer.innerHTML = "";

    let card = document.createElement("div");
    card.innerHTML  = `<p id = "invalidemail">Invalid Name</p>`;
   button.style.backgroundColor = "grey";
    Namecontainer.append(card);


}
else{
   Namecontainer.innerHTML = ""; 
   button.style.backgroundColor = "#4abaaf";
}

})

passinput.addEventListener("input", function () {
  

let pass = passinput.value.trim();
if(!pass || pass.length < 8 || !validpassword(pass)){
    passcontainer.innerHTML = "";

    let card = document.createElement("div");
    card.innerHTML  = `<p id = "invalidemail">Invalid password</p>`;
    button.style.backgroundColor = "grey";
    passcontainer.append(card);

}
else{
    passcontainer.innerHTML= "";
    button.style.backgroundColor = "#4abaaf";
}

})



let button = document.getElementById("buttonoflogin");
    button.addEventListener("click", () => {
        if(Emailcontainer.innerHTML === "" || Namecontainer.innerHTML === "" || passcontainer === "" ){

            if(emailinput.value.trim() != "" && nameinput.value.trim() != "" && passinput.value.trim() != ""){
                window.location.href = "tutorial/step1.html";

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





