const institutions = [
  { name: "Green Harvest Co.", location: "Dodoma", type: "Agri Business" },
  { name: "Fresh Roots Foundation", location: "Arusha", type: "Training Institute" },
  { name: "Tanzania Organic Hub", location: "Morogoro", type: "Research" },
  { name: "AgriTech Solutions", location: "Mbeya", type: "Tech & Innovation" }
];

// Function to get current date and time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); // Returns formatted date and time
}

// Function to display institutions with timestamp
function listInstitutionsWithTime() {
  console.log(`Institutions Registered with Chapa Farm (Checked at: getCurrentTime())`);
  institutions.forEach((inst, index) => 
    console.log(`{index + 1}. Name: inst.name, Location:{inst.location}, Type: ${inst.type}`);
  });
}

// Call the function
listInstitutionsWithTime();
