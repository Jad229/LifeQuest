import QuestTile from "./QuestTile";
import { Quest } from "@/types/quest";
import AddQuest from "@/components/AddQuest.tsx";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface QuestLogProps {
  title: string;
  quests: Quest[];
  searchParams?: Record<string, string> | null | undefined;
}

function QuestLog({ title, quests, searchParams }: QuestLogProps): JSX.Element {
  const dailyQuests = quests.filter((quest) => quest.category === "Dailies");
  const habitQuests = quests.filter((quest) => quest.category === "Habits");
  const todoQuests = quests.filter((quest) => quest.category === "Todos");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl mb-5">{title}</CardTitle>
        <CardDescription>
          Complete your quest to gain experience!
        </CardDescription>

        <AddQuest searchParams={searchParams} />
        <hr className="my-3 opacity-30" />
      </CardHeader>
      <CardContent>
        <Tabs>
          <TabsList>
            <TabsTrigger value="dailies">Dailies</TabsTrigger>
            <TabsTrigger value="habits">Habits</TabsTrigger>
            <TabsTrigger value="todos">Todos</TabsTrigger>
          </TabsList>
          <TabsContent value="dailies">
            {dailyQuests.map((quest) => (
              <QuestTile
                key={quest.id}
                title={quest.title}
                description={quest.description}
              />
            ))}
          </TabsContent>
          <TabsContent value="habits">
            {habitQuests.map((quest) => (
              <QuestTile
                key={quest.id}
                title={quest.title}
                description={quest.description}
              />
            ))}
          </TabsContent>
          <TabsContent value="todos">
            {todoQuests.map((quest) => (
              <QuestTile
                key={quest.id}
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
