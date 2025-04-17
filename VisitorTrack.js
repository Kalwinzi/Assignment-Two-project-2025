// Chapa Farm Visitor Tracker

// Get existing visitor count or start at 0
let visitCount = localStorage.getItem('chapaFarmVisits');
visitCount = visitCount ? parseInt(visitCount) : 0;

// Increase the visit count
visitCount++;

// Store it back
localStorage.setItem('chapaFarmVisits', visitCount);

// Display a message
console.log(`Welcome to Chapa Farm! You have visited visitCount time(s).`);

// Optionally show on page
document.body.innerHTML += `<p>You have visited this page{visitCount} time(s).</p>`;
