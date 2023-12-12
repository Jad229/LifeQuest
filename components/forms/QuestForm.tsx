import { createQuestAction } from "@/actions/quests";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";

export default async function QuestForm() {
  return (
    <form
      action={createQuestAction}
      className="flex flex-col gap-2 py-6 mx-auto bg-white text-black"
    >
      <div className="form-group ">
        <Label>Title</Label>
        <Input name="title" id="title" type="text" placeholder="Add a title" />
      </div>
      <div className="form-group ">
        <Label>Description</Label>
        <Textarea
          name="description"
          id="description"
          placeholder="Add a description"
        />
      </div>
      <div className="form-group ">
        <Label>Difficulty</Label>
        <Select name="difficulty">
          <SelectTrigger>-------</SelectTrigger>
          <SelectContent>
            <SelectItem value="hard">Hard</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="form-group ">
        <Label>Related Skill</Label>
        <Select name="skill">
          <SelectTrigger>-------</SelectTrigger>
          <SelectContent>
            <SelectItem value="strength">Strength</SelectItem>
            <SelectItem value="wisdom">Wisdom</SelectItem>
            <SelectItem value="agility">Agility</SelectItem>
            <SelectItem value="charisma">Charisma</SelectItem>
            <SelectItem value="cooking">Cooking</SelectItem>
            <SelectItem value="coding">Coding</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="form-group ">
        <Label>Quest Type</Label>
        <Select name="category">
          <SelectTrigger>-------</SelectTrigger>
          <SelectContent>
            <SelectItem value="habits">Habits</SelectItem>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="dailies">Dailies</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="btn text-black bg-green-500">
        Submit
      </Button>
    </form>
  );
}
