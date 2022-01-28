import "./App.scss";
import Home from "./view/Home";
import AddCard from "./view/AddCard";
import { useState } from "react";

let array = [
    {
        cardNumber: "2347567645654565",
        cardholder: "Daniel Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "Bitcoin Inc",
    },
    {
        cardNumber: "8657567645654565",
        cardholder: "Matthew Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "Blockchain Inc",
    },
    {
        cardNumber: "8767864645654565",
        cardholder: "Luka Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "Ninja Bank",
    },
];
function App() {
    const [show, setShow] = useState(false);
    let view = null;
    const toggleHandler = () => {
        setShow(!show);
    };
    show === false
        ? (view = <Home cards={array} toggle={toggleHandler} />)
        : (view = <AddCard cards={array} toggle={toggleHandler} />);

    return <div className="App">{view}</div>;
}

export default App;
