import React, { useState } from "react";
import data from './data';
import Tours from './Components/Tours'

const App = () => {

  const [Tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = Tours.filter(tour => tour.id !== id)
    setTours(newTours);
  }

  if(Tours.lenght == 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours Tours={Tours} removeTours={removeTour}></Tours>
    </div>
  )
};

export default App;
