export function pageLoaded() {
    const form = document.getElementById('search_form');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('anime-name');
        const name = nameInput.value;
        displayAnimeByName(name);
    });
}