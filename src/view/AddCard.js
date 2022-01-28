import "../App.scss";
import "./AddCard.scss";

const AddCard = (props) => {
    return (
        <div className="AddCard">
            <h1>add a new bank card</h1>
            <p>new card</p>
            <button onClick={props.toggle}>add card</button>
        </div>
    );
};

export default AddCard;
