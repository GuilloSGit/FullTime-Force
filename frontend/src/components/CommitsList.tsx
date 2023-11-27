import { useCommits } from '../context/useCommits';
import CommitItem from './CommitItem';

function CommitsList() {
    const { commits } = useCommits()

    return (
        <div data-testid="commit-item" className="bg-gray-900 mx-auto max-w-screen-md p-1 md:min-w-min" style={{ minWidth: '550px', marginTop:'60px' }}>
            {
                commits.map((commit) => (
                    <div key={commit.commitDetails.node_id} className='flex justify-evenly align-middle col-2 p-1'>
                        <div className='w-1/2' style={{ minWidth: '75%' }}>
                            <ol >
                                {
                                    <div key={commit.commitDetails.node_id} style={{ borderLeft: '2px solid #999' }} className='border-solid border-2 border-gray-800 rounded p-1'>
                                        <CommitItem
                                            commit={commit}
                                            key={commit.commitDetails.node_id}
                                        />
                                    </div>
                                }
                            </ol>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default CommitsList;
