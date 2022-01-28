import "./Card.scss";

const Card = (props) => {
    return (
        <div className="Card">
            <h1>{props.card.cardNumber}</h1>
        </div>
    );
};

export default Card;
