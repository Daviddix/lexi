import Image from 'next/image'

function SingleSavedWord() {
  return (
    <div className="single-saved-word">
                <div className="single-saved-word-top">
                    <h3>Slave</h3>
    
                    <button>Delete</button>
                </div>
    
                <div className="single-saved-word-bottom">
                    <Image alt="flag" src={""} />
    
                    <span>1300&apos;s</span>
                    <span>Culture</span>
                </div>
            </div>
  )
}

export default SingleSavedWord