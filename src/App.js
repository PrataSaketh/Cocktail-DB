import React, { useState } from "react";
import './App.css';
import { Header, Footer, Category, DrinkByCategory } from "./components";
import { fetch_category_drinks } from "./API";
function App() {
  const [category_drink_list, set_drink_category] = useState({});
  

  //this function is called when a category is changed in the dropdown to fetch the drinks 
  const handleCategoryChange = async (drink_category) => {
    set_drink_category((await fetch_category_drinks(drink_category)));
  };
  return (
    <div className="App">
    <Header />
    <Category handleCategoryChange = {handleCategoryChange}/>
    <DrinkByCategory drink_category ={category_drink_list} />
    <Footer />
  </div>
  );
  //Ideas
  // 1. We can have an event handler for DrinkByCategory drop down 
  // 2. fetch details to specific a drink by passing the drink id to API
  // 3. We can then display important details like ingredients in a box below
  // 4. We have a random drink API. We can use a floating board to display details of it also
}

export default App;
