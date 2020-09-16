import React from 'react';
import './App.css';
// Import Components


function App() {
  // Props can only be passed DOWN

  const APP_ID = 'f6a9cd4a';
  const APP_KEY = '84ae16841851398d497569fba7ca46dc';

  const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Howdy</h1>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
