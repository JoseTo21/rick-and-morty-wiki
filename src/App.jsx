import { useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import MainContent from "./components/MainContent";

function App() {
  const [inputValue, setinputValue] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);

  const inputLocation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // la otra forma seria: e.target.firstChild.value(el firstchild vendria siendo el input ya que es el primer hijo del form)
    setinputValue(inputLocation.current.value);
  };

  return (
    <div className="App">
      <section>
        <img
          className="app__img"
          src="rick-morty-collection-banner_2592x.jpg"
        />
      </section>
      <main className="app_body">
        <form onSubmit={handleSubmit}>
          <input ref={inputLocation} type="text" />
          <button>Search!</button>
        </form>
        {hasError ? (
          <h2 className="error__msg">
            ❌ Hey! you must provide an id from 1 to 126 😓
          </h2>
        ) : (
          <MainContent location={location} />
        )}
      </main>
    </div>
  );
}

export default App;
