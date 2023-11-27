import CommitsList from "./components/CommitsList";
import Nav from "./components/Nav"
import {CommitProvider} from "./context/CommitContext"

function App() {
  return (
    <div className="bg-zinc-900 text-white flex flex-col justify-center">
      <CommitProvider>
        <Nav/>
        <CommitsList/>
      </CommitProvider>
    </div>
  )  
};

export default App;