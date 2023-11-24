import { useEffect, useState } from 'react';
import { getCommitsRequest } from '../api/commits';
import { Commit } from '../interfaces/commits.interface';

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
        <div>
            {Object.entries(groupCommitsByLogin()).map(([login, commitsForLogin]) => (
                <div key={login}>
                    <h3 className="text-2xl font-bold text-left block my-2">{login}</h3>
                    <img
                        src={commitsForLogin[0]?.commitAuthor.avatar_url}
                        alt={`${login}'s avatar`}
                        style={{ width: '50px', height: '50px' }} />
                    <ol>
                        {commitsForLogin.map((commit) => (
                            <div key={commit.commitDetails.node_id}>
                                <li>{commit.commitDetails.message}</li>
                            </div>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
}

export default CommitsList;
