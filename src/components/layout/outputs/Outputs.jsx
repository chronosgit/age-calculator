import OutputBox from "@components/ui/output-box/OutputBox";
import styles from "./outputs.module.css";

const Outputs = ({outputs}) => {

    if(!outputs) return <></>;

    return (
        <div className={styles.outputs}>
            {
                outputs.map((o, i) => 
                    <OutputBox
                        key={i}
                        value={o.value}
                        label={o.label}
                    />
                )
            }
        </div>
    );
};

export default Outputs;