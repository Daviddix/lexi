import Image from 'next/image'
import "./SingleSavedWord.css"
import deleteIcon from "./assets/delete-icon.svg"
import flagIcon from "./assets/flag.png"

function SingleSavedWord() {
  return (
    <button className="single-saved-word">
                <div className="single-saved-word-top">
                    <h3>Slave</h3>
    
                    <button className='transparent'>
                      <Image src={deleteIcon} alt='delete' />
                    </button>
                </div>
    
                <div className="single-saved-word-bottom">
                    <Image alt="flag" src={flagIcon} />
    
                    <span>1300&apos;s</span>
                    <span>Culture</span>
                </div>
            </button>
  )
}

export default SingleSavedWord