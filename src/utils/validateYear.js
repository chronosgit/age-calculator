const validateYear = (year) => {
    if(typeof year !== "number") {
        throw Error("Provided year is not a number.");
    }

    const curYear = new Date().getFullYear();
    if(year <= 0 || year > curYear) {
        throw Error(`Year must be in range between 1 to ${curYear}.`);
    }
};

export default validateYear;