import React, { useState, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import close from '../../assets/close.svg'
import NavContent from './NavContent'
import MiscNavItems from './MiscNavItems'

export default function MobileNav(props) {

    const { logo, name, theme } = props

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(prev => !prev)
    }

    return (
        <header>
            <div className="burger-icon" onClick={handleClick}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <nav className='mobile-nav' style={{ display: isClicked ? 'flex' : 'none' }}>
                <ReactSVG
                    src={close}
                    onClick={() => handleClick()}
                    beforeInjection={(svg) => {
                        svg.classList.add('close-btn')
                    }}
                />
                <div className="logos">
                    <img src={logo} alt="Analog Studio Logo" />
                    <h3 className='logo'>{name}</h3>
                </div>
                <MiscNavItems theme={theme} />
                <hr />
                <NavContent
                    theme={theme}
                    style="mobile-content-container"
                />
            </nav>
            <div
                className="nav-overlay"
                style={{ display: isClicked ? 'block' : 'none' }}
                onClick={handleClick}
            ></div>
        </header>
    )
}