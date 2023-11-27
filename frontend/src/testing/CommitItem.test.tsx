import CommitItem from "../components/CommitItem";
import { Commit } from "../interfaces/commits.interface";
import { render, screen, getNodeText } from '@testing-library/react'

describe('Commit Item Test', () => {
    const mockCommit: Commit = {
        commitAuthor: {
            email: "guillermoandrada@gmail.com",
            avatar_url: 'https://example.com/avatar.png',
            login: 'GuilloSGit',
        },
        commitDetails: {
            commitDate: '2023-09-04T21:35:16Z',
            message: 'Test commit message',
            node_id: 'testNodeId',
        },
    };

    test("should have a profile picture with Alt Text with the user name on it", () => {
        render(<CommitItem commit={mockCommit} />);
        expect(screen.getByAltText(`GuilloSGit's avatar`)).toBeDefined();
    });

    test("should NOT have a profile picture with Alt Text with the other name on it", () => {
        render(<CommitItem commit={mockCommit} />);
        const profilePicture = screen.queryByAltText("Otra cosa's avatar");
        expect(profilePicture).toBeNull();
    });

    test("should get node text correctly", () => {
        render(<CommitItem commit={mockCommit} />);
        const commitMessage = screen.getByText(/Test commit message/i);
        const text = getNodeText(commitMessage);
        expect(text).toBe("Test commit message");
    });

    /**
     * Assuming that in some requirement it is specified that headers
     * cannot be as large as H1, H2,
     * and at the same time, they cannot be as small as H6.
     */
    test('should compute heading level correctly', () => {
        render(<CommitItem commit={mockCommit} />);
        const headingElements = screen.getAllByRole('heading');
        const headingLevel = parseInt(headingElements[0].tagName.substring(1), 10);
        expect(headingLevel).toBeGreaterThanOrEqual(3);
        expect(headingLevel).toBeLessThanOrEqual(5);
    });

});
