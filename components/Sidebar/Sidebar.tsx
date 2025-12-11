import Image from 'next/image'
import "./Sidebar.css"
import closeIcon from "./assets/close-icon.svg"
import placeholderImage from "./assets/placeholder-image.png"
import bookmarkIcon from "./assets/bookmark-icon.svg"
import speakerIcon from "./assets/speaker-icon.svg"
import flagIcon from "./assets/flag.png"
import bulbIcon from "./assets/bulb-circle.svg"
import xIcon from "./assets/x-icon.svg"
import facebookIcon from "./assets/facebook-icon.svg"
import redditIcon from "./assets/reddit-icon.svg" 
import copyIcon from "./assets/copy-icon.svg"

function Sidebar() {
  return (
    <div className="sidebar-overlay overlay-bg">
       <aside>
        <button className='close clickable' >
            <Image src={closeIcon} alt='close' />
        </button>

        <div className="sidebar-contents">
            <div className="sidebar-image-and-heading">
                <div className="sidebar-image-container">
                <Image className='main-sidebar-image' alt='image of' src={placeholderImage}/>
                </div>

                <div className='sidebar-heading'>
                    <div className="sidebar-heading-top">
                        <div className="left">
                            <h1>Slave</h1>
                            <small>/slav/</small>
                            <Image src={speakerIcon} alt='speaker icon'/>
                        </div>

                        <div className="right">
                            <button className='clickable'>
                                <Image
                                src={bookmarkIcon}
                                alt="bookmark icon"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="h-divider"></div>

                    <div className="sidebar-heading-bottom">
                        <Image 
                        className='flag-icon'
                        src={flagIcon} alt='flag icon'/>

                        <span className="v-divider"></span>

                        <div className="chip"><p>6th Century</p></div>

                        <span className="v-divider"></span>

                        <div className="chip"><p>Culture</p></div>
                    </div>
                </div>
            </div>

            <div className="other-sidebar-content">
                <div className="meaning">
                    <h4>ORIGINAL MEANING</h4>

                    <p>A person that comes from the Slavic group</p>
                </div>

                <div className="meaning">
                    <h4>MODERN MEANING</h4>

                    <p>A person who is without freedom of any sort i.e movement, expression</p>
                </div>

                <div className="sidebar-insights">
                    <div className="insight-long"></div>

                    <div className="insight-text">
                         <Image alt='bulb icon' src={bulbIcon}/>

                    <p>From Medieval Latin sclavus, referred to Slavic people who during early medieval conflicts, were frequently captured and traded across Europe, eventually giving rise to the generalized term for an unfree person held in servitude </p>
                    </div>
                   
                </div>

                <div className="sidebar-language-history">
                    <h2 className='small-heading'>LANGUAGE HISTORY</h2>

                    <div className="sidebar-timeline">
                        <div className="timeline-dates">
                            <p>11AD</p>
                            <p>11AD</p>
                            <p>11AD</p>
                            <p>11AD</p>
                            <p>11AD</p>
                        </div>

                        <div className="line-with-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>

                        <div className="timeline-cards-container">
                            <div className="timeline-card">
                                <h5>Slav</h5>

                                <p>Proto Slavic</p>
                            </div>

                             <div className="timeline-card">
                                <h5>Slav</h5>

                                <p>Proto Slavic</p>
                            </div>

                             <div className="timeline-card">
                                <h5>Slav</h5>

                                <p>Proto Slavic</p>
                            </div>

                             <div className="timeline-card">
                                <h5>Slav</h5>

                                <p>Proto Slavic</p>
                            </div>

                             <div className="timeline-card">
                                <h5>Slav</h5>

                                <p>Proto Slavic</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-divider"></div>

                <div className="sidebar-sources">
                    <h2 className='small-heading'>SOURCES</h2>

                    <div className="sources-container">
                        <ul>
                            <li><a href="#">World Encyclopedia</a></li>
                            <li><a href="#">World Encyclopedia</a></li>
                            <li><a href="#">World Encyclopedia</a></li>
                        </ul>
                    </div>
                </div>

                <div className="h-divider"></div>

                <div className="sidebar-share">
                    <h2>SHARE</h2>

                    <div className="share-links">
                        <button>
                            <Image alt='x icon' src={xIcon} />
                        </button>
                        
                        <button>
                            <Image alt='facebook icon' src={facebookIcon} />
                        </button>

                        <button>
                            <Image alt='reddit icon' src={redditIcon} />
                        </button>

                        <button className='copy'>
                            <Image src={copyIcon} alt='copy icon'/>
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside> 
    </div>
    
  )
}

export default Sidebar