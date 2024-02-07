import QuestTile from "./QuestTile";
import { Quest } from "@/types/quest";
import AddQuest from "@/components/AddQuest";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExistingQuest extends Quest {
  id: string;
}

interface QuestLogProps {
  title: string;
  quests: ExistingQuest[];
  searchParams?: Record<string, string> | null | undefined;
}

function QuestLog({ title, quests, searchParams }: QuestLogProps): JSX.Element {
  const dailyQuests = quests.filter((quest) => quest.category === "dailies");
  const habitQuests = quests.filter((quest) => quest.category === "habits");
  const todoQuests = quests.filter((quest) => quest.category === "todos");

  return (
    <Card className="flex-auto w-full">
      <CardHeader className="gap-2">
        <CardTitle className="font-bold text-3xl mb-5 text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          Complete your quests to gain experience!
        </CardDescription>

        <AddQuest searchParams={searchParams} />
        <hr className="my-3 opacity-30" />
      </CardHeader>
      <CardContent className="">
        <Tabs className="flex flex-col justify-center items-center gap-3">
          <TabsList className="flex gap-10 w-full ">
            <TabsTrigger className="font-bold text-lg " value="dailies">
              Dailies
            </TabsTrigger>
            <TabsTrigger className="font-bold text-lg " value="habits">
              Habits
            </TabsTrigger>
            <TabsTrigger className="font-bold text-lg " value="todos">
              Todos
            </TabsTrigger>
          </TabsList>
          <TabsContent className="flex flex-col gap-3 w-full" value="dailies">
            {dailyQuests.map((quest) => (
              <QuestTile
                key={quest.id}
                questId={quest.id}
                title={quest.title}
                description={quest.description}
              />
            ))}
          </TabsContent>
          <TabsContent className="flex flex-col gap-3 w-full" value="habits">
            {habitQuests.map((quest) => (
              <QuestTile
                key={quest.id}
                questId={quest.id}
                title={quest.title}
                description={quest.description}
              />
            ))}
          </TabsContent>
          <TabsContent className="flex flex-col gap-3 w-full" value="todos">
            {todoQuests.map((quest) => (
              <QuestTile
                key={quest.id}
                questId={quest.id}
                title={quest.title}
                description={quest.description}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default QuestLog;
