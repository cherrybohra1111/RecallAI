import { useState } from 'react'

function Flashcard() {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false)

    return (
        <section className="flashcard">
            <p className="flashcard-label">QUESTION</p>

            <h2>What is an operating system?</h2>

            {isAnswerVisible && (
                <div className="flashcard-answer">
                    An operating system manages computer hardware and software resources.
                </div>
            )}

            <button onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
                {isAnswerVisible ? 'Hide Answer' : 'Reveal Answer'}
            </button>
            
        </section>
    )
}

export default Flashcard