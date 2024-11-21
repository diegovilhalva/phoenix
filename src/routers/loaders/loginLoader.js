import { redirect } from "react-router-dom"

import { account } from "../../lib/appwrite"

const loginLoader = async () => {
    try {
        await account.get() 
    } catch (error) {
        console.log(`Error when getting user session: ${error.message}`)
        return null
    }
    return redirect('/')
}


export default loginLoader