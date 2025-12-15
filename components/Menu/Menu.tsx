"use client"

import Image from 'next/image'
import "./Menu.css"
import closeIcon from "./assets/close-icon.svg"
import feedbackIcon from "./assets/feedback-icon.svg"
import bookmarkIcon from "./assets/bookmark-icon-menu.svg"
import SavedWords from '../SavedWords/SavedWords'
import { useState } from 'react'

type MenuProps = {
    setShowMenu: (show: boolean) => void;
}

function Menu({ setShowMenu }: MenuProps) {
    const [showSavedWords, setShowSavedWords] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        // Wait for animation to finish before removing component
        setTimeout(() => {
            setShowMenu(false);
        }, 500); // Match the animation duration
    };

  return (
    <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
    <div className={`menu-content ${isClosing ? 'slide-out' : ''}`}>
        <div className={`menu-inner ${showSavedWords ? 'show-saved' : ''}`}>
            {/* Main Menu Panel */}
            <div className="menu-main">
                <div className="menu-header">
                    <h2>Lexi</h2>
                    <button onClick={handleClose} className='clickable'>
                        <Image src={closeIcon} alt='close' />
                    </button>
                </div>

                <div className="h-divider"></div>

                <div className="menu-items-container">
                    <button
                        onClick={() => setShowSavedWords(true)}
                        className="menu-item transparent">
                        <Image alt="bookmark icon" src={bookmarkIcon} />
                        <h3>SAVED WORDS</h3>
                    </button>

                    <button className="menu-item transparent">
                        <Image alt="icon" src={feedbackIcon} />
                        <h3>GIVE FEEDBACK</h3>
                    </button>

                    <button className="menu-item transparent">
                        <h3>SUPPORT</h3>
                    </button>
                </div>
            </div>

            {/* Saved Words Panel */}
            <div className="menu-saved">
                <SavedWords goBack={setShowSavedWords} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Menu