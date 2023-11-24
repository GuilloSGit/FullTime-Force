import CommitsList from "./components/CommitsList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-2xl font-bold text-center block my-2">GitHub Repo History</h1>
        <CommitsList />
      </div>
    </div>
  )  
}

export default App;