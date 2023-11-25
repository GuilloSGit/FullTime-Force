import { Commit } from "../interfaces/commits.interface";
import { formatCommitDate } from '../utils/dateUtils';

interface Props {
    commit: Commit
}

function CommitItem({ commit }: Props) {
    return (
        <div >
            <span className='text-gray-600 text-xs'>
                Commited on: {formatCommitDate(commit.commitDetails.commitDate)}
            </span>
            <div key={commit.commitDetails.node_id}
                className='bg-gray-900 p-1 flex justify-between hover:cursor-pointer rounded'>
                <li className="text-green-400 font-mono overflow-clip">{commit.commitDetails.message}</li>
            </div>
        </div>
    )
};

export default CommitItem;