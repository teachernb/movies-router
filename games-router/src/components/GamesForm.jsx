import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import styles from "./GamesForm.module.css";

const GamesForm = ({ gatherData }) => {

    const titleRef = useRef();
    const yearRef = useRef();
    const genreRef = useRef();
    const companyRef = useRef();

    const [platform, setPlatform] = useState('PC')

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const year = yearRef.current.value;
        const genre = genreRef.current.value;
        const company = companyRef.current.value;

        console.log(title, year, genre, platform, company);
        gatherData({ title, year, genre, company, platform  });
    }

    return (
        <Card>
            <div className={styles.container}>
                <h2 className={styles.title}>Kedvenc játékaim listája</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="title">
                            A játék neve
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="title"
                            ref={titleRef}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="year">
                            Gyártás éve
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="year"
                            ref={yearRef}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="genre">
                            Műfaj
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="genre"
                            ref={genreRef}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="company">
                            Fejlesztő cég
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="company"
                            ref={companyRef}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="platform">
                            Platform
                        </label>
                        <select
                            className={styles.select}
                            id="platform"
                            onChange={(e) => setPlatform(e.target.value)}
                        >
                            <option value="PC">PC</option>
                            <option value="XBox">XBox</option>
                            <option value="PS">PS</option>
                        </select>
                    </div>

                    <button className={styles.button} type="submit">
                        Küldés
                    </button>
                </form>
            </div>
        </Card >
    );
};

export default GamesForm;