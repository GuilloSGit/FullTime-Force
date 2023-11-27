import { useContext } from 'react'
import { CommitContext } from './CommitContext'

export const useCommits = () => {
    const context = useContext(CommitContext)
    if (!context) throw new Error('useCommit must be used within a CommitProvider')
    return context
}