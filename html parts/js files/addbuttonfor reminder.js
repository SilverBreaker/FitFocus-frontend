document.getElementById("add").addEventListener("click", () =>{
  let labelname = document.getElementById("inputofpopup").value.trim();
  let labeltime = document.getElementById("inputofpopup2").value.trim();

  if(!labelname || !labeltime){
    alert("enter proper info");
    return
  }
  let label= {
     name : labelname,
     time: labeltime
  }
  let labels = JSON.parse(localStorage.getItem("reminders")) || [];
  labels.push(label);

  localStorage.setItem("reminders", JSON.stringify(labels));
  window.location.href = "reminders.html";


}
)