import { useState } from "react";

export default function CardEditor({
    initialQuestion,
    initialAnswer,
    onSave,
    onCancel,
}){
    const [draftQuestion, setDraftQuestion] = useState(initialQuestion)
    const [draftAnswer, setDraftAnswer] = useState(initialAnswer)
        
    return (
        <div>
            <input
                value={draftQuestion}
                onChange={(e) => setDraftQuestion(e.target.value)}
            />

            <textarea
                value={draftAnswer}
                onChange={(e) => setDraftAnswer(e.target.value)}
            />
            
            <button onClick={()=>  onSave(draftQuestion, draftAnswer)}>
                Save Changes
            </button>

            <button onClick={onCancel}>
                Cancel Changes
            </button>
        </div>
    )
}