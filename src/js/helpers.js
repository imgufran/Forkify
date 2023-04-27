import { TIMEOUT_SEC } from './config';
import recipeView from './views/recipeView';

// This function returns a promise which will reject after s seconds.
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) {
      recipeView.renderError(error);
    }
    return data;
  } catch (error) {
    recipeView.renderError(error);
  }
};
