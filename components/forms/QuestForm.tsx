import { createQuestAction } from "@/actions/quests";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Session } from "@/types/session";
import { authOptions } from "@/utils/auth";
import { getUserStats } from "@/services/stats";
import { getServerSession } from "next-auth";

export default async function QuestForm() {
  const session: Session | null = await getServerSession(authOptions);
  const stats = await getUserStats(session?.user?.id as string);

  const skillOptions = stats.map((stat) => {
    return (
      <SelectItem key={stat.id} value={stat.id}>
        {stat.name}
      </SelectItem>
    );
  });
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
          <SelectTrigger>
            <SelectValue placeholder="Select a difficulty" />
          </SelectTrigger>
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
          <SelectTrigger>
            <SelectValue placeholder="Select a skill" />
          </SelectTrigger>
          <SelectContent>{skillOptions}</SelectContent>
        </Select>
      </div>
      <div className="form-group ">
        <Label>Quest Type</Label>
        <Select name="category">
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
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
