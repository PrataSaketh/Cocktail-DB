import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetch_category_data } from "../../API";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Category({handleCategoryChange}) {
  const classes = useStyles();
  const [category_list, set_category] = useState({});

  // state variable to fetch the category list and storing it.
  useEffect(() => {
    const fetchAPI = async () => {
        console.log("Calling API");
      set_category((await fetch_category_data()));
    };

    fetchAPI();
  }, []);
//   console.log(category_list);
  if (category_list.hasOwnProperty('drinks')) {
    return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Category</InputLabel>
        <Select
          style={{ backgroundColor: "#7edede" }}
          native
          onChange={(e) =>{ 
              console.log("event is")
              console.log(e.target.value);
            handleCategoryChange(e.target.value);
        }}
        >
          <option> Select Category here </option>
          {category_list.drinks.map((category, i) =>( 
          <option key={i} value={category.strCategory}> 
          {category.strCategory} </option> ))}
        </Select>
      </FormControl>
    );
  } else return <p>Loading Category List!</p>;
}

export default Category;
