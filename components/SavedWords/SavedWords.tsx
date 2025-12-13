import "./SavedWords.css"
import SingleSavedWord from "../SingleSavedWord/SingleSavedWord"
import backIcon from "./assets/back-icon.svg"
import Image from "next/image"
import EmptySavedWords from "../EmptySavedWords/EmptySavedWords"
import ErrorSavedWords from "../ErrorSavedWords/ErrorSavedWords"

type showSavedWordsProp = {
    goBack: (value: boolean) => void
}

const SavedWords = ({ goBack }: showSavedWordsProp) => {
  return (
    <div className="saved-words">
    <div className="saved-words-header">
        <button className="clickable" onClick={() => goBack(false)}>
          <Image alt="back icon" src={backIcon} />
        </button>
        <h2>SAVED WORDS</h2>
    </div>

    <div className="h-divider"></div>

    <div className="single-saved-words-container">
        <SingleSavedWord />
    </div>

    {/* <EmptySavedWords /> */}

    {/* <ErrorSavedWords /> */}

    </div>
  )
}

export default SavedWords