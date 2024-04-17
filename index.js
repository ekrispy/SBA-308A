import { searchAnime } from './search.js';
import { displayAnimes } from './update.js';

const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');

async function handleSearch(event) {
  event.preventDefault();

  const query = queryInput.value.trim();
  if (!query) return;

  const animes = await searchAnime(query);
  displayAnimes(animes);
}

searchForm.addEventListener('submit', handleSearch);