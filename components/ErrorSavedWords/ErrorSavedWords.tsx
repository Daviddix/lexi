import "./ErrorSavedWords.css"

function ErrorSavedWords() {
  return (
    <div className='error-saved-words'>

      <div className="error-saved-words-content">
        <h2>Couldn&apos;t get Saved Words</h2>
        <p>Seems like an error occurred while we tried to fetch your saved words. This could be due to a network error or an issue on our side</p>

        <button>Retry</button>
      </div>
    </div>
  )
}

export default ErrorSavedWords