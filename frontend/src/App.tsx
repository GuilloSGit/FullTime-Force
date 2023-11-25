import CommitsList from "./components/CommitsList";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="bg-zinc-900 text-white flex flex-col justify-center">
      <Nav/>
      <CommitsList/>
    </div>
  )  
};

export default App;