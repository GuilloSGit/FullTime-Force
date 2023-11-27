const URL = import.meta.env.VITE_API || 'http://localhost:3000'
const API = `${URL}/api`;

export const getCommitsRequest = () =>
    fetch(`${API}/commits`, {
        method: 'GET'
    });