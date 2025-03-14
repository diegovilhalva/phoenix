
import {GoogleGenerativeAI} from "@google/generative-ai"

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)


const model= genAi.getGenerativeModel({model:'gemini-2.0-flash'})


export default model