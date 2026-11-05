import { useState } from 'react'
import './App.css'
import Header from './components/HeaderTemp.jsx'
import Flashcard from './components/Flashcard.jsx'


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

  const totalCards=cards.length;
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  return (
    <>
      <Header />
        <main>
          {cards.length === 0 ? (
            <p>No cards yet</p>
          ) : (
            <>
            <p>Card {currentCardIndex + 1} of {totalCards}</p>
            <Flashcard 
              question = {cards[currentCardIndex].question}
              answer = {cards[currentCardIndex].answer}
              key={cards[currentCardIndex].id}
            />
            <button onClick={()=>
              setCurrentCardIndex(currentCardIndex-1)}
              disabled={currentCardIndex === 0 }
            >Prev</button>
            
            <button onClick={()=>
                setCurrentCardIndex(currentCardIndex+1)}
                disabled={currentCardIndex >= totalCards - 1}
              >Next</button>
            </>
          )}



          <button onClick={()=>{
            const starterCard = { question: "New Question", answer: "New Answer" , id: crypto.randomUUID()};

            setCards([...cards,starterCard]);
            setCurrentCardIndex(cards.length);
          }
          }>Add Card</button>

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

        </main>
    </>
  )
}

export default App
