import { useRef } from "react";
import Card from "../wrappers/Card";
import styles from "./MovieForm.module.css";

const MovieForm = ({ gatherData }) => {

    const titleRef = useRef();
    const yearRef = useRef();
    const genreRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const year = yearRef.current.value;
        const genre = genreRef.current.value;
        const description = descriptionRef.current.value;

        console.log(title, year, genre, description);
        gatherData({ title, year, genre, description });
    }
    
    return (
        <Card>
            <div className={styles.container}>
                <h2 className={styles.title}>Utazás megtervezése</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="title">
                            A film címe
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

                    <label className={styles.label} htmlFor="genre">
                        Műfaj
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        id="genre"
                        ref={genreRef}
                    />


                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="description">
                            Rövid leírás
                        </label>
                        <textarea
                            className={styles.textarea}
                            id="description"
                            ref={descriptionRef}
                            cols={30}
                            rows={5}
                        ></textarea>
                    </div>

                    <button className={styles.button} type="submit">
                        Küldés
                    </button>
                </form>
            </div>
        </Card >
    );
};

export default MovieForm;