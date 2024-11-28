import { Link, useNavigation, useRouteError } from "react-router-dom"
import { LinearProgress } from "../components/Progress"


const RootError = () => {
    const error = useRouteError()

    const navigation = useNavigation()


    return (
        <>
            <div className="h-dvh grid grid-cols-1 justify-items-center content-center">
                <p className="text-displayLarge">{error.status}</p>
                <p className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-4">
                    We couldn't find the page you're looking for.
                </p>
                <Link className="btn filled primary" to="/">
                 Back to home
                 <div className="state-layer"></div>
                </Link>
            </div>
            {navigation.state === 'loading' && (
                <LinearProgress classes="fixed top-0 left-0 right-0" />
            )}
        </>
    )
}

export default RootError