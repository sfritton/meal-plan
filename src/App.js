import React, { Component } from 'react';
import './App.css';
import Recipe, {
  Recipes,
  RecipeImage,
  RecipeTitle,
  RecipeButtons,
  RecipeButton
} from './components/Recipe';

import recipes from './sample-data/recipes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes>
          {recipes.map(recipe => (
            <Recipe recipe={recipe} key={recipe.title}>
              <RecipeImage />
              <RecipeTitle />
              <RecipeButtons>
                <RecipeButton label="Add" primary/>
                <RecipeButton label="Details" />
              </RecipeButtons>
            </Recipe>
          ))}
            <Recipe>
              <RecipeImage />
              <RecipeTitle />
              <RecipeButtons>
                <RecipeButton label="Add" primary/>
                <RecipeButton label="Details" />
              </RecipeButtons>
            </Recipe>
        </Recipes>
      </div>
    );
  }
}

export default App;
