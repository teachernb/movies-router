import Card from "../wrappers/Card";
import styles from "./MovieItem.module.css";

const MovieItem = ({ title, year, genre, description }) => {
    return (
        <Card className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.year}>{year}</p>
            <p className={styles.genre}>{genre}</p>
            <p className={styles.description}>{description}</p>
        </Card>
    );
};

export default MovieItem;