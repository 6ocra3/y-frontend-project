import styles from "./styles.module.css";
import {FeedbackForm} from "../../components/FeedbackForm";

export const Popover = ({active, setActive}) => {
    if (active) {
        document.body.style.overflow = "hidden"
    }

    else {
        document.body.style.overflow = "scroll";
    }

    return (
        <div className={active ? styles.modal + " " + styles["modal-active"] : styles.modal}
             onClick={() => setActive(false)}
        >
            <FeedbackForm setActive={setActive}/>
        </div>
    )
}
