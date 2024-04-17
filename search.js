const API_URL = 'https://api.jikan.moe/v4/anime';

async function searchAnime(query) {
  const response = await fetch(`${API_URL}?q=${query}`);
  const data = await response.json();
  return data.data;
}

export { searchAnime };