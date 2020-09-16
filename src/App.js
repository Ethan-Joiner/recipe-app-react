import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';
// Import Components


function App() {
  // Props can only be passed DOWN

  const APP_ID = 'f6a9cd4a';
  const APP_KEY = '84ae16841851398d497569fba7ca46dc';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');


  useEffect(() =>{
    getRecipes();
  }, [query]); 

  const getRecipes = async () =>{
    const response = await fetch(  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
