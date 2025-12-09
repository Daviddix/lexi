import SingleSavedWord from "../SingleSavedWord/SingleSavedWord"

const Saved = () => {
  return (
    <div className="saved-words">
    <div className="saved-words-header">
        <button>Back</button>
        <h2>SAVED WORDS</h2>
    </div>

    <div className="single-saved-words-container">
        <SingleSavedWord />
    </div>
    </div>
  )
}

export default Saved