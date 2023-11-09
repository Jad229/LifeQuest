interface QuestTileProps {
  title: string;
}
function QuestTile({ title }: QuestTileProps): JSX.Element {
  return (
    <div className="flex justify-between items-center bg-black text-white">
      <h3>{title}</h3>
      <button className="bg-red-600 p-2">+</button>
    </div>
  );
}

export default QuestTile;
