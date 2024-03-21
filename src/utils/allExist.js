import doesExist from "./doesExist";

const allExist = (...values) => {
    return values.every(v => doesExist(v));
};

export default allExist;