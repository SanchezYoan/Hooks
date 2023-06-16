import { useEffect, useState, useRef } from "react";
import { UserNumber } from "./components/AppContext";
import OtherComponent from "./components/OtherComponent";

function App() {
  const [myNumber, setMyNumber] = useState(0);
  const selectedNumber = useRef();

  useEffect(() => {
    console.log("Le nombre a changé !");
  }, [myNumber]);
  return (
    <UserNumber.Provider value={myNumber}>
      <div className="App">
        <p>{myNumber}</p>
        <button onClick={(e) => setMyNumber(Number(myNumber) + 1)}>
          add number +
        </button>
        <label htmlFor="">Numéro de départ</label>
        <input
          type="number"
          defaultValue={0}
          ref={selectedNumber}
          onChange={(e) => setMyNumber(selectedNumber.current.value)}
        />
      </div>
      <OtherComponent />
    </UserNumber.Provider>
  );
}

export default App;
