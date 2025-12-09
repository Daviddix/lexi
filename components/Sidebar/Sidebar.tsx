import Image from 'next/image'

function Sidebar() {
  return (
    <aside>
        <button className='close'>close button</button>

        <div className="sidebar-contents">
            <div className="sidebar-image-and-heading">
                <Image alt='image of' src={""}/>

                <div className='sidebar-heading'>
                    <div className="sidebar-heading-top">
                        <div className="left">
                            <h1>Slave</h1>
                            <small>/slav/</small>
                            <Image src={""} alt='speaker icon'/>
                        </div>

                        <div className="right">
                            <button>Bookmark Icon</button>
                        </div>
                    </div>

                    <div className="h-divider"></div>

                    <div className="sidebar-heading-bottom">
                        <Image src={""} alt='flag icon'/>

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
                    <Image alt='bulb icon' src={""}/>

                    <p>From Medieval Latin sclavus, referred to Slavic people who during early medieval conflicts, were frequently captured and traded across Europe, eventually giving rise to the generalized term for an unfree person held in servitude </p>
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
                            <p>11AD</p>
                        </div>

                        <div className="line-with-dots">
                            <div className="dot"></div>
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
                        <button>X</button>
                        <button>Facebook</button>
                        <button>Reddit</button>
                        <button>
                            <Image src={""} alt='copy icon'/>
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar