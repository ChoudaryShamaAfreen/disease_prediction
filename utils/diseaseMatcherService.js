/**
 * Disease Matcher Service
 * 
 * This service provides functions to match diseases based on user symptoms.
 * It compares user input symptoms against a database of diseases and their associated symptoms.
 */

/**
 * Matches diseases based on user symptoms
 * @param {Array<string>} userSymptoms - Array of symptom strings provided by the user
 * @param {Array<Object>} diseaseDatabase - Array of disease objects with symptoms and disease name
 * @returns {Object} Object with exactMatches and partialMatches arrays
 */
function matchDiseases(userSymptoms, diseaseDatabase) {
    const normalizedUserSymptoms = userSymptoms.map(symptom => 
      symptom.toLowerCase().trim()
    );
    
    const result = {
      exactMatches: [],
      partialMatches: []
    };
    
    for (let i = 0; i < diseaseDatabase.length; i++) {
      const { symptoms, disease } = diseaseDatabase[i];
      
      const normalizedDiseaseSymptoms = symptoms.map(symptom => 
        symptom.toLowerCase().trim()
      );
  
      const isExactMatch = normalizedDiseaseSymptoms.every(symptom => 
        normalizedUserSymptoms.includes(symptom)
      );
  
      const isPartialMatch = normalizedDiseaseSymptoms.some(symptom => 
        normalizedUserSymptoms.includes(symptom)
      );
  
      if (isExactMatch) {
        result.exactMatches.push(disease);
        break; // Stop after first exact match
      } else if (isPartialMatch) {
        result.partialMatches.push(disease);
      }
    }
  
    return result;
  }
  
  