import { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);

  return (
    <div>
      <h1>API FETCHING</h1>
      <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
          console.log(response.data);
          setState(response.data);
        });
      }}>Click here</button>
      {state.map((obj, index) => (
        <div key={index}>
          <h1>{index + 1}</h1>
          <h1>{obj.title}</h1>
          <img src={obj.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;