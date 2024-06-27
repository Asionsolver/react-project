
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  
  return (
    <>
      <h1>Basic Full Stack APP</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
            <p>{joke.author}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
