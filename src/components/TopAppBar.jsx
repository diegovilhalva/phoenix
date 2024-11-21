import React from 'react'
import { IconBtn } from './Button'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { logoDark, logoLight } from "../assets/assets"
import Avatar from './Avatar'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { LinearProgress } from "./Progress"
import { AnimatePresence } from 'motion/react'
import { useToggle } from '../hooks/useToggle'
import logout from '../utils/logout'
const TopAppBar = () => {

    const navigation = useNavigation()
    const navigate = useNavigate()

    const [showMenu,setShowMenu] = useToggle()

    const isNormalLoad = navigation.state === 'loading' && navigator.formData
    return (
        <header className='relative flex justify-between items-center h-16 px-4 '>
            <div className="flex items-center gap-1">
                <IconBtn icon="menu" title="Menu" classes='lg:hidden'  />
                <Link to="/" className='min-w-max max-w-max h-[24px] lg:hidden ' >
                    <img src={logoLight} width={133} height={24} alt="Phoenix logo" className='dark:hidden' />
                    <img src={logoDark} width={133} height={24} alt="Phoenix logo" className='hidden dark:block' />
                </Link>
            </div>
            <div className="menu-wrapper">
                <IconBtn onClick={setShowMenu}>
                    <Avatar name="Diego" />
                </IconBtn>
                <Menu classes={showMenu ? 'active' : ''}>
                    <MenuItem labelText='Log out' onClick={() => logout(navigate)} />
                </Menu>
            </div>
            <AnimatePresence>
                {isNormalLoad && <LinearProgress />}
            </AnimatePresence>
        </header>
    )
}

export default TopAppBar