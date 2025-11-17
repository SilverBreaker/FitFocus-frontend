window.onload =() => {
    displayHabits();
    updateOverallCircle(); 
    
}

function displayHabits() {

  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  let container = document.getElementById("habit-container");
  container.innerHTML = "";

  habits.forEach((habit, index) => {

    let card = document.createElement("div");
    card.className = "basecaseofFT";

    card.innerHTML = `
      <div id="flexforFTSgoals">
        <div><img src="icons/fitness tracker icon/pushup.png" height="60" width="60"></div>
        <div><h2 id="textforGoals">${habit.name}</h2></div>
        
        <div id="goalquantity"><p class="pofD">Goal: ${habit.goal} ${habit.unit}</p></div>
         <button class="deleteHabit">x</button>
      </div>

      
      <div id="flexforInputFT">
        <div><input type="text" id="inputforFT" placeholder="Enter Progress..." ></div>
        <div><button id="buttonforGoal">Log</button></div>
      </div>
      
      <div class="linear-container">
        <div class="linear-fill"></div>
      </div>
    `;

    container.appendChild(card);
    
    let input= card.querySelector("#inputforFT");
    let btn = card.querySelector("#buttonforGoal");
    let bar = card.querySelector(".linear-fill");

    let progress = habit.progress || 0;
    let per = (progress / habit.goal) * 100;
    bar.style.width = per + "%";

    btn.addEventListener("click", ()=>{
      let val = parseInt(input.value);
      if(!val || val <=  0){
        return
      }
      let habits = JSON.parse(localStorage.getItem("habits")) || [];
        habits[index].progress = (habits[index].progress || 0) + val;

        if (habits[index].progress > habits[index].goal) {
            habits[index].progress = habits[index].goal;
        }

        localStorage.setItem("habits", JSON.stringify(habits));
        displayHabits();
         updateOverallCircle();
    } 
    )

    let deleteBtn = card.querySelector(".deleteHabit");

deleteBtn.addEventListener("click", () => {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    habits.splice(index, 1); 

    localStorage.setItem("habits", JSON.stringify(habits));

    displayHabits(); 
});
    
  });
 
}



function updateOverallCircle() {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    let totalProgress = 0;
    let totalGoal = 0;

    habits.forEach(h => {
        totalProgress += (h.progress || 0);
        totalGoal += parseInt(h.goal) || 0;
    });

    let percent = totalGoal === 0 ? 0 : (totalProgress / totalGoal) * 100;
    if(percent > 100){
      percent = 100;
    }
    
    let circle = document.querySelector(".progressempty");
    circle.style.background =`
        conic-gradient(
            #4abaaf ${percent}%,
            #313135 ${percent}%
        )
    `;

    
    document.querySelector("#progresspercent").textContent = Math.floor(percent) + "%";
}
