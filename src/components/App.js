import React,{useState} from "react";
import Break from "./Break";
import "./App.css";
import Session from "./Session";

function App() {  
  const [SessionLength, setSessionLength] = useState(60 * 25);

  const decrementSessionLengthByOneMinute = () => {
      const newSessionlength = SessionLength - 60;

      if (newSessionlength < 0) {
          setSessionLength(0);
      } else {
          setSessionLength(newSessionlength);
      }
  };

  const incrementSessionLengthByOneMinute = () => {
      setSessionLength(SessionLength + 60)
  }; 
  return (
    <div className="App">
      <Break />
      <Session
      SessionLength={SessionLength}
      decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
    </div>
  );
}

export default App;
