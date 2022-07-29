import React from "react";
import styles from "./Formcontrol.module.css"
type PropsType = {

}
export const Textarea = (props: PropsType) => {
    return (
        <div className={styles.formControl}>
            <textarea {...props}/>
        </div>
    );
};
