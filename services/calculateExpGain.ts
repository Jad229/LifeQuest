export const calculateExpGain = (difficulty: string, userLevel: number) => {
  switch (difficulty) {
    case "easy":
      return 50;
    case "medium":
      return 100;
    case "hard":
      return 150;
    default:
      return 0;
  }
};
