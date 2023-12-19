import { Card } from "@/components/ui/card";
import CompleteQuest from "@/components/forms/CompleteQuest";
import QuestDetails from "./QuestDetails";
interface QuestTileProps {
  title: string;
  description?: string | null | undefined;
  questId?: string | null | undefined;
}

function QuestTile({
  title,
  description,
  questId,
}: QuestTileProps): JSX.Element {
  return (
    <Card className="flex justify-between items-center rounded-md p-4">
      <QuestDetails description={description}>{title}</QuestDetails>
      <CompleteQuest questId={questId} />
    </Card>
  );
}

export default QuestTile;
