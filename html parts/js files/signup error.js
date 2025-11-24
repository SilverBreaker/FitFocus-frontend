
let nameinput = document.getElementById("inputofname");
let emailinput = document.getElementById("inputofemail");
let passinput = document.getElementById("inputofpasswordlogin");

emailinput.addEventListener("input" , function () {
 
let container = document.querySelector(".invalidemailcontainer");
let email = emailinput.value.trim();
if(!email || !email.includes("@email.com")){
  
  container.innerHTML =  "";

  let card = document.createElement("div");
  card.innerHTML =`<p id = "invalidemail">Invalid Email. Try Again</p>`

  container.append(card);
    
}
else{
    container.innerHTML = "";
}
if(container.innerHTML === ""){
    let button = document.getElementById("buttonoflogin");
    button.addEventListener("click", () => {

        window.location.href = "html part.html";
    })
}
})

nameinput.addEventListener("input", function () {
     let container = document.querySelector(".invalidnamecontainer");

let name = nameinput.value.trim();
if(!name){
    
    container.innerHTML = "";

    let card = document.createElement("div");
    card.innerHTML  = `<p id = "invalidemail">Invalid Name</p>`;

    container.append(card);


}
else{
   container.innerHTML = ""; 
}
if(container.innerHTML=== ""){
    let button = document.getElementById("buttonoflogin");
    button.addEventListener("click", () => {

        window.location.href = "html part.html";
    })
}
})

passinput.addEventListener("input", function () {
  let container = document.querySelector(".invalidpasswordcontainer");

let pass = passinput.value.trim();
if(!pass || pass.length < 8 || !validpassword(pass)){
    container.innerHTML = "";

    let card = document.createElement("div");
    card.innerHTML  = `<p id = "invalidemail">Invalid password</p>`;

    container.append(card);

}
else{
    container.innerHTML= "";
}
if(container.innerHTML === ""){
    let button = document.getElementById("buttonoflogin");
    button.addEventListener("click", () => {

        window.location.href = "html part.html";
    })
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





