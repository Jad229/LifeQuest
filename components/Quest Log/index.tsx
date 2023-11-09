import QuestTile from "./QuestTile";

function QuestLog() {
  return (
    <section className="text-center flex-col">
      <h1>Quest log</h1>
      <div>
        <QuestTile title="First Quest" />
      </div>
    </section>
  );
}

export default QuestLog;
