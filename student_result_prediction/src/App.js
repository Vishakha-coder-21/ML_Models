import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", {
        hours: Number(hours)
      });

      setResult(res.data.result);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to server");
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1>🎓 Student Result Predictor</h1>

        <p className="subtitle">
          Enter study hours to predict the student result
        </p>

        <input
          type="number"
          placeholder="Enter Study Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <button onClick={handlePredict}>
          Predict Result
        </button>

        {result && (
          <div className="result">
            Prediction: <span>{result}</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
