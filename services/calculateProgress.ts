export function calculateProgress(
  currentExperience: number,
  experienceNeededForNextLevel: number
) {
  if (currentExperience === 0 && experienceNeededForNextLevel === 0) return 100;

  let progress: number =
    (currentExperience / experienceNeededForNextLevel) * 100;
  return Math.min(progress, 100); // Ensure progress doesn't exceed 100%
}
