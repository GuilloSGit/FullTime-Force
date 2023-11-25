import { useEffect, useState } from 'react';
import { getCommitsRequest } from '../api/commits';

function Nav() {
  const [newCommitsCount, setNewCommitsCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);
  const [newCommit, setNewCommit] = useState(false)

  const fetchInitialCount = async () => {
    try {
      const response = await getCommitsRequest();
      const data = await response.json();
      setInitialCount(data.commits.length);
    } catch (error) {
      console.error('Error fetching new commits count:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchInitialCount, 20000);
    return () => clearInterval(intervalId);
  })

  useEffect(() => {
    if(newCommitsCount > initialCount) {
      setNewCommit(true);
    }
  }, [newCommitsCount]);

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-1 ${newCommit ? 'bg-red-500' : ''}`}>
      <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../src/assets/logo.png" className="h-8" alt="GitHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FullTime Force Challenge</span>
        </a>
        {newCommitsCount > 0 && (
          <div className="flex items-center hover:cursor-pointer hover:text-slate-300">
            <div className="w-6 h-6 mr-1 pr-1 bg-gray-500 hover:bg-gray-600 text-xs rounded-full flex items-center justify-center">
              {newCommitsCount}
            </div>
            <span className="text-gray-700 text-xs m-1 hover:text-slate-300">Commits</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
