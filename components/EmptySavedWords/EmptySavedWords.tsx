import Image from 'next/image'
import emptyIllustration from "./assets/empty-illustration.svg"
import "./EmptySavedWords.css"

function EmptySavedWords() {
  return (
    <div className='empty-saved-words'>

      <div className="empty-saved-words-content">
        <Image alt='empty' src={emptyIllustration} />
        <h2>No Saved Words</h2>
        <p>You haven&apos;t saved any words yet, search for your favorite words and save it</p>
      </div>
    </div>
  )
}

export default EmptySavedWords