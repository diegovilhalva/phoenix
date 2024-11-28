import UserPrompt from "./UserPrompt"
import AiResponse from "./AiResponse"
import PropTypes from "prop-types"
import Skeleton from "./Skeleton"
const PromptPreloader = ({promptValue}) => {
  return (
    <div className="max-w-[700px] mx-auto">
        <UserPrompt  text={promptValue} />
        <AiResponse >
                <Skeleton />
        </AiResponse>
    </div>
  )
}

PromptPreloader.propTypes = {
    promptValue:PropTypes.string
}

export default PromptPreloader