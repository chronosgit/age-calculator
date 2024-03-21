import allZeros from "@utils/allZeros";
import styles from "./input-box.module.css";

const InputBox = ({
    id, value, labelText, ph, changeTo,
}) => {

    if(!id || !labelText || !ph) return <></>;

    return (
        <div className={styles.input_box}>
            <label 
                htmlFor={id}
                className={styles.input_label}
            >
                {labelText}
            </label>
            
            <input 
                id={id}
                value={value}
                type="text"
                placeholder={ph}
                data-filled={value.length > 0 && !allZeros(value)}
                className={styles.input}
                onChange={e => changeTo(e.target.value)}
            />
        </div>
    );
};

export default InputBox;