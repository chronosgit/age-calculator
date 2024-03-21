import { Link } from "react-router-dom";
import styles from "./page-not-found.module.css";
import UnderlinedText from "@components/ui/underlined-text/UnderlinedText";

const PageNotFound = () => {

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>
                404
            </h1>

            <p className={styles.message}>
                Such page doesn&apos;t exist...
            </p>

            <Link to="/" className={styles.link}>
                <UnderlinedText
                    as="span"
                    text="Go to home"
                    textHoverColor="var(--clr-purple)"
                    lineColor="var(--clr-purple)"
                    animationDuration="0.2s"
                />
            </Link>
        </div>
    );
};

export default PageNotFound;