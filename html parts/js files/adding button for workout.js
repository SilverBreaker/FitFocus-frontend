document.getElementById("add").addEventListener("click", () => {
  let workoutname = document.getElementById("inputofpopup").value.trim();
  if (!workoutname) {
    alert("Enter proper info");
    return;
  }

  // Read selected date
  let selectedDate = localStorage.getItem("selectedWorkoutDate");

  // Load all workouts (organized by date)
  let allWorkouts = JSON.parse(localStorage.getItem("workoutsByDate")) || {};

  // If no array exists for this date, create one
  if (!allWorkouts[selectedDate]) {
      allWorkouts[selectedDate] = [];
  }

  // Add exercise
  allWorkouts[selectedDate].push({
      name: workoutname,
      progress: 0
  });

  localStorage.setItem("workoutsByDate", JSON.stringify(allWorkouts));

  window.location.href = "workout.html";
});
