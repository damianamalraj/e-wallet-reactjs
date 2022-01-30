import "../App.scss";
import "./Home.scss";
import Card from "../components/Card";

const Home = (props) => {
    const card = props.cards.map((card) => {
        return <Card card={card} key={card.cardNumber} />;
    });
    return (
        <div className="Home">
            <h1>E-Wallet</h1>
            <p className="active">Active Card</p>
            <Card
                card={props.cards[0]}
                key={props.cards[0].cardNumber}
                className="active-card"
            />

            <div className="card-list">{card}</div>
            <button onClick={props.toggle}>add a new card</button>
        </div>
    );
};

export default Home;
