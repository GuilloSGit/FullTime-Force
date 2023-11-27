import { getCommitsRequest } from '../api/commits';

describe('get commits from API (backend)', () => {
    test('should get an array of commits', async () => {
        const answer = await getCommitsRequest();
        expect(answer).toBe(typeof(Object)) // Array === Object
    })
})