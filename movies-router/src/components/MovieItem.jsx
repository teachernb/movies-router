const MovieItem = ({ title, year, genre, description }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.year}>{year}</p>
            <p className={styles.genre}>{genre}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default MovieItem;