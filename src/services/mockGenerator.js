export function generateMockCards(notes){
    return notes
        .split(/\r?\n/)
        .map((line)=>line.trim())
        .filter(Boolean)
        .slice(0, 10)
        .map((line, index) =>({
            id: crypto.randomUUID(),
            question: `What is the key point in note ${index + 1}?`,
            answer: line,
        }))
}