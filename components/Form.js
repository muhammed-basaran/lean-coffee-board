export default function Form({ onSubmit }) {
  function submit(event) {
    event.preventDefault();
    onSubmit({
      thoughts: event.target.elements.thoughts.value,
      name: event.target.elements.name.value,
    });
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          name="thoughts"
          required
          placeholder="Type your thoughts..."
          id="thoughts"
          type="text"
        ></input>
        <input
          name="name"
          id="name"
          type="text"
          required
          placeholder="Your name..."
        ></input>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
