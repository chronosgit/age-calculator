import { useState } from "react";

const useInputs = () => {

    /* Setup */
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    /* Actions */
    const changeDayTo = (newDay) => {
        if(day.length === 2 && newDay.length >= 2) {
            return;
        }

        setDay(newDay);
    };

    const changeMonthTo = (newMonth) => {
        if(month.length === 2 && newMonth.length >= 2) {
            return;
        }

        setMonth(newMonth);
    };

    const changeYearTo = (newYear) => {
        if(year.length === 4 && newYear.length >= 4) {
            return;
        }

        setYear(newYear);
    };

    const clearAll = () => {
        setDay("");
        setMonth("");
        setYear("");
    };

    /* Return */
    const dayObj = {
        value: day,
        label: "day",
        ph: "DD",
        changeTo: changeDayTo,
    };

    const monthObj = {
        value: month,
        label: "month",
        ph: "MM",
        changeTo: changeMonthTo,
    };

    const yearObj = {
        value: year,
        label: "year",
        ph: "YYYY",
        changeTo: changeYearTo,
    };

    const inputs = [dayObj, monthObj, yearObj];

    return {
        inputs,
        clearAll
    };
};

export default useInputs;