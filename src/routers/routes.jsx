import  {createBrowserRouter} from "react-router-dom"

import App from "../App"
import Register from "../pages/Register"
import registerAction from "./actions/registerActions"
import Login from "../pages/Login"
import loginAction from "./actions/loginActions"
import registerLoader from "./loaders/registerLoader"
import loginLoader from "./loaders/loginLoader"
import ResetLink from "../pages/ResetLink"
import resetLinkAction from "./actions/resetlinkAction"
import ResetPassword from "../pages/ResetPassword"
import resetPassword from "./actions/resetPassword"
import resetLinkLoader from "./loaders/resetLoader"
import resetPasswordLoader from "./loaders/resetPasswordLoader"
import appLoader from "./loaders/appLoader"


const router  = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        loader:appLoader
    },
    {
        path:'/register',
        element:<Register />,
        loader:registerLoader,
        action:registerAction
    },
    {
        path:'/login',
        element:<Login />,
        loader:loginLoader,
        action:loginAction
    },
    {
        path:'/reset-link',
        element:<ResetLink />,
        loader:resetLinkLoader,
        action:resetLinkAction
    },
    {
        path:'/reset-password',
        element:<ResetPassword />,
        loader:resetPasswordLoader,
        action:resetPassword
    }
])

export default router