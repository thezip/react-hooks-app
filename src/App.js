import React, {useState} from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Счетчик: </h1>
      <button className='btn btn-success'>Увеличить</button>
      <button className='btn btn-danger'>Уменьшить</button>
    </div>
  );
}

export default App;
