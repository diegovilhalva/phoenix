import { getAiResponse } from "../../api/googleAi";
import { databases } from "../../lib/appwrite";
import generateId from "../../utils/generateId";

const conversationAction = async ({ request, params }) => {
    const { conversationId } = params
    const formData = await request.formData()
    const userPrompt = formData.get('user_prompt')

    let chatHistory = []
    let aiResponse = ''

    try {
        const { chats } = await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '6745b375001ca33a019f',
            conversationId
        )

         chatHistory = chats.map(({
            user_prompt,ai_response}) => {
            return {user_prompt,ai_response}
        })
    } catch (error) {
        console.log(`Error getting chat: ${error.message}`)
    }

    try {
        aiResponse = await getAiResponse(userPrompt,chatHistory)
    } catch (error) {
        console.log(`Error getting Gemini response: ${error.message}`)
    }
    
    try {
        await databases.createDocument(  import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '6745bef800052dd17060',
            generateId(),
            {
                user_prompt:userPrompt,
                ai_response:aiResponse,
                conversation:conversationId
            }
        )
    } catch (error) {
        console.log(`Error storing chat : ${error.message}`)    
    }
    return null

}


export default conversationAction;