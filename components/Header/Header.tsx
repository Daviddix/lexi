function Header() {
  return (
    <div className="header">
        <div className="header-left">
            <button>Menu</button>
            <h3>Lexi</h3>
        </div>

            <form action="" className="header-searchbar">
                <input type="text" placeholder="Search for any word" />
                <button className="randomize"> random icon </button>
            </form>

        <div className="header-right">
            <div className="header-tabs">
                <button>Words</button>
                <button>Phrases</button>
            </div>
        </div>
    </div>
  )
}

export default Header