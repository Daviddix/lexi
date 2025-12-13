import Image from "next/image"
import menuIcon from "./assets/menu-icon.svg"
import randomIcon from "./assets/random-icon.svg"
import searchIcon from "./assets/search-icon.svg"
import "./Header.css"

type HeaderProps = {
    setShowMenu: (show: boolean) => void;
}

function Header({ setShowMenu }: HeaderProps) {
  return (
    <div className="header">
        <div className="header-left">
            <button className="clickable" onClick={() => setShowMenu(true)}>
                <Image src={menuIcon} alt="menu icon" />
            </button>
            <h3>Lexi</h3>
        </div>

            <form action="" className="header-searchbar">
                <Image src={searchIcon} alt="search icon" />

                <input type="text" placeholder="Search for any word" />

                <button className="randomize transparent">
                    <Image src={randomIcon} alt="random icon" />
                </button>
            </form>

        <div className="header-right">
            <div className="header-tabs">
                <button>Words</button>
                <button  className="inactive">Phrases</button>
            </div>
        </div>
    </div>
  )
}

export default Header