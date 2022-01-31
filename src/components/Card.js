import "../App.scss";
import "./Card.scss";
import wifi from "../assets/wifi.svg";
import chip from "../assets/chip.svg";
import bitcoin from "../assets/bitcoin.svg";
import blockchain from "../assets/blockchain.svg";
import evil from "../assets/evil.svg";
import ninja from "../assets/ninja.svg";

const Card = (props) => {
    let img;
    if (props.card.vendor === "bitcoin") {
        img = <img src={bitcoin} alt="" />;
    } else if (props.card.vendor === "blockchain") {
        img = <img src={blockchain} alt="" />;
    } else if (props.card.vendor === "evil") {
        img = <img src={evil} alt="" />;
    } else if (props.card.vendor === "ninja") {
        img = <img src={ninja} alt="" />;
    }

    return (
        <div className={`Card ${props.card.vendor}`}>
            <div className="first-section">
                <div>
                    <img src={wifi} alt="" />
                    <img src={chip} alt="" />
                </div>
                <div>{img}</div>
            </div>
            <h2>
                {props.card.cardNumber.slice(0, 4) +
                    " " +
                    props.card.cardNumber.slice(4, 8) +
                    " " +
                    props.card.cardNumber.slice(8, 12) +
                    " " +
                    props.card.cardNumber.slice(12, 16)}
            </h2>
            <div className="third-section">
                <div>
                    <span>cardholder name</span>
                    <p>{props.card.cardholder}</p>
                </div>
                <div>
                    <span>valid until</span>
                    <p>{props.card.expireMonth}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
