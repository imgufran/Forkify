import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";
import recipeView from "./views/recipeView.js";

import * as model from "./model.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    recipeView.renderSpinner();

    // 1.) Loading recipe
    await model.loadRecipe(id);

    // 2.) Rendering recipe
    recipeView.render(model.state.recipe);
    console.log(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1.) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2.) Load search results
    await model.loadSearchResults(query);

    // 3.) Render results
    console.log(model.state.search.results);

  } catch (error) {
    console.log(error);
  }
};



const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerRender(controlRecipes);
};

init();