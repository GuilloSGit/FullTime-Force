import { useEffect, useState } from 'react';
import { commitsLength } from '../api/commits';

function Nav() {
  const [newCommitsCount, setNewCommitsCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);
  const [newCommit, setNewCommit] = useState(false);
  const [clicked, setClicked] = useState(false);

  /* Inicio la variable initialCount */
  const fetchCurrentCount = async () => {
    try {
      setInitialCount(await commitsLength());
    } catch (error) {
      console.log('Error obtaining current count of commits: ', error)
    }
  };
  
  /* Comparo con la variable newCommitCount */
  const checkNewCommits = async () => {
    try {
      setNewCommitsCount(await commitsLength())
      /* Si hay nuevos manda a true newCommit */
      if (initialCount < newCommitsCount) {
        console.log("New commit!");
        setNewCommit(true);
        setInitialCount(newCommitsCount);
      /* Si no hay nuevos */
      } else {
        setNewCommit(false);
        setNewCommitsCount(initialCount);
      }
      /* Si falla la cuenta */
    } catch (error) {
      console.log('Error obtaining new count of commits: ', error)
    }
  }

  useEffect(() => {
    checkNewCommits();
    const intervalId = setInterval(checkNewCommits, 30000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (clicked) {
      fetchCurrentCount();
      setNewCommit(false);
      setClicked(false);
      setNewCommitsCount(0);
      setInitialCount(initialCount)
    }
  }, [initialCount, clicked]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-1 ${newCommit ? 'bg-red-500' : ''}`}>
      <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../src/assets/logo.png" className="h-8" alt="GitHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FullTime Force Challenge</span>
        </a>
        {newCommit && (
          <div className="flex items-center hover:cursor-pointer hover:text-slate-300">
            <div className={`w-68 h-6 mr-1 pr-1 bg-gray-300 hover:bg-gray-600 text-xs rounded-full flex items-center justify-center  ${newCommit ? 'text-green-300 bg-black':''}`}>
              <button onClick={handleClick} disabled={clicked}>
                {
                  newCommit && <span className='text-red-700 text-xs m-1'>New Commit! - {newCommitsCount}</span>
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
