
import { redirect } from "react-router-dom"
import { account } from "../../lib/appwrite"
import generateId from "../../utils/generateId"

const registerAction = async ({ request }) => {
    const formData = await request.formData()

    try {
        await account.create(generateId(),
            formData.get('email'),
            formData.get('password'),
            formData.get('name')
        )
    } catch (error) {
        return {
            message: error.message
        }
    }

    try {
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password')
        )
    } catch (error) {
        console.log(`Error creating email session: ${error.message}`)
        return redirect('/login')
    }
    return redirect('/')
}


export default registerAction