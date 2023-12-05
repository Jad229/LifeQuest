import prisma from "@/database/prisma";
import { useState } from "react";
type Props = {};

export default function QuestForm({}: Props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: 0,
    category: "",
  });

  console.log(formData);
  function addQuest(e: any) {
    e.preventDefault();

    const { title, description, difficulty, category } = formData;

    prisma.quest
      .create({
        data: {
          title,
          description,
          difficulty,
          category,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  return (
    <form
      onSubmit={addQuest}
      className="flex flex-col gap-2 py-6 mx-auto bg-white text-black"
    >
      <div className="form-group ">
        <label>Title</label>
        <input
          onChange={handleChange}
          name="title"
          id="title"
          type="text"
          placeholder="Add a title"
        />
      </div>
      <div className="form-group ">
        <label>Description</label>
        <textarea
          onChange={handleChange}
          name="description"
          id="description"
          placeholder="Add a title"
        />
      </div>
      <div className="form-group ">
        <label>Difficulty</label>
        <select
          onChange={handleChange}
          className="text-black"
          name="difficulty"
          id="difficulty"
        >
          <option value={3}>Hard</option>
          <option value={2}>Medium</option>
          <option value={1}>Easy</option>
        </select>
      </div>
      <div className="form-group ">
        <label>Tags</label>
        <select
          onChange={handleChange}
          className="text-black"
          name="category"
          id="category"
        >
          <option>Fitness & Health</option>
          <option>Work</option>
          <option>Chores</option>
          <option>Personal</option>
          <option>Social</option>
          <option>Creativity</option>
        </select>
      </div>
    </form>
  );
}
