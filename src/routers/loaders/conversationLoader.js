import { redirect } from "react-router-dom";
import { account, databases } from "../../lib/appwrite";

const conversationLoader  = async ({params}) => {
    const {conversationId} = params
    const data = {}
    console.log(conversationId)
    try {
        data.user = await account.get()
    } catch (error) {
        console.log(` Error getting user account: ${error.message}`)

        return redirect('/login')
    }

    try {
        data.conversation = await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '6745b375001ca33a019f',
            conversationId
        )
    } catch (error) {
        console.log(`Error getting conversation: ${error.message}`)

        throw error
    }
    return data;
}


export default conversationLoader