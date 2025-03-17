// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    // Create the new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    // Set background color based on risk level
    if (riskLevel === 'High') {
        riskCard.style.backgroundColor = "red";
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = "yellow";
    } else {
        riskCard.style.backgroundColor = "green";
    }

    // Create remove button inside the function
    const removeButton = document.createElement("button");
    removeButton.textContent = "Resolve";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        riskDashboard.removeChild(riskCard);
    });

    // Content for the risk card
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    // Append button to risk card
    riskCard.appendChild(removeButton);

    // Append risk card to the risk dashboard
    riskDashboard.appendChild(riskCard);
}

// Event listener to handle form submission
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form refresh

    const riskName = document.getElementById('risk').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('riskDepartment').value;

    // Call addRiskItem function with form values
    addRiskItem(riskName, riskLevel, department);

    // Clear the form fields
    document.getElementById('risk').value = '';
    document.getElementById('riskDepartment').value = '';
});

// Test example data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");







