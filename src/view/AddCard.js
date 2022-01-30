import "../App.scss";
import "./AddCard.scss";
import { useState } from "react";
import Card from "../components/Card";

const AddCard = (props) => {
    const [cardInput, setCardInput] = useState({
        cardNumber: "",
        cardholder: "",
        expireMonth: "",
        CCV: "",
        vendor: "",
    });

    const cardNumberChangeHandler = (event) => {
        setCardInput({
            ...cardInput,
            cardNumber: event.target.value,
        });
    };
    const cardholderChangeHandler = (event) => {
        setCardInput({
            ...cardInput,
            cardholder: event.target.value,
        });
    };
    const expireMonthChangeHandler = (event) => {
        setCardInput({
            ...cardInput,
            expireMonth: event.target.value,
        });
    };
    const CCVChangeHandler = (event) => {
        setCardInput({
            ...cardInput,
            CCV: event.target.value,
        });
    };
    const vendorChangeHandler = (event) => {
        setCardInput({
            ...cardInput,
            vendor: event.target.value,
        });
    };
    return (
        <div className="AddCard">
            <h1>add a new bank card</h1>
            <p className="new">new card</p>
            <Card card={cardInput} />
            <br />
            <br />
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    props.newCard(cardInput);
                    props.toggle();
                }}
            >
                <div>
                    <p>Card Number</p>
                    <input
                        value={cardInput.cardNumber}
                        type="text"
                        maxLength={16}
                        onChange={cardNumberChangeHandler}
                    />
                </div>
                <br />
                <div>
                    <p>cardholder name</p>
                    <input
                        maxLength="25"
                        type="text"
                        value={cardInput.cardholder}
                        onChange={cardholderChangeHandler}
                    />
                    <br />
                </div>
                <section>
                    <div>
                        <p>valid thru</p>
                        <input
                            type="month"
                            value={cardInput.expireMonth}
                            onChange={expireMonthChangeHandler}
                        />
                        <br />
                    </div>
                    <div>
                        <p>ccv</p>
                        <input
                            maxLength="3"
                            type="text"
                            value={cardInput.CCV}
                            onChange={CCVChangeHandler}
                        />
                    </div>
                </section>

                <div>
                    <p>vendor</p>
                    <select
                        type="options"
                        value={cardInput.vendor}
                        onChange={vendorChangeHandler}
                    >
                        <option></option>
                        <option value="bitcoin">Bitcoin Inc</option>
                        <option value="blockchain">Blockchain Inc</option>
                        <option value="evil">Evil Corp</option>
                        <option value="ninja">Ninja Bank</option>
                    </select>
                    <br />
                </div>
                {/* <button>Submit</button> */}
                <button>add card</button>
            </form>
        </div>
    );
};

export default AddCard;
