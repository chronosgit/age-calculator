import Outputs from "@components/layout/outputs/Outputs";
import Inputs from "@components/layout/inputs/Inputs";
import Border from "@components/layout/border/Border";
import useInputs from "@hooks/useInputs";
import useOutputs from "@hooks/useOutputs";
import styles from "./home.module.css";

const Home = () => {
    
    const {
        inputs, clearAll,
    } = useInputs();
    const [{value: day}, {value: month}, {value: year}] = inputs;

    const {
        outputs, changeOutputsTo
    } = useOutputs();

    return (
        <div className={styles.page}>
            <section className={styles.container}>
                <Inputs 
                    inputs={inputs}
                />

                <Border 
                    date={{day, month, year}}
                    changeOutputsTo={changeOutputsTo}
                    clearInputs={clearAll} 
                />

                <Outputs     
                    outputs={outputs}
                />
            </section>
        </div>
    );
};

export default Home;