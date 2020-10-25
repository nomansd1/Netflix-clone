import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <span><h1>NETFLIX</h1></span>
            </div>

            <div className="header__right">
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header
