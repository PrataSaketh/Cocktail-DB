//npm package which acts like an http server
import axios from "axios";

//URL to fetch all categories
const get_category_data = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

//Base URL to fetch drinks of a specific category
const get_category_drink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";



//async function to fetch all categories
export const fetch_category_data = async () => {

  const category_data = (await axios.get(`${get_category_data}`)).data;
  console.log(category_data);
  return category_data;
};

//async function to fetch drinks of a specific category
export const fetch_category_drinks = async (drink_category) => {
// console.log("Getting the drink category", drink_category)
// console.log( `${get_category_drink}`+ drink_category);
    const category_drinks = (await axios.get(`${get_category_drink}`+ drink_category)).data;
    // console.log("fadsfsa",category_drinks);
    return category_drinks;
  };    