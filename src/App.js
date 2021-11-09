import { useState, useRef } from "react";
import "./App.css";
import RandomJoke from "./RandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Elon");
  const [lastName, setLastName] = useState("Musk");

  const joke = RandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="blog-card spring-fever">
      <div className="title-content">
        <h3>
          <span>The Joke Generator</span>
        </h3>
        <div className="intro">
          <h4>Funny Jokes</h4>
        </div>
      </div>
      <div className="card-info">
        {joke}
        <form>
          <div className="Input">
            <input
              className="Input-text"
              placeholder="first name"
              ref={firstNameRef}
            />
            <input
              className="Input-text"
              placeholder="last name"
              ref={lastNameRef}
            />
          </div>
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </div>
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </div>
  );
}

export default App;
