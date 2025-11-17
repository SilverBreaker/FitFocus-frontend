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
                    <div class = "optionmargin"><img src ="icons/remindericon.png" id = "remindericon" width = "50" height =" 60"></div>
                    <div id = "textforoptionreminder">
                        <h3>${label.name}</h3>
                        <p class = "pofD">Every ${label.time} hours</p>
                    </div>

                   
            
                    <div id = "deleteoption">
                       <button class="deleteHabit">x</button>
                    </div>



                </div>`
        container.appendChild(card);
        let deleteBtn = card.querySelector(".deleteHabit");

deleteBtn.addEventListener("click", () => {
    let habits = JSON.parse(localStorage.getItem("reminders")) || [];

    habits.splice(index, 1); 

    localStorage.setItem("reminders", JSON.stringify(habits));

    displayreminders(); 
});
    });

}