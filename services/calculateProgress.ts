export function calculateProgress(
  currentExperience: number,
  experienceNeededForNextLevel: number
) {
  if (currentExperience >= experienceNeededForNextLevel) return 0;
  if (currentExperience === 0 && experienceNeededForNextLevel === 0) return 0;

  let progress: number =
    (currentExperience / experienceNeededForNextLevel) * 100;
  return Math.min(progress, 100); // Ensure progress doesn't exceed 100%
}
