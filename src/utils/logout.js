import { account } from "../lib/appwrite"

const logout = async (navigate) => {
    try {
        await account.deleteSession('current')
    } catch (error) {
        return console.log(`Error deleting user session: ${error.message}`)
    }

    return navigate('/login')
}

export default logout