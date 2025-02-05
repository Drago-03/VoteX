// Handle authentication status
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
    }
}

// Fetch and display elections
async function fetchElections() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/elections', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        displayElections(data);
    } catch (error) {
        console.error('Error fetching elections:', error);
    }
}

// Display elections in the dashboard
function displayElections(elections) {
    const electionsList = document.getElementById('elections-list');
    electionsList.innerHTML = '';
    
    elections.forEach(election => {
        const electionItem = document.createElement('div');
        electionItem.className = 'election-item';
        electionItem.innerHTML = `
            <h3>${election.title}</h3>
            <p>${election.description}</p>
            <p>Status: ${election.status}</p>
            <button onclick="viewElection('${election._id}')">View Details</button>
        `;
        electionsList.appendChild(electionItem);
    });
}

// Handle logout
function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login.html';
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    fetchElections();
});
