import { createElement, useState } from "react";
import styles from "./underlined-text.module.css";
import textTags from "@utils/textTags";

const UnderlinedText = ({
    text,
    as = "p",
    textColor = "black",
    textHoverColor = "black",
    lineColor = "black",
    animationDuration = "0.3s",
}) => {

    const [textColorState, setTextColorState] = useState(textColor);

    if(!text) return <></>;
    if(!textTags.includes(as)) {
        console.error("Provided text type is not supported.");
    }

    const textStyles = {
        color: textColorState,
        transition: `all ${animationDuration} ease`,
    };

    const lineStyles = {
        backgroundColor: lineColor,
        transition: `all ${animationDuration} ease`,
    };

    const underline = (
        <div 
            className={styles.line}
            style={lineStyles}
        />
    );

    const onTextHover = () => {
        setTextColorState(textHoverColor);
    };

    const onTextUnhover = () => {
        setTextColorState(textColor);
    };

    return createElement(
        as, 
        { 
            className: styles.text,
            style: textStyles,
            onMouseOver: onTextHover,
            onMouseOut: onTextUnhover,
        },
        text, underline,
    );
};

export default UnderlinedText;