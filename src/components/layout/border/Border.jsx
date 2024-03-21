import curlyArrow from "@assets/images/curly-arrow.png";
import styles from "./border.module.css";
import resolveDate from "@utils/resolveDate";

const Border = ({
    date,
    clearInputs,
    changeOutputsTo
}) => {

    const {day, month, year} = date;

    const onCircleClick = () => {
        try {
            const {
                day: resDay, month: resMonth, year: resYear,
            } = resolveDate(day, month, year);
            
            changeOutputsTo(resDay, resMonth, resYear);

            clearInputs();
        } catch(err) {
            console.error(err);
        }
    };

    const onCircleKeyDown = (e) => {
        if(e.key === "Enter") {
            onCircleClick();
        }
    };

    return (
        <div className={styles.border}>
            <div className={styles.border_line} />

            <div 
                tabIndex="0"
                className={styles.border_circle}
                onClick={onCircleClick}
                onKeyDown={onCircleKeyDown}
            >
                <img 
                    src={curlyArrow} 
                    alt="arrow" 
                    className={styles.border_circle_img}
                />
            </div>
        </div>
    );
};

export default Border;