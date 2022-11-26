import './style.css';
import { freshGame } from './modules/new_game';
import sendResult from './modules/send_result';

const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('#form');

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  freshGame.populateList();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendResult();
});

window.onload = (e) => {
  e.preventDefault();
  freshGame.populateList();
};