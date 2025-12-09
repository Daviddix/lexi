import Image from 'next/image'
import React from 'react'

function Menu() {
  return (
    <div className='menu'>
        <div className="menu-header">
            <h2>Lexi</h2>
            <button>Close button</button>
        </div>

        <div className="h-divider"></div>

        <div className="menu-items-container">
            <button className="menu-item">
                <Image alt="icon" src={""} />
                <h3>SAVED WORDS</h3>
            </button>

            <button className="menu-item">
                <Image alt="icon" src={""} />
                <h3>GIVE FEEDBACK</h3>
            </button>

            <button className="menu-item">
                <Image alt="icon" src={""} />
                <h3>SUPPORT</h3>
            </button>
        </div>
    </div>
  )
}

export default Menu