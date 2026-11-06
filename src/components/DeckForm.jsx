export default function DeckForm({onGenerate}) {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    onGenerate({
      title: formData.get('title'),
      subject: formData.get('subject'),
      notes: formData.get('notes'),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Deck title
        <input name="title" type="text" required />
      </label>

      <label>
        Subject
        <input name="subject" type="text" required />
      </label>

      <label>
        Notes
        <textarea name="notes" required />
      </label>

      <button type="submit">Generate Flashcards</button>
    </form>
  )
}