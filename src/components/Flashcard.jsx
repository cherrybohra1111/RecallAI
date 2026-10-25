import { useState } from 'react'

function Flashcard({ question, answer }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false)

    return (
        <section className="flashcard">
            <p className="flashcard-label">QUESTION</p>

            <h2>{question}</h2>

            {isAnswerVisible && (
                <div className="flashcard-answer">
                    {answer}
                </div>
            )}

            <button onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
                {isAnswerVisible ? 'Hide Answer' : 'Reveal Answer'}
            </button>

        </section>
    )
}

export default Flashcard