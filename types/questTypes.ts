export interface Quest {
  id: string;
  title: string;
  expGain?: number;
  skill: string;
  description?: string | null | undefined;
  difficulty: string;
  category: string;
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
