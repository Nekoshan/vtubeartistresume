import styles from "./styles.module.scss";
import ModelBox from "../../components/ModelBox/ModelBox";

function MainPage() {
    return (
        <div className={styles.body}>
            <ModelBox />
        </div>
    );
}

export default MainPage;
