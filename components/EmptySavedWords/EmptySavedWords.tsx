import Image from 'next/image'
import React from 'react'

function EmptySavedWords() {
  return (
    <div className='empty-saved-words'>
        <Image alt='empty' src={""} />
        <h2>No Saved Words</h2>
        <p>You haven&apos;t saved any words yet, search for your favorite words and save it</p>
    </div>
  )
}

export default EmptySavedWords