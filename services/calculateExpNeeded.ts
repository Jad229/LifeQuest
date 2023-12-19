export default function calculateExpNeeded(level: number) {
  if (level <= 0) return 0;

  return (level + (level - 1)) * 50;
}
