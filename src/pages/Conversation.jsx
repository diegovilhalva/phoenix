import { motion } from "motion/react"
import PageTitle from "../components/PageTitle"
import { useLoaderData } from "react-router-dom"
import UserPrompt from "../components/UserPrompt"
import AiResponse from "../components/AiResponse"



const Conversation = () => {

    const { conversation: { title, chats } } = useLoaderData() || {}

    return (
        <>
            <PageTitle title={`${title} |  Phoenix`} />
            <motion.div className="">
                {chats.map((chat) => (
                    <div key={chat.$id}>
                        <UserPrompt text={chat.user_prompt} />
                        <AiResponse  aiResponse={chat.ai_response}/>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default Conversation