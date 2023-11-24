export interface Commit {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: {
        url: string;
        author: {
            name?: string;
            email?: string;
            date?: string;
        };
        committer: {
            name?: string;
            email?: string;
            date?: string;
        };
        message: string;
        comment_count: number;
        tree: {
            sha: string;
            url: string;
        };
        verification?: {
            verified: boolean;
            reason: string;
            signature: string;
            payload: string;
        };
    };
}

export interface TransformedCommit {
    commitAuthor: {
        login: string,
        avatar_url: string,
        email: string,
    },
    commitDetails: {
        node_id: string,
        commitDate: Date,
        message: string,
    },
}
