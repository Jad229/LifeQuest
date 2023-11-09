export default function Home() {
  return (
    <main className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, User</h2>
        <div>Image goes here</div>
      </div>
      <section className="text-center flex-col">
        <h1>Quest log</h1>
        <div>
          <div className="flex justify-between items-center bg-black text-white">
            <h3>Quest Title</h3>
            <button className="bg-red-600 p-2">+</button>
          </div>
        </div>
      </section>
    </main>
  );
}
