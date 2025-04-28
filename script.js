const mangaList = document.getElementById("mangaList");
const searchBar = document.getElementById("searchBar");

async function searchMangas(tag) {
    const response = await fetch(`http://localhost:3000/search/${tag}`);
    const mangas = await response.json();
    displayMangas(mangas);
}

function displayMangas(mangas) {
    mangaList.innerHTML = "";
    mangas.forEach(manga => {
        const mangaElement = document.createElement("div");
        mangaElement.className = "manga";
        mangaElement.innerHTML = `
            <h3>${manga.title.pretty}</h3>
            <img src="https://t.nhentai.net/galleries/${manga.media_id}/thumb.jpg" alt="${manga.title.pretty}">
        `;
        mangaList.appendChild(mangaElement);
    });
}

searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText.length > 2) { // éviter de spam l'API
        searchMangas(searchText);
    }
});
