import InputBox from "@components/ui/input-box/InputBox";
import styles from "./inputs.module.css";

const Inputs = ({
    inputs
}) => {

    if(!inputs) return <></>;

    return (
        <div className={styles.inputs}>
            {
                inputs.map((input, i) =>
                    <InputBox
                        key={i}
                        id={input.label}
                        value={input.value}
                        labelText={input.label}
                        ph={input.ph}
                        maxSymbols={inputs.maxSymbols}
                        changeTo={input.changeTo}
                    />
                )
            }
        </div>
    );
};

export default Inputs;