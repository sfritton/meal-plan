import React, { Component } from 'react';
import Recipe, {
  Recipes,
  RecipeImage,
  RecipeTitle,
  RecipeButtons,
  RecipeButton
} from './components/Recipe';
import SearchBar from './components/SearchBar';

import recipes from './sample-data/recipes.json';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Recipes>
          {recipes.map(recipe => (
            <Recipe recipe={recipe} key={recipe.title}>
              <RecipeImage />
              <RecipeTitle />
              <RecipeButtons>
                <RecipeButton label="Add" />
                <RecipeButton label="Details" />
              </RecipeButtons>
            </Recipe>
          ))}
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
