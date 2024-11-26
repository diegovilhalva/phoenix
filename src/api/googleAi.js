import model from "../lib/googleAi";

const getConverstionTitle = async (userPrompt) => {
    try {
        const result = await model.generateContent(` 
            Given a user prompt,, generate a concise and
            informative  title that accurately describes the
            conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
            Prompt: ${userPrompt}`)

        return result.response.text()
    } catch (error) {
        console.log(`Error generate conversation title: ${error.message}`)
    }

    
}


const getAiResponse = async (userPrompt, chats = []) => {
    try {
        model.generationConfig = { temperature: 1.5 }
        const chat = model.startChat({history:chats})
        const result = await chat.sendMessage(userPrompt)

        return result.response.text()
    } catch (error) {
        console.log(`Erro generating AI response : ${error.message}`)
    }
}

export { getConverstionTitle,getAiResponse }