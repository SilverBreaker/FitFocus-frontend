let uploadpics = document.getElementById("imageuploadarea");
let imginput = document.getElementById("imginput");

uploadpics.addEventListener("click", ()=>{
    imginput.click();
})

imginput.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            uploadpics.innerHTML = `<img src = "${e.target.result}">`;

        }
         reader.readAsDataURL(file);
    }

})