import { searchAnime } from './search.js';
import { displayAnimes } from './update.js';


const API_KEY = "live_5evM0uqWBIWHfPQTEjPJlsJc8H85bkSeNhR5ipvpLG51rRldkSf9MikzImE7fBji";

// get the search form and query input elements
const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');

// define the handleSearch function
async function handleSearch(event) {
  event.preventDefault();

  // Get the query from the input field
  const query = queryInput.value.trim();
  if (!query) return;

  try {
    // Search for animes
    const animes = await searchAnime(query);

    // Display the search results
    displayAnimes(animes);
  } catch (error) {
    console.error('Error searching for animes:', error);
    alert('An error occurred while searching for animes. Please try again later.');
  }
}

// define the favourite function
// it is not working in the code but here on how to use it
export async function favourite(imgId) {
  const isFavorite = await axios(`https://api.thecatapi.com/v1/favourites?image_id=${imgId}&api_key=${API_KEY}`)
  console.log(isFavorite)
  await axios.post(`https://api.thecatapi.com/v1/favourites?image_id=${imgId}&api_key=${API_KEY}`, {image_id: imgId });
  if(isFavorite.data[0]){
    await axios.delete(`https://api.thecatapi.com/v1/favourites?image_id=${imgId}&api_key=${API_KEY}`, {image_id: imgId } )
  }
  
}
searchForm.addEventListener('submit', handleSearch);