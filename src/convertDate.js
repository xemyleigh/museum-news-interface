const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
};

export default (date, optoins = defaultOptions) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('ru-RU', optoins)
}