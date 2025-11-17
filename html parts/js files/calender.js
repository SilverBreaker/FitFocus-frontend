document.addEventListener('DOMContentLoaded', function () {

  // user workout split
  let workoutSplit = {
    "Monday": "Chest & Triceps",
    "Tuesday": "Back & Biceps",
    "Wednesday": "Legs",
    "Thursday": "Shoulders",
    "Friday": "Arms",
    "Saturday": "Core",
    "Sunday": "Rest day"
  };

  let calendarEl = document.getElementById('calenderforWorkout');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 496,
    width: 300,

    dateClick: function(info) {
       
      localStorage.setItem("selectedWorkoutDate", info.dateStr);
     
      let dayIndex = info.date.getDay(); 
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let weekday = days[dayIndex];

     
      let workout = workoutSplit[weekday];
      let card = document.getElementById("workoutday");
      card.innerHTML = ` 
               <div class = "flexforWorkout">
                 <div id = "textandparaofworkout">
                    <h2>${workoutSplit[weekday]}</h2>
                    <p class = "pofD">${info.dateStr}</p>
                 </div>
                 <div >
                    <button id = "buttonofworkout" onclick = "window.location.href = 'popupfor adding exercise.html'">+ Add Exercise</button>
                 </div>

                </div>
              
                 <div id = "workoutcontainer">

                 </div>
          </div>`;
      
      
     
      
    
    }
  });

  calendar.render();
  let lastDate = localStorage.getItem("selectedWorkoutDate");
  if (lastDate) {
      simulateDateClick(lastDate);
  }

  function simulateDateClick(dateStr) {
      let date = new Date(dateStr);
      let dayIndex = date.getDay();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let weekday = days[dayIndex];

      document.getElementById("workoutday").innerHTML = `
          <div class="flexforWorkout">
              <div id="textandparaofworkout">
                  <h2>${workoutSplit[weekday]}</h2>
                  <p class="pofD">${dateStr}</p>
              </div>
              <div>
                  <button id="buttonofworkout" onclick="window.location.href='popupfor adding exercise.html'">+ Add Exercise</button>
              </div>
          </div>
          <div id="workoutcontainer"></div>
      `;

      // load workouts for that date
      displayworkout();}
});