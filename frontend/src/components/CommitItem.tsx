import { Commit } from "../interfaces/commits.interface";
import { formatCommitDate } from '../utils/dateUtils';

interface Props {
    commit: Commit
}

function CommitItem({ commit }: Props) {
    return (
        <div >
            <div className='flex flex-row mt-5 align-middle gap-4 ml-1 select-none' >
                <img
                    src={commit?.commitAuthor.avatar_url}
                    alt={`${commit?.commitAuthor.login}'s avatar`}
                    style={{ width: '35px', borderRadius: '50%' }} />
                <h3 className='text-white text-center text-sm font-bold mt-2 overflow-clip' style={{ maxWidth: '80px', paddingBottom: '4px' }}>{commit?.commitAuthor.login}</h3>
            </div>
            <span className='text-gray-600 text-xs ml-1 select-none'>
                Commited on: {formatCommitDate(commit?.commitDetails.commitDate)}
            </span>
            <div key={commit?.commitDetails.node_id}
                className='bg-gray-900 p-1 flex justify-between hover:cursor-text rounded'>
                <h5 className="text-green-400 font-mono overflow-clip">{commit?.commitDetails.message}</h5>
            </div>
            <span className="text-gray-800 ml-1 select-none" style={{ fontSize: '.5rem' }}>
                Node ID: {commit?.commitDetails.node_id}
            </span>
        </div>
    )
};

export default CommitItem;