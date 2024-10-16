// Simple Chatbot (Medium)
// Problem Statement
// Create a simple chatbot program that can answer questions based on a
// predefined list of question-answer pairs. The chatbot should take in a user's
// question and try to find the closest matching question from the predefined
// questions by comparing words.
// Input
// ● A list of question-answer pairs.
// ● A user’s input question (string).
// Output
// Return the answer corresponding to the closest matching question.
// Example
// Question-answer pairs:
// Question Answer
// What is your name? My name is Chatbot.
// How can I help you? I can assist you with your queries.
// What is the weather today? The weather is sunny.
// Input:
// "What's the weather like today?";
// Output:
// "The weather is sunny."


function chatbot(input, Question) {
   
    let UserQuestion = cleanString(Question);
    
   
    let Match = '';
    let Score = 0;
  
   
    for (let el of input) {
      let question = el.question;
      let answer = el.answer;
  
     
      let cleanedQuestion = cleanString(question);
      
     
      let matchScore = calculateMatchScore(UserQuestion, cleanedQuestion);
  
      
      if (matchScore > Score) {
        Match = answer;
        Score = matchScore;
      }
    }
  
   
    return Score > 0 ? Match : "I'm sorry, I don't understand your question.";
  }
  
 
  function cleanString(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();           
  }
  
  
  function calculateMatchScore(str1, str2) {
    let words1 = new Set(str1.split(' '));
    let words2 = new Set(str2.split(' '));
    

    let commonWords = [...words1].filter(word => words2.has(word));
  
  
    return commonWords.length;
  }
  
  // Example usage:
  let input = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
  ];
  
  let Question = "What is your name?";
  let ans = chatbot(input, Question);
  console.log(ans);  // Output: "My name is Chatbot."
  