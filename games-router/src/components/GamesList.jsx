import GamesItem from "./GamesItem";

const GanesList = ({games}) => {
    return (
        <>
        {games.map((games, index) => (
            <GamesItem key={index} title={games.title} year={games.year} genre={games.genre} platform={games.platform} company={games.company} />
        ))}
        </>
    );
};

export default GanesList;