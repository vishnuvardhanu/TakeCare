import { GoogleGenerativeAI } from "@google/generative-ai";

async function Search(name, age, gender, query, apikey) {
  const genAI = new GoogleGenerativeAI(`${apikey}`);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  /* const prompt = `I am ${name}, ${gender}, and I am ${age} years old. The following is the health issue I am facing: ${query}. Please provide the output in a valid JSON format. Strictly return only a JSON string object that can be parsed using JSON.parse(), with the following structure: {'Health':"yes or no tells whether query is related to health issue or not return yes if related to health issue else no" 'Heading': 'A concise heading for the health issue or related condition','description': 'A detailed explanation of the issue or condition.','causes': ['Each cause explained as a clear and distinct point.'],'symptoms': ['List common symptoms, with each symptom in a separate point.'],'prevention': ['Steps to prevent the issue, presented as individual points.'],'treatment': ['Treatment methods, detailed in separate points.'],'Diet': ['Recommended diet to help recovery, in clear points.'],'examples': ['Relevant examples of the condition, if applicable, in distinct points.'],'related_conditions': ['Any related conditions or similar issues, each explained in separate points.']}Please ensure that each array contains at least 10 points, where applicable.return the data in the structure provided above.Note: The output must be a valid JSON string that starts with '{' and ends with '}', avoiding any errors during parsing with JSON.parse(). Ensure that there are no ':' or '\\n' characters in the output that could cause parsing issues.`; */

  const prompt = `I am ${name}, ${gender}, and I am ${age} years old. The following is the health issue I am facing: ${query}. Please provide the output in a valid JSON format. Strictly return only a JSON string object that can be parsed using JSON.parse(), with the following structure: { 'Heading': 'A concise heading for the health issue or related condition','description': 'A detailed explanation of the issue or condition.','causes': ['Each cause explained as a clear and distinct point.'],'symptoms': ['List common symptoms, with each symptom in a separate point.'],'prevention': ['Steps to prevent the issue, presented as individual points.'],'treatment': ['Treatment methods, detailed in separate points.'],'Diet': ['Recommended diet to help recovery, in clear points.'],'examples': ['Relevant examples of the condition, if applicable, in distinct points.'],'related_conditions': ['Any related conditions or similar issues, each explained in separate points.']}Please ensure that each array contains at least 10 points.return the data in the structure provided above.Note: The output must be a valid JSON string that starts with '{' and ends with '}', avoiding any errors during parsing with JSON.parse(). Ensure that there are no ':' or '\\n' characters in the output that could cause parsing issues.`;

  /*  If the query is not related to a Health issue, simply return a boolean value 'false'. If there is even a slight possibility that the query could be related to a medical condition (i.e., anything that requires medical attention), */
  
  try {
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();
    const parsedText = JSON.parse(text);
    return parsedText;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}

export default Search;
