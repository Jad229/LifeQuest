import { Quest } from "./quest";

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  quests: Quest[];
  level: number;
  xp: number;
};

export type { User };
