
function displayworkout() {
    let selectedDate = localStorage.getItem("selectedWorkoutDate");

    let allWorkouts = JSON.parse(localStorage.getItem("workoutsByDate")) || {};
    let workoutsForDate = allWorkouts[selectedDate] || [];

    let container = document.getElementById("workoutcontainer");
    container.innerHTML = "";

    workoutsForDate.forEach((Work, index) => {
        let card = document.createElement("div");
        card.className = "optionforreminder1";

        card.innerHTML = `
            <div class="flexforreminders">
                <label class="custom-checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <div id="textforoptionreminder">
                    <h3>${Work.name}</h3>
                </div>
                <div id="deleteoption1">
                    <img src="icons/deletebuttonforoption.png" height="50" width="50">
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}
