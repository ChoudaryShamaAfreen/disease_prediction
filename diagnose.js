/**
 * Diagnose.js
 * 
 * This script handles the symptom diagnosis functionality.
 * It uses the diseaseMatcherService to match user symptoms with diseases.
 */

// In browser environment, we'll use the matchDiseases function directly
// The function is defined in diseaseMatcherService.js and included in the HTML

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the disease database from the global variable (defined in diagnose.html)
  const diseaseDb = window.diseaseDatabase || [];
  
  // Set up the form submission handler
  document.getElementById("diagnoseForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get user input symptoms and normalize them
    const userSymptoms = document.getElementById("symptoms").value
      .toLowerCase()
      .split(",")
      .map(s => s.trim());
    
    // Use the matchDiseases function to find matches
    const result = matchDiseases(userSymptoms, diseaseDb);
    
    // Display exact matches
    const exactMatchesOutput = document.getElementById("exactMatchesOutput");
    if (result.exactMatches.length > 0) {
      exactMatchesOutput.textContent = result.exactMatches.join(", ");
    } else {
      exactMatchesOutput.textContent = "No matches found. Do consult a doctor. Taking medicine without guidance can be harmful—talk to a doctor first..";
    }
    
    // Show the result box
    document.getElementById("result").classList.remove("d-none");
  });
});