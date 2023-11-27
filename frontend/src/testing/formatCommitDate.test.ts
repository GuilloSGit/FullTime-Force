import { formatCommitDate } from '../utils/dateUtils';

describe('formatCommitDate Function Test', () => {
  test('should format commit date correctly', () => {
    const commitDate = '2023-09-04T21:35:16Z';
    const formattedDate = formatCommitDate(commitDate);
    expect(formattedDate).toMatch(/\w{3} \d{1,2}, \d{4}, \d{1,2}:\d{2} [APapMm]{2}/);
  });

  test('should handle an invalid date string gracefully', () => {
    const invalidDate = 'invalid-date-string';
    const formattedDate = formatCommitDate(invalidDate);
    expect(formattedDate).toBe('Invalid Date');
  });
  
  test('should handle null input gracefully', () => {
    const nullDate = null;
    const formattedDate = formatCommitDate(nullDate||"");
    expect(formattedDate).toBe('Invalid Date');
  });

});