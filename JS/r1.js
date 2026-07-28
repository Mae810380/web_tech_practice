let form = document.getElementById("studentForm");

let table = document.getElementById("studentTable");


form.onsubmit = function(event) {

    // Stop page refresh
    event.preventDefault();


    let name = document.getElementById("name").value;

    let marks = document.getElementById("marks").value;


    // Validate name
    let namePattern = /^[A-Za-z]+$/;


    if(name == "") {
        alert("Name cannot be empty");
        return;
    }


    if(!namePattern.test(name)) {
        alert("Name must contain only letters");
        return;
    }


    // Validate marks

    if(marks == "" || isNaN(marks)) {
        alert("Marks must be a number");
        return;
    }


    if(marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100");
        return;
    }



    // Add new row dynamically

    let row = table.insertRow();


    let nameCell = row.insertCell(0);
    let marksCell = row.insertCell(1);


    nameCell.innerHTML = name;
    marksCell.innerHTML = marks;



    // Change row color based on marks

    if(marks > 50) {
        row.style.backgroundColor = "green";
    }
    else {
        row.style.backgroundColor = "red";
    }



    // Clear input fields

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

};