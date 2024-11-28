import React from 'react'
import { IconBtn } from './Button'
import { useNavigate, useNavigation,useLoaderData,useParams } from 'react-router-dom'
import Avatar from './Avatar'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { LinearProgress } from "./Progress"
import { AnimatePresence } from 'motion/react'
import { useToggle } from '../hooks/useToggle'
import logout from '../utils/logout'
import Logo from './Logo'
import PropTypes from 'prop-types'
const TopAppBar = ({toggleSidebar}) => {

    const navigation = useNavigation()
    const navigate = useNavigate()
    const {user} = useLoaderData()
    
    const params = useParams()

    const [showMenu,setShowMenu] = useToggle()

    const isNormalLoad = navigation.state === 'loading' && navigator.formData
    return (
        <header className='relative flex justify-between items-center h-16 px-4 '>
            <div className="flex items-center gap-1">
                <IconBtn icon="menu" title="Menu" classes='lg:hidden' onClick={toggleSidebar}  />
                <Logo classes='lg:hidden' />              
            </div>
            {params.conversationId  && (
                <IconBtn icon='delete' classes='ms-auto me-1 lg:hidden' />
            )}
            <div className="menu-wrapper">
                <IconBtn onClick={setShowMenu}>
                    <Avatar name={user.name} />
                </IconBtn>
                <Menu classes={showMenu ? 'active' : ''}>
                    <MenuItem labelText='Log out' onClick={() => logout(navigate)} />
                </Menu>
            </div>
            <AnimatePresence>
                {isNormalLoad && <LinearProgress classes='absolute top-full left-0 right-0 z-10' />}
            </AnimatePresence>
        </header>
    )
}   


TopAppBar.propTypes = {
    toggleSidebar:PropTypes.func
}
export default TopAppBar