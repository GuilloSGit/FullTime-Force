export function formatCommitDate(commitDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
    };

    const formattedDate = new Date(commitDate).toLocaleString('en-En', options);
    return formattedDate;
}