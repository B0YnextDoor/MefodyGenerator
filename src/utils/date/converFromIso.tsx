export const convertDateTime = (isoDateTime: string) => {
    const date = new Date(isoDateTime);
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    };

    return date.toLocaleDateString("ru-RU", options);
};
