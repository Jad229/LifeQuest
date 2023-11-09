interface QuestTileProps {
  title: string;
}
function QuestTile({ title }: QuestTileProps): JSX.Element {
  return (
    <div className="flex justify-between items-center bg-blue-500 border-white rounded-full p-1 shadow-lg">
      <h3>{title}</h3>
      <button className="p-2 rounded-r-full border-2 bg-green-500">Info</button>
    </div>
  );
}

export default QuestTile;
