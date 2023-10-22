export default function getDisabledDaysFromPast(allowedDays: number) {
    const today = new Date(); // Get the current date
    today.setHours(0, 0, 0, 0); // Set the time to the beginning of the day

    const yesterday = new Date(today); // Create a copy of today's date
    yesterday.setDate(today.getDate() - 1); // Subtract 1 day to get yesterday

    // Create an array with the disabled date range for the past
    const disabledDays = [
        { from: new Date(0), to: yesterday },
    ];

    // Calculate the end date for the future range (up to 1/1/2050)
    const futureEndDate = new Date(2030, 0, 1);

    // Calculate the start date for the future range (allowedDays from today)
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + allowedDays);

    // Ensure the future range doesn't exceed 1/1/2050
    if (nextWeek > futureEndDate) {
        return disabledDays; // If allowedDays extends beyond 1/1/2050, only return past disabled days.
    }

    // Create an array with the disabled date range for the future
    const futureDisabledDays = [
        { from: nextWeek, to: futureEndDate },
    ];

    return [...disabledDays, ...futureDisabledDays];
}
