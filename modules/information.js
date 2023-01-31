/* eslint-disable no-restricted-globals */
import getScore from './getscores.js';

const gamer = () => {
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  const add = document.querySelector('#add');
  const reload = document.querySelector('#reload');

  add.addEventListener('submit', (e) => {
    e.preventDefault();
    getScore(name.value, score.value);
    name.value = '';
    score.value = '';
  });
  reload.addEventListener('click', () => {
    location.reload();
  });
};

export default gamer;