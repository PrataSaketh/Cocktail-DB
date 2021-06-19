import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DrinkByCategory(category_drink_list) {
  const classes = useStyles();
//   console.log(category_drink_list);
  if(! category_drink_list.drink_category.drinks){
      return ( <div>  No drinks available for the selected category    </div>) 
  }
   if (category_drink_list.drink_category.hasOwnProperty("drinks")) {
    return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Drinks</InputLabel>
        <Select
          style={{ backgroundColor: "#7edede" }}
          native
        >
          <option> Select drink here </option>
          {category_drink_list.drink_category.drinks.map((category, i) =>( <option key={i} value={category.strDrink}> {category.strDrink} </option> ))}
        </Select>
      </FormControl>
    
    
    );
  } else return <p>Loading Drinks List for the selected category!</p>;
}

export default DrinkByCategory;
