// This is the quest type for the frontend
export type Quest = {
  id: string;
  title: string;
  skill: string;
  description?: string | null | undefined;
  difficulty: string;
  category: string;
};
