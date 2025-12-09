import React from 'react'

function ErrorSavedWords() {
  return (
    <div className='error-saved-words'>
        <h2>Couldn&apos;t get Saved Words</h2>
        <p>Seems like an error occurred while we tried to fetch your saved words. This could be due to a network error or an issue on our side</p>

        <button>Retry</button>
    </div>
  )
}

export default ErrorSavedWords