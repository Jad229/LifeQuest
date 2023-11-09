import QuestTile from "./QuestTile";

function QuestLog() {
  return (
    <section className="text-center flex-col">
      <h1 className="text-2xl mb-5">Quest log</h1>
      <div className="flex flex-col mx-auto gap-2 justify-center lg:w-1/2">
        <QuestTile title="First Quest" />
        <QuestTile title="Second Quest" />
        <QuestTile title="Third Quest" />
      </div>
    </section>
  );
}

export default QuestLog;
