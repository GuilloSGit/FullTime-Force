const API = 'http://localhost:3000/api';

export const getCommitsRequest = () =>
    fetch(`${API}/commits`, {
        method: 'GET'
    });

export const commitsLength = async () => {
    try {
        await getCommitsRequest();
        const response = await getCommitsRequest();
        const data = await response.json();
        const fetchedCommitsCount = data.commits.length;
        return fetchedCommitsCount;
    } catch (error) {
        console.error('Error fetching commits count:', error);
    }
}