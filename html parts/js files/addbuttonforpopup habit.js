document.getElementById("add").addEventListener("click",() =>{

 let habitname = document.getElementById("inputofpopup").value.trim();
 let habitgoal = document.getElementById("inputofpopup2").value.trim();
 let habitunit = document.getElementById("inputofpopup3").value.trim();

 if(!habitname || !habitgoal || !habitunit){
   alert("enter proper info");
   return
 }

 let newhabit = {
    name: habitname,
    goal: habitgoal,
    unit : habitunit,
    progress : 0
 }

 let habits = JSON.parse(localStorage.getItem("habits")) || [];
 habits.push(newhabit);

 localStorage.setItem("habits", JSON.stringify(habits));

 window.location.href = "html part.html";

})