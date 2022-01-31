import "../App.scss";
import "./Home.scss";
import Card from "../components/Card";
import { useState } from "react";

const Home = (props) => {
    let [curent, setCurent] = useState(props.cards[0]);

    const card = props.cards.map((card) => {
        const clickHandler = () => {
            console.log("wow");
            setCurent(card);
        };
        return (
            <article onClick={clickHandler} key={card.cardNumber}>
                <Card card={card} />
            </article>
        );
    });

    return (
        <div className="Home">
            <h1>E-Wallet</h1>
            <p className="active">Active Card</p>
            <Card
                card={curent}
                key={curent.cardNumber}
                className="active-card"
            />

            <div className="card-list">{card}</div>
            <button onClick={props.toggle}>add a new card</button>
        </div>
    );
};

export default Home;
