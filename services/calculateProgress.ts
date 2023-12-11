export function calculateProgress(
  currentExperience: number,
  experienceNeededForNextLevel: number
) {
  let progress: number =
    (currentExperience / experienceNeededForNextLevel) * 100;
  return Math.min(progress, 100); // Ensure progress doesn't exceed 100%
}
