import doesExist from "./doesExist";

const allZeros = (s) => {
    if(!doesExist(s)) return false;

    if(typeof s === "number") {
        return s === 0;
    }

    let res = true;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== '0') {
            res = false;
        }
    }

    return res;
};

export default allZeros;