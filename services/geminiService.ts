
import { GoogleGenAI } from "@google/genai";
import { CLINIC_NAME, CLINIC_LOCATION, CLINIC_LANDMARK, SERVICES } from "../constants";

export class HealthAssistantService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getResponse(userInput: string) {
    try {
      const serviceList = SERVICES.map(s => s.title).join(", ");
      const systemInstruction = `
        You are a helpful, empathetic medical assistant for ${CLINIC_NAME} located in ${CLINIC_LOCATION}.
        Landmark: ${CLINIC_LANDMARK}.
        Available Services: ${serviceList}.
        
        Your goals:
        1. Answer basic questions about the clinic (location, hours, services).
        2. Provide general health information, but ALWAYS advise talking to a doctor at our clinic for diagnosis.
        3. Be brief and use simple language suitable for the local Johnsonville community.
        4. If someone sounds like they have an emergency, tell them to visit the clinic immediately or call 0775829276.
        
        Clinic Hours: Mon-Fri 8am-5pm, Sat 8am-12pm.
      `;

      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userInput,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that. Please visit us at the clinic or call our numbers directly.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I am currently having trouble connecting. Please call us at 0775829276 for immediate assistance.";
    }
  }
}

export const healthAssistant = new HealthAssistantService();
