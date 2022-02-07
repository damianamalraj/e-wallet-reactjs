import { useState } from "react";
import "./App.scss";
import Home from "./view/Home";
import AddCard from "./view/AddCard";

let array = [
    {
        cardNumber: "2347567645654565",
        cardholder: "Daniel Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "bitcoin",
    },
    {
        cardNumber: "8657567645654565",
        cardholder: "Matthew Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "blockchain",
    },
    {
        cardNumber: "8767864645654565",
        cardholder: "Luka Amalraj",
        expireMonth: "2022/21",
        CCV: "987",
        vendor: "ninja",
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
        : (view = (
              <AddCard
                  newCard={(card) => {
                      array.push(card);
                  }}
                  cards={array}
                  toggle={toggleHandler}
              />
          ));

    return <div className="App"> {view} </div>;
}

export default App;
