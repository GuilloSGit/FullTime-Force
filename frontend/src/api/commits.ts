import { Commit } from '../interfaces/commits.interface';

const API = 'http://localhost:3000/api';

export const getCommitsRequest = () =>
    fetch(`${API}/commits`, {
        method: 'GET'
    });
