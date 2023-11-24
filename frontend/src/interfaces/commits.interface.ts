export interface Commit {
    commitAuthor: {
        login: string;
        avatar_url: string;
        email: string
    },
    commitDetails: {
        node_id: string;
        commitDate: string;
        message: string
    },
}