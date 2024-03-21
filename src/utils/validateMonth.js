const validateMonth = (month) => {
    if(typeof month !== "number") {
        throw Error("Provided month is not a number.");
    }

    if(month <= 0 || month >= 13) {
        throw Error("Month must be in range between 1 to 12.");
    }
};

export default validateMonth;