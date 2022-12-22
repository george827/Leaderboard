/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import populatelist from './modules/myapi.js';

populatelist();

//  my id DBBZrUJElZiRYVVhOpvy

const addNewScore = document.querySelector('.submit');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refresh = document.querySelector('.btn-refresh');

// event listener for refresh

refresh.addEventListener('click', () => {
  window.location.reload();
});

addNewScore.addEventListener('click', async (e) => {
  e.preventDefault();

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DBBZrUJElZiRYVVhOpvy/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  document.forms[0].reset();
});