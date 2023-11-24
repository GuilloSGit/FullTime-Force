import fetch from 'node-fetch';
import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';
import { TransformedCommit } from './commits.interface';
import { config } from 'dotenv';
config();
 
@Injectable()
export class CommitsService {
    private readonly githubToken: string;
    constructor() {
        this.githubToken = process.env.GITHUB_TOKEN || '';
    }

    async getCommits(): Promise<TransformedCommit[]> {
        const octokit = new Octokit({
            auth: this.githubToken,
            request: {
                fetch: fetch
            }
        });

        try {
            const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: 'GuilloSGit',
                repo: 'FullTime-Force',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            const commits = response.data;
            const transformedCommit = commits.map((commit) => this.transformCommit(commit));
            return transformedCommit;
            
        } catch (error) {
            console.error('Error al obtener los commits:\n', error.message);
            return [];
        }
    }

    private transformCommit(commit: any): TransformedCommit {
        return {
            commitAuthor: {
                login: commit.author.login,
                avatar_url: commit.author.avatar_url,
                email: commit.commit.author.email
            },
            commitDetails: {
                commitDate: commit.commit.author.date,
                message: commit.commit.message,
                node_id: commit.node_id
            },
        };
    }
}
