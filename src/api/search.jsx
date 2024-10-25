import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function Search(name, age, gender, query, apikey) {
  const genAI = new GoogleGenerativeAI(`${apikey}`);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let text = "",result = "";

  const prompt = `I am ${name}, ${gender}, and I am ${age} years old. The following is the health issue I am facing: ${query}. Please provide the output in a valid JSON format. Strictly return only a JSON string object that can be parsed using JSON.parse(), with the following structure: { 'Heading': 'A concise heading for the health issue or related condition','description': 'A detailed explanation of the issue or condition.','causes': ['Each cause explained as a clear and distinct point.'],'symptoms': ['List common symptoms, with each symptom in a separate point.'],'prevention': ['Steps to prevent the issue, presented as individual points.'],'treatment': ['Treatment methods, detailed in separate points.'],'Diet': ['Recommended diet to help recovery, in clear points.'],'examples': ['Relevant examples of the condition, if applicable, in distinct points.'],'related_conditions': ['Any related conditions or similar issues, each explained in separate points.']}Please ensure that each array contains at least 10 points.return the data in the structure provided above.Note: The output must be a valid JSON string that starts with '{' and ends with '}', avoiding any errors during parsing with JSON.parse() make sure the property and strings are coverd with double quotes which are required for json parsing. Ensure that there are no ':' or '\\n' characters in the output that could cause parsing issues. Don't give data like '''json {data} ''' which cannot be traversed using map function.`;

  try {
    try {
      result = await model.generateContent(prompt);
    } catch (error) {
      toast.error("Failed to Fetch Data!!!", {
        position: "top-right",
      });
      toast.error("Try again Later", {
        position: "top-right",
      });
    }
    text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();
    
    try {
      const parsedText = JSON.parse(text);
      return parsedText;
    } catch (error) {
      return text;
    }
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}

export default Search;
