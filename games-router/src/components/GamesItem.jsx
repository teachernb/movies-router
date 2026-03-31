import Card from "../wrappers/Card";
import styles from "./GamesItem.module.css";

const MovieItem = ({ title, year, genre, platform, company }) => {
    return (
        <Card className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.year}>{year}</p>
            <p className={styles.genre}>{genre}</p>
            <p className={styles.company}>{company}</p>
            <p className={styles.platform}>{platform}</p>
        </Card>
    );
};

export default MovieItem;