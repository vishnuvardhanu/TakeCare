import { GoogleGenerativeAI } from "@google/generative-ai";

async function Search(name, age, gender, query, apikey) {
  const genAI = new GoogleGenerativeAI(`${apikey}`);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `I am ${name}, ${gender} , I am ${age} years old and The following is the health issue I am facing: ${query}. Please provide the output in a valid JSON format, Strictly provide only json string object where I use parse on the output that will be give by you and with the structure: {'isHealth':boolean value whether query is related to healt issue or not, 'Heading': 'Heading for the disease or related heading', 'description': 'A detailed description of the issue or disease.','causes': ['Detailed explanations of how the issue occurs, broken down into clear points.'],'symptoms': ['Common symptoms associated with the issue, each described in separate points.'],'prevention': ['Steps to prevent the issue, formatted as distinct points.'],'treatment': ['Ways to treat the issue, listed in detailed points.'], 'Diet': ['diet to follow to get cured'] ,'examples': ['Relevant examples if applicable, presented as individual points.'],'related_conditions': ['Any related conditions or similar issues, explained in separate points.']}If possible give atleast 10 points in each array and isHealth is very important which showcases whether the query is related to health or not.Note: The output should strictly be a JSON string that starts with '{' and ends with '}'. The information should be presented as points detailed as sentences, avoiding ':' or '\n' characters to ensure the JSON string is valid and parseable. Make sure there is no error while parsing the output you provide with JSON.parse()`;
  
  const result = await model.generateContent(prompt);
  let text = result.response.text();
  text = text.replace(/```json|```/g, '').trim();
  
  try {
    const parsedText = JSON.parse(text);
    return parsedText;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}

export default Search;
