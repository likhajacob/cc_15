//Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

//Task 2 - Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
//Creating the new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
//Task 4 - Categorizing risks by color
//Color should change with change
    if (riskLevel === 'High') {
        riskCard.style.backgroundColor = "red";
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = "yellow";
    } else {
        riskCard.style.backgroundColor = "green";
    }
//Task 3 - Inputting remove button inside the function
    const removeButton = document.createElement("button");
    removeButton.textContent = "Resolve";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        riskDashboard.removeChild(riskCard);
    });

//Risk card content
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;
//Append button to risk card
    riskCard.appendChild(removeButton);

//Append risk card to the risk dashboard
    riskDashboard.appendChild(riskCard);
}
//Event listener to handle form submission
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const riskName = document.getElementById('risk').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('riskDepartment').value;

//Call addRiskItem function with form values
    addRiskItem(riskName, riskLevel, department);

//Clear the form fields
    document.getElementById('risk').value = '';
    document.getElementById('riskDepartment').value = '';
});
//Test data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
//Task 5 - Implementing bulk updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    
    riskCards.forEach(function(card) {
        const riskLevelElement = card.querySelector('.riskLevel');
        const currentRiskLevel = riskLevelElement.innerText;

        let newRiskLevel = currentRiskLevel;
        if (currentRiskLevel === 'Low') {
            newRiskLevel = 'Medium';
        } else if (currentRiskLevel === 'Medium') {
            newRiskLevel = 'High';
        }

        // Update the risk level
        riskLevelElement.innerText = newRiskLevel;

        // Update the background color based on the new risk level
        setRiskLevelStyles(card, newRiskLevel);
    });
}
// Task 6 - Handling event propagation
riskDashboard.addEventListener("click", function(event) {
    console.log("Dashboard clicked!"); 
});

