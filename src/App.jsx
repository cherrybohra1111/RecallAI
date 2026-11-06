import { useState } from 'react'
import './App.css'
import Header from './components/HeaderTemp.jsx'
import Flashcard from './components/Flashcard.jsx'
import CardEditor from './components/CardEditor.jsx'

function App() {
  const [cards , setCards] = useState([
    { question: "What does the acronym HTTP stand for in a website address?",
      answer: "Hypertext Transfer Protocol",
      id: crypto.randomUUID()
    },
      { question: "What is the primary characteristic of a closure in JavaScript?",
      answer: "A closure gives you access to an outer function’s scope from an inner function, preserving those variables even after the outer function finishes executing.",
      id: crypto.randomUUID()
    },
    { question: "What is an Operation Syetem?",
      answer: "An operating system manages computer hardware and software resources.",
      id: crypto.randomUUID()
    }
  ])

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false)

  const totalCards=cards.length;
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  return (
    <>
      <Header />
        <main>
          {isEditing || isAdding ? (
            <CardEditor
              initialQuestion={isAdding ? '' : cards[currentCardIndex].question}
              initialAnswer={isAdding ? '' : cards[currentCardIndex].answer}
              onSave={(question, answer) => {

                if (isAdding){
                  const newCard = {
                    id: crypto.randomUUID(),
                    question, 
                    answer,
                  }

                  setCards([...cards,newCard])
                  setCurrentCardIndex(cards.length)
                }
                else {
                  const updatedCards = [...cards]
                  updatedCards[currentCardIndex] = {
                    ...updatedCards[currentCardIndex],
                    question,
                    answer,
                  }
                  setCards(updatedCards)
                }
                setIsAdding(false)
                setIsEditing(false)
              }}
              onCancel={() => {
                setIsAdding(false)
                setIsEditing(false)
              }}
            />
            ) : cards.length === 0 ? (
              <>
                <p>No cards yet</p>
                <button onClick={()=>setIsAdding(true)}>
                  Add Card
                </button>
                
                </>
              ) : (
                <>
                <p>Card {currentCardIndex + 1} of {totalCards}</p>
                <Flashcard 
                  question = {cards[currentCardIndex].question}
                  answer = {cards[currentCardIndex].answer}
                  key={cards[currentCardIndex].id}
                />
                <button onClick={() =>{
                  setIsEditing(true)
                }}
                >Edit Card</button>
    
                <button onClick={()=>
                  setCurrentCardIndex(currentCardIndex-1)}
                  disabled={currentCardIndex === 0 }
                >Prev</button>
                
                <button onClick={()=>
                    setCurrentCardIndex(currentCardIndex+1)}
                    disabled={currentCardIndex >= totalCards - 1}
                >Next</button>

                <button onClick={() => setIsAdding(true)}>
                  Add Card
                </button>

                <button onClick={()=>{
                  const updatedCards = cards.filter((_, i) => i !== currentCardIndex);
                  setCards(
                    updatedCards
                  );
                  setCurrentCardIndex(
                    Math.max(0, Math.min(updatedCards.length - 1, currentCardIndex))
                  )}}
                    disabled={totalCards ===  0}
                >Delete Card</button>
                </>
              )}

        </main>
    </>
  )
}

export default App
