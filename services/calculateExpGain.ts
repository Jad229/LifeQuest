const BASE_EXP_MULTIPLIER: number = 5;

export const calculateExpGain = (difficulty: string, level: number) => {
  if (difficulty !== "easy" && difficulty !== "medium" && difficulty !== "hard")
    return 0;

  const difficultyMultiplier: { easy: number; medium: number; hard: number } = {
    easy: 1,
    medium: 1.5,
    hard: 2,
  };

  // Calculate base experience points
  const base_exp: number = level * BASE_EXP_MULTIPLIER;

  // Calculate difficulty multiplier
  const expGain =
    base_exp *
    difficultyMultiplier[difficulty as keyof typeof difficultyMultiplier];

  return expGain;
};
