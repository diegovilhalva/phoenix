import { Link, useRouteError } from "react-router-dom"


const ConversationError = () => {
    const error = useRouteError()
  return (
    <div className="h-full grid grid-cols-1 justify-items-center content-center">
        <p className="text-displayMedium font-semibold ">{error.code}</p>
        <p className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-2 mb-4">
            {error.message}
        </p>

        <Link className="btn filled primary" to="/">
        Create new chat
        <div className="state-layer"></div>
        </Link>
    </div>
  )
}

export default ConversationError