// Export the searchAnime function
export async function searchAnime(query) {
    // Define the API URL
    const url =`https://api.jikan.moe/v4/anime?q=${query}`;
  
    try {
      // Fetch the search results from the Jikan API
      const response = await fetch(url);
      const data = await response.json();
  
      // Return the array of anime objects
      return data.data;
    } catch (error) {
      console.error('Error fetching anime data:', error);
      throw error;
    }
  }