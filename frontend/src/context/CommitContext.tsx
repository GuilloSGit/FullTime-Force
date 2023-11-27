import { createContext, useEffect, useState } from 'react';
import { Commit } from '../interfaces/commits.interface';
import { getCommitsRequest } from '../api/commits';

export const CommitContext = createContext<CommitContextValue>({
    commits: []
});

interface Props {
    children: React.ReactNode;
}

interface CommitContextValue{
    commits: Commit[];
}

export const CommitProvider: React.FC<Props> = ({children}) => {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        getCommitsRequest()
        .then((response) => response.json())
        .then((data) => setCommits(data.commits))
    },[])

    return(
        <CommitContext.Provider value={{commits}}>
            {children}
        </CommitContext.Provider>
    )
}