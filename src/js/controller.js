import 'regenerator-runtime/runtime';
import 'core-js/stable';
import * as model from './model.js';
import recipeView from './view/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

console.log('Wow');

const showRecepie = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    //Render Spinner
    recipeView.renderSpinner();
    //renderSpinner(recipeContainer);
    //Call to the model class so as to load the data
    await model.loadRecipe(id);
    //const recipe = model.state.recipe;
    //Rendenring Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, showRecepie)
);
// window.addEventListener('hashchange', showRecepie);
// window.addEventListener('load', showRecepie);
// showRecepie();
