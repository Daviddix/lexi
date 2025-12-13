import "./SavedWords.css"
import SingleSavedWord from "../SingleSavedWord/SingleSavedWord"
import backIcon from "./assets/back-icon.svg"
import Image from "next/image"
import EmptySavedWords from "../EmptySavedWords/EmptySavedWords"

const SavedWords = () => {
  return (
    <div className="saved-words">
    <div className="saved-words-header">
        <button className="clickable">
          <Image alt="back icon" src={backIcon} />
        </button>
        <h2>SAVED WORDS</h2>
    </div>

    <div className="h-divider"></div>

    {/* <div className="single-saved-words-container">
        <SingleSavedWord />
    </div> */}

    <EmptySavedWords />
    
    </div>
  )
}

export default SavedWords