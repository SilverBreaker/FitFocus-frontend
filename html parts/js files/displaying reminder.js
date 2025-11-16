window.onload = displayreminders;

function displayreminders() {
    let labels  = JSON.parse(localStorage.getItem("reminders"));
    let container = document.getElementById("reminder-container");
    container.innerHTML = "";
    labels.forEach((label,index ) => {
        let card = document.createElement("div");
        card.className = "optionforreminder";
        card.innerHTML = `
        <div class = "flexforreminders">
                    <div class = "optionmargin"><img src ="icons/drink water.png" width = "50" height =" 60"></div>
                    <div id = "textforoptionreminder">
                        <h3>${label.name}</h3>
                        <p class = "pofD">Every ${label.time} hours</p>
                    </div>

                   
            
                    <div id = "deleteoption">
                       <a href = #> <img src = "icons/deletebuttonforoption.png" height = "50" width = "50"></a>
                    </div>



                </div>`
        container.appendChild(card);
    });

}