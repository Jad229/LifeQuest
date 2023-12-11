import { Card } from "@/components/ui/card";
import CompleteQuest from "@/components/forms/CompleteQuest";
import QuestDetails from "./QuestDetails";
interface QuestTileProps {
  title: string;
  description?: string | null | undefined;
}

function QuestTile({ title, description }: QuestTileProps): JSX.Element {
  return (
    <Card className="flex justify-between items-center rounded-md p-4">
      <QuestDetails description={description}>{title}</QuestDetails>
      <CompleteQuest />
    </Card>
  );
}

export default QuestTile;
