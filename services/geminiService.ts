
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectBrief = async (userInput: string, language: Language): Promise<string> => {
  try {
    const langPrompt = language === 'ua' 
      ? "Respond in Ukrainian language." 
      : language === 'it' 
        ? "Respond in Italian language." 
        : language === 'de'
            ? "Respond in German language."
            : "Respond in English language.";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a Senior Creative Director at a high-end design studio called WEEGO. 
      A potential client has sent this raw inquiry: "${userInput}".
      
      ${langPrompt}
      
      Please restructure this into a professional, brutalist-style "Project Brief" with the following markdown formatting:
      
      ## OBJECTIVE
      [A clear, concise summary of what they want]
      
      ## SUGGESTED APPROACH
      [2-3 sentences on how WEEGO would tackle this visually and strategically]
      
      ## ESTIMATED TIMELINE
      [A rough estimation based on complexity]
      
      Keep the tone confident, professional, slightly edgy, and concise. Do not use filler words.`,
    });

    return response.text || "Could not generate brief. Please try again.";
  } catch (error) {
    console.error("Error generating brief:", error);
    return "Error connecting to the creative intelligence core. Please try again later.";
  }
};
