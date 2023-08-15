import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'

import { ReactComponent as CrownLogo } from '../../logo/crown.svg'
import { UserContext } from '../../context/userContext'

import { signOutUser } from '../../utils/firebase/Firebase'

import './Navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOPS
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            Sing out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Sign In
                        </Link>
                    )}

                    {/* <Link className='nav-link' to = '/signUp'>
                        Sign Up
                    </Link> */}
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Navigation
