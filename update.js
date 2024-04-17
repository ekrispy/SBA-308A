function displayAnimes(animes) {
    const resultsDiv = document.getElementById('results');
  
    resultsDiv.innerHTML = '';
    animes.forEach((anime) => {
      const animeDiv = document.createElement('div');
      animeDiv.innerHTML = `
      <img src="${anime.images.webp.image_url}" alt="${anime.title}">
        <h2>${anime.title}</h2>
        <p>${anime.synopsis}</p>
      `;
      resultsDiv.appendChild(animeDiv);
    });
  }
  
  export { displayAnimes };