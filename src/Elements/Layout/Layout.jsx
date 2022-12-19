import {Header} from "../Header";
import {Footer} from "../Footer";
import styles from "./styles.module.css";

export const Layout = (props) => {

    return (
        <div>
            <Header/>
            <main className={styles.main}>{props.children}</main>
            <Footer/>
        </div>
    )
}
