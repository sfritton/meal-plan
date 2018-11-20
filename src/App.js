import React, { Component } from 'react';
import Recipe, {
  Recipes,
  RecipeImage,
  RecipeTitle,
  RecipeButtons,
  RecipeButton
} from './components/Recipe';
import Layout, { Sidebar, SidebarHeading, MainBody } from './components/Layout';
import SearchBar from './components/SearchBar';

import recipes from './sample-data/recipes.json';

class App extends Component {
  render() {
    return (
      <Layout>
        <MainBody>
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
        </MainBody>
        <Sidebar>
          <SidebarHeading>Menu</SidebarHeading>
          <Recipes>
            {recipes.map(recipe => (
              <Recipe recipe={recipe} key={recipe.title}>
                <RecipeImage />
                <RecipeTitle />
                <RecipeButtons>
                  <RecipeButton label="Remove" />
                </RecipeButtons>
              </Recipe>
            ))}
          </Recipes>
        </Sidebar>
      </Layout>
    );
  }
}

export default App;
