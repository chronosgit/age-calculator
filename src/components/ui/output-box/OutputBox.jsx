import styles from "./output-box.module.css";

const OutputBox = ({
    value, label
}) => {

    if(value === undefined || value === null) return <></>;
    if(!label) return <></>;

    return (
        <div className={styles.output_box}>
            <p className={styles.output_value}>
                {value}
            </p>

            <p className={styles.output_label}>
                {label}
            </p>
        </div>
    );
};

export default OutputBox;