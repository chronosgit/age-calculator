import getMonthsToDaysMap from "./getMonthsToDaysMap";

const validateDay = (day, month, isLeapYear) => {
    const monthsToDaysMap = getMonthsToDaysMap(isLeapYear);
    const validDaysNumber = monthsToDaysMap[month];

    if(day <= 0 || day > validDaysNumber) {
        throw Error(`Day must be in range between 1 to ${validDaysNumber}.`);
    }
};

export default validateDay;