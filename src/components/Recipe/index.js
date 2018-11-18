import React, { useContext } from 'react';
import './recipe.css';

import AspectRatio from '../AspectRatio';

const RecipeContext = React.createContext();

export const Recipes = ({ children }) => (
  <div className="recipes">{children}</div>
);

export const RecipeImage = () => {
  const { imageUrl = '', imageAlt = '' } = useContext(RecipeContext);

  return (
    <AspectRatio>
      <img className="recipe-image" src={imageUrl} alt={imageAlt} />
    </AspectRatio>
  )
};

export const RecipeTitle = () => {
  const { title = '' } = useContext(RecipeContext);

  return (
    <div className="recipe-title">{title}</div>
  )
};

export const RecipeButtons = ({ children }) => (
  <div className="recipe-buttons">{children}</div>
);

export const RecipeButton = ({ label, onClick, children }) => (
  <button
    className="recipe-button"
    onClick={onClick}
  >
    {label || children}
  </button>
);

const Recipe = ({ recipe = {}, children }) => (
  <RecipeContext.Provider value={recipe}>
    <div className="recipe">
      {children}
    </div>
  </RecipeContext.Provider>
);

export default Recipe;
