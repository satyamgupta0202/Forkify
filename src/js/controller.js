import 'regenerator-runtime/runtime';
import 'core-js/stable';
import * as model from './model.js';
import recipeView from './view/recipeView.js';

///////////////////////////////////////////////////////////////

// console.log(icons);
const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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
