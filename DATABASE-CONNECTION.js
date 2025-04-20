
const institutions = [
  { name: "Green Harvest Co.", location: "Dodoma", type: "Agri Business" },
  { name: "Fresh Roots Foundation", location: "Arusha", type: "Training Institute" },
  { name: "Tanzania Organic Hub", location: "Morogoro", type: "Research" },
  { name: "AgriTech Solutions", location: "Mbeya", type: "Tech & Innovation" }
];

// Function to display all registered institutions
function listInstitutions() {
  console.log("Institutions Registered with Chapa Farm:");
  institutions.forEach((inst, index) => {
    console.log(`index + 1. Name:{inst.name}, Location: inst.location, Type:{inst.type}`);
  });
}
