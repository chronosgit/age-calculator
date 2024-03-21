import allExist from "./allExist";
import isYearLeap from "./isYearLeap";
import validateDay from "./validateDay";
import validateMonth from "./validateMonth";
import validateYear from "./validateYear";

const resolveDate = (day, month, year) => {
    const dayInt = Number(day);
    const monthInt = Number(month);
    const yearInt = Number(year);

    handleValidation(dayInt, monthInt, yearInt);

    const cur = new Date();
    const provided = new Date(year, monthInt - 1, day);

    const timeDiffMs = cur.getTime() - provided.getTime();
    if(timeDiffMs < 0) {
        throw Error("Provided date must be in past.");
    }   

    const dayDiff = Math.abs(cur.getDate() - provided.getDate());
    const monthDiff = Math.abs(cur.getMonth() - provided.getMonth());
    const rawYearDiff = cur.getFullYear() - provided.getFullYear();
    const res = {
        day: dayDiff,
        month: monthDiff,
        year: provided.getMonth() >= cur.getMonth() ? rawYearDiff : rawYearDiff - 1,
    };

    return {
        day: res.day, month: res.month, year: res.year
    };
};

function handleValidation(day, month, year) {
    if(!allExist(day, month, year)) throw Error("All inputs must be filled.");

    if(isNaN(day)) throw Error("Day must be a number.");
    if(isNaN(month)) throw Error("Month must be a number.");
    if(isNaN(year)) throw Error("Year must be a number.");

    if(!day || !month || !year) throw Error("Values must not be zero.");

    validateYear(year);
    validateMonth(month);
    validateDay(day, month, isYearLeap(year));
}

export default resolveDate;