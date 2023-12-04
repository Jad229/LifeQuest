type Props = {};

function QuestForm({}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 px-12 py-6 mx-auto w-3/4 md:w-1/2 lg:w-1/3 bg-white text-black"
    >
      <div className="form-group ">
        <label>Title</label>
        <input type="text" placeholder="Add a title" />
      </div>
      <div className="form-group ">
        <label>Description</label>
        <textarea placeholder="Add a title" />
      </div>
      <div className="form-group ">
        <label>Difficulty</label>
        <select className="text-black" name="difficulty" id="difficulty">
          <option>Hard</option>
          <option>Medium</option>
          <option>Easy</option>
        </select>
      </div>
      <div className="form-group ">
        <label>Tags</label>
        <select className="text-black" name="tag" id="tag">
          <option>Fitness & Health</option>
          <option>Work</option>
          <option>Chores</option>
          <option value="">Personal</option>
          <option value="">Social</option>
          <option value="">Creativity</option>
        </select>
      </div>
      <button className="bg-red-600 p-2">Close</button>
    </form>
  );
}

export default QuestForm;
