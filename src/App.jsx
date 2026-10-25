import { useState } from 'react'
import './App.css'
import Header from './components/HeaderTemp.jsx'
import Flashcard from './components/Flashcard.jsx'


function App() {
  const cards = [
    { question: "What does the acronym HTTP stand for in a website address?",
      answer: "Hypertext Transfer Protocol"
    },
      { question: "What is the primary characteristic of a closure in JavaScript?",
      answer: "A closure gives you access to an outer function’s scope from an inner function, preserving those variables even after the outer function finishes executing."
    },
    { question: "What is an Operation Syetem?",
      answer: "An operating system manages computer hardware and software resources."
    }
  ]
  const totalCards=cards.length;

  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  return (
    <>
      <Header />
        <main>

          <Flashcard 
            question = {cards[currentCardIndex].question}
            answer = {cards[currentCardIndex].answer}
          />

          <button onClick={()=>
              setCurrentCardIndex(currentCardIndex+1)
            }
            disabled={currentCardIndex >= totalCards - 1}
            >Next</button>
    
        </main>
    </>
  )
}

export default App
