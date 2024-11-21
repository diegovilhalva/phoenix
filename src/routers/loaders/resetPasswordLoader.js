import { redirect } from "react-router-dom"

import { account } from "../../lib/appwrite"

const resetPasswordLoader = async ({request}) => {
    const url = new URL(request.url)
    try {
        await account.get() 
        return redirect('/')
    } catch (error) {
        console.log(`Error when getting user session: ${error.message}`)
      
    }

    if (!url.searchParams('userId') && !url.searchParams('secret')) {
        return redirect('/reset-link')
    }

    return null
}


export default resetPasswordLoader