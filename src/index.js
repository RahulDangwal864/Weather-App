import dom from './js/dom';
import events from './js/events';
import autoComplete from './js/search';
import './style/style.css';

const event = events();
autoComplete();
const submit = document.getElementById('submit');
submit.addEventListener('click', () => event.getLocation('search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', () => event.getForecast());

const search2 = document.getElementById('search2');
search2.addEventListener('click', () => event.getLocation('searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', () => dom().show('aaa'));
