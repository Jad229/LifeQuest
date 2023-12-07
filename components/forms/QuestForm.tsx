import { createQuestAction } from "@/app/actions";

type Props = {};

export default async function QuestForm({}: Props) {
  async function addQuest(data: FormData) {
    "use server";
    const title: string = data.get("title") as string;
    const description: string = data.get("description") as string;
    const difficulty: string = data.get("difficulty") as string;
    const category: string = data.get("category") as string;

    if (!title || !description || !difficulty || !category) return;

    await createQuestAction(title, description, difficulty, category);
  }

  return (
    <form
      action={addQuest}
      className="flex flex-col gap-2 py-6 mx-auto bg-white text-black"
    >
      <div className="form-group ">
        <label>Title</label>
        <input name="title" id="title" type="text" placeholder="Add a title" />
      </div>
      <div className="form-group ">
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Add a description"
        />
      </div>
      <div className="form-group ">
        <label>Difficulty</label>
        <select className="text-black" name="difficulty" id="difficulty">
          <option value="hard">Hard</option>
          <option value="medium">Medium</option>
          <option value="easy">Easy</option>
        </select>
      </div>
      <div className="form-group ">
        <label>Tags</label>
        <select className="text-black" name="skill" id="skill">
          <option>Fitness & Health</option>
          <option>Work</option>
          <option>Chores</option>
          <option>Personal</option>
          <option>Social</option>
          <option>Creativity</option>
        </select>
      </div>
      <div className="form-group ">
        <label>Tags</label>
        <select className="text-black" name="category" id="category">
          <option>Habits</option>
          <option>Todos</option>
          <option>Dailies</option>
        </select>
      </div>
      <button type="submit" className="btn bg-green-500">
        Submit
      </button>
    </form>
  );
}
