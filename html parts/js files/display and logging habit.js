window.onload = displayHabits;

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
    } 
    )
    
  });
  
}
