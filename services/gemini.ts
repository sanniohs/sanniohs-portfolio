import { GoogleGenAI } from "@google/genai";

export const sendMessageToGemini = async (prompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  // Fix: Always use new GoogleGenAI({apiKey: process.env.API_KEY}) directly as per guidelines.
  // The API key is assumed to be valid and accessible via process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Custom instruction for the portfolio assistant
  const systemInstruction = `
    You are the AI Assistant for "sanniohs" (산이오스), a graphic designer specializing in 3D and AI art.
    Your tone is professional, minimalist, and artistic.
    You know that:
    - sanniohs is based in Seoul.
    - His specialty is "3D with AI Graphic Design".
    - He calls himself a "잡동사니 수집가" (collector of odds and ends).
    - Email: sanniworks@naver.com, Instagram: @sanniohs.
    Keep answers brief and helpful. Respond in the user's language (Korean or English).
  `;

  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Fix: chat.sendMessage only accepts the message parameter as an object { message: string }.
    const response = await chat.sendMessage({ message: prompt });
    
    // Fix: Access response.text property directly (do not call as a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "죄송합니다. 현재 AI 비서와 연결이 원활하지 않습니다.";
  }
};