import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useFormStatus } from "react-dom";
import { Stat } from "@/types/stat";

export default function FormFields({ stats }: { stats: Stat[] }) {
  const { pending } = useFormStatus();
  const skillOptions = stats.map((stat) => {
    return (
      <SelectItem key={stat.id} value={stat.id as string}>
        {stat.name}
      </SelectItem>
    );
  });

  return (
    <div className="flex justify-center items-center">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <div className="flex flex-col flex-grow gap-3">
          <div className="form-group ">
            <Label>Title</Label>
            <Input
              name="title"
              id="title"
              type="text"
              placeholder="Add a title"
            />
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
        </div>
      )}
    </div>
  );
}
