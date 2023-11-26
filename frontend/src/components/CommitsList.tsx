import { useEffect, useState } from 'react';
import { getCommitsRequest } from '../api/commits';
import { Commit } from '../interfaces/commits.interface';
import CommitItem from './CommitItem';

function CommitsList() {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        getCommitsRequest()
            .then((response) => response.json())
            .then((data) => setCommits(data.commits))
            .catch((error) => console.error('Error fetching commits:', error));
    }, []);

    const groupCommitsByLogin = () => {
        const groupedCommits: { [key: string]: Commit[] } = {};

        commits.forEach((commit) => {
            const login = commit.commitAuthor.login;

            if (groupedCommits[login]) {
                groupedCommits[login].push(commit);
            } else {
                groupedCommits[login] = [commit];
            }
        });

        return groupedCommits;
    };

    return (
        <div className="bg-gray-900 mt-10 mx-auto max-w-screen-md p-3 md:min-w-min" style={{minWidth: '650px'}}>
            {Object.entries(groupCommitsByLogin()).map(([login, commitsForLogin]) => (
                <div key={login} className='flex justify-evenly align-middle col-2 p-3'>
                    <div className='flex flex-col mt-5 align-middle'>
                        <img
                            src={commitsForLogin[0]?.commitAuthor.avatar_url}
                            alt={`${login}'s avatar`}
                            style={{ width: '75px', borderRadius: '50%' }} />
                        <h3 className='text-white text-center text-sm font-bold mt-2 overflow-clip' style={{ maxWidth: '80px'}}>{login}</h3>
                    </div>
                    <div className='w-1/2' style={{ minWidth: '75%'}}>
                        <ol >
                            {
                                commitsForLogin.map(
                                    (commit, index) => (
                                        <div key={index} style={{ borderLeft: '3px solid #999' }} className='mb-2 mt-3 border-solid border-2 border-gray-800 rounded p-2'>
                                            <CommitItem
                                                commit={commit}
                                                key={index}
                                            />
                                        </div>
                                    )
                                )
                            }
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommitsList;
