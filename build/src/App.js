import JSONDATA from "./Sample_Data.json";
import { useState } from "react";
import Grid from "@mui/material/Grid";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <h1>Vegetable Information</h1>
      <div className="SearchBar">
        {
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
        }
      </div>
      <Grid container>
        {JSONDATA.filter((value) => {
          if (searchInput === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return value;
          }
          return null;
        }).map((value, key) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={value.id}
              className="ParentGrid"
            >
              <div className="IngredientDiv">
                <img
                  className="IngredientImg"
                  src={value.picture}
                  alt="Vegetable"
                ></img>
                <h2 className="IngredientName">{value.name}</h2>
                <p className="IngredientDesc">{value.description}</p>
                <a
                  href={value.video}
                  alt="Instruction Video"
                  className="IngredientVideoLink"
                >
                  Instruction Video
                </a>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
