import CommitList from '../components/CommitsList';
import { render, screen } from '@testing-library/react';

describe('Commits List Test', () => {

    test("should have a divition with data-testId named commit-item", () => {
        render(<CommitList />);
        expect(screen.getByTestId('commit-item')).toBeDefined();
    });

    test('should render commits items with correct data', () => {
        render(<CommitList />);
        expect(screen.findByText("Test commit message")).toBeDefined();
        expect(screen.findByText("Another commit message")).toBeDefined();

        expect(render.length).toBeGreaterThanOrEqual(1);

        // logDOM();
      });
});
