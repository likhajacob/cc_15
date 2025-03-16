// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");
// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
// Create the new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
// Setting the background color based on risk level
    if (riskLevel === 'High') {
        riskCard.classList.add('highRisk');
    } else if (riskLevel === 'Medium') {
        riskCard.classList.add('mediumRisk');
    } else {
        riskCard.classList.add('lowRisk');
    }

// content for the risk card
    const riskContent = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    riskCard.innerHTML = riskContent;


    document.getElementById('riskDashboard').appendChild(riskCard);
 //risk card to the risk dashboard
}

// Event listener to handle form
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;

// Call addRiskItem function with the form values
    addRiskItem(riskName, riskLevel, department);

// Clear the form fields
    document.getElementById('riskName').value = '';
    document.getElementById('department').value = '';
});

// Test example data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");