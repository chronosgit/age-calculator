import { useState } from "react";

const useOutputs = () => {

    /* Setup */

    const initVal = "--";

    const [day, setDay] = useState(initVal);
    const [month, setMonth] = useState(initVal);
    const [year, setYear] = useState(initVal);

    /* Actions */

    const changeOutputsTo = (newDay, newMonth, newYear) => {
        setDay(newDay);
        setMonth(newMonth);
        setYear(newYear);
    };

    /* Return */

    const dayObj = {
        value: day,
        label: "days",
    };

    const monthObj = {
        value: month,
        label: "months",
    };

    const yearObj = {
        value: year,
        label: "years",
    };

    const outputs = [dayObj, monthObj, yearObj];

    return {
        outputs,
        changeOutputsTo,
    };
};

export default useOutputs;