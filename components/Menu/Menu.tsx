"use client"

import Image from 'next/image'
import "./Menu.css"
import closeIcon from "./assets/close-icon.svg"
import feedbackIcon from "./assets/feedback-icon.svg"
import bookmarkIcon from "./assets/bookmark-icon-menu.svg"
import SavedWords from '../SavedWords/SavedWords'
import { useState } from 'react'

function Menu() {
    const [showSavedWords, setShowSavedWords] = useState(false);

  return (
    <div className="menu-overlay">
    <div className='menu-content'>
       {!showSavedWords && <>
        <div className="menu-header">
            <h2>Lexi</h2>
            <button className='clickable'>
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
        </>}

        {showSavedWords && <SavedWords goBack={setShowSavedWords} />}
    </div>
    </div>
  )
}

export default Menu