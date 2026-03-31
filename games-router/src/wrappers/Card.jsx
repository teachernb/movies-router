const Card = ({ children }) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            maxWidth: "400px",
            margin: "20px auto"
        }}>
            {children}
        </div>
    );
}

export default Card;