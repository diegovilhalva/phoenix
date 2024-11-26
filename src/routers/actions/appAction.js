import { getAiResponse, getConverstionTitle } from "../../api/googleAi";
import { account, databases } from "../../lib/appwrite";
import generateId from "../../utils/generateId";

const userPrompAction = async (formData) => {
    const userPrompt = formData.get('user_prompt')

    const user = await account.get()

    const converationTitle = await getConverstionTitle(userPrompt)

    let conversation = null
    try {
        conversation = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '6745b375001ca33a019f',
            generateId(),
            {
                title: converationTitle,
                user_id: user.$id,
            }
        )


    } catch (error) {
        console.log(`Error creating conversation: ${error.message}`)
    }

    const aiResponse = await getAiResponse(userPrompt)
    
    try {
        await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '6745bef800052dd17060',
            generateId(),
            {
                user_prompt:userPrompt,
                ai_response:aiResponse,
                conversation:conversation.$id
            }
        )
    } catch (error) {
        console.log(`Error creating chat: ${error.message}`)
    }
    return null;
}





const appAction = async ({ request }) => {
    const formData = await request.formData()
    const requestType = formData.get('request_type')

    if (requestType === 'user_prompt') {
        return await userPrompAction(formData)
    }

}

export default appAction