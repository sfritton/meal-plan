import React, { Component } from 'react';
import './App.css';
import Recipe, {
  Recipes,
  RecipeImage,
  RecipeTitle,
  RecipeButtons,
  RecipeButton
} from './components/Recipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes>
          <Recipe>
            <RecipeImage />
            <RecipeTitle />
            <RecipeButtons>
              <RecipeButton label="Add" />
              <RecipeButton label="Details" />
            </RecipeButtons>
          </Recipe>
          <Recipe>
            <RecipeImage />
            <RecipeTitle />
            <RecipeButtons>
              <RecipeButton label="Add" />
              <RecipeButton label="Details" />
            </RecipeButtons>
          </Recipe>
          <Recipe>
            <RecipeImage />
            <RecipeTitle />
            <RecipeButtons>
              <RecipeButton label="Add" />
              <RecipeButton label="Details" />
            </RecipeButtons>
          </Recipe>
        </Recipes>
      </div>
    );
  }
}

export default App;
