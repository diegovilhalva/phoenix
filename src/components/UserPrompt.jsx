import PropTypes from "prop-types"
import Avatar from "./Avatar"
import { useLoaderData } from "react-router-dom"
import { useToggle } from "../hooks/useToggle"
import { IconBtn } from "./Button"
import { useEffect, useRef, useState } from "react"


const UserPrompt = ({ text }) => {
    const { user } = useLoaderData()
    const [isExpanded, toggleExpand] = useToggle()

    const textBoxRef = useRef()

    const [hasMoreContent, setMoreContent] = useState(false)

    useEffect(() => {
        setMoreContent(textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight)
    }, [textBoxRef])
    return (
        <div className="grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1f),max-content] md:gap-5">
            <Avatar name={user?.name} />
            <p className={`text-bodyLarge pt-1 whitespace-pre-wrap ${!isExpanded ? 'line-clamp-4' : ''}`} ref={textBoxRef}>{text}</p>
            {hasMoreContent && (
                <IconBtn icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} onClick={toggleExpand} title={isExpanded ? 'Collapse' : 'Expand text'} />
            )}
        </div>
    )
}

UserPrompt.propTypes = {
    text: PropTypes.string
}

export default UserPrompt