export interface Quest{
  id: number;
  title: string;
  expGain: number;
  skills: string[];
  description: string;
  category: string;
  date?: Date;
}