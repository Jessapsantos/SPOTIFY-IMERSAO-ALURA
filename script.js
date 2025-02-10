
const searchInput = document.getElementById('search-input');
const allArtists = document.querySelectorAll('.artist'); 
const artistsContainer = document.querySelector('.offer__list'); 
const titlePlaylist = document.querySelector('.titulo-playlist'); 

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();

        
    artistsContainer.innerHTML = '';

        
    titlePlaylist.style.display = 'none';

    let artistFound = false;

        
    if (query === '') {
        artistsContainer.innerHTML = ''; 
        titlePlaylist.style.display = 'block'; 
            
        allArtists.forEach(artist => {
            if (!artist.classList.contains('hidden')) {
                const artistClone = artist.cloneNode(true);
                artistsContainer.appendChild(artistClone);
            }
        });
        return; 
    }

        
    allArtists.forEach(artist => {
        const artistName = artist.querySelector('.artist__name').textContent.toLowerCase();
            
        if (artistName.includes(query)) {
            const artistClone = artist.cloneNode(true);
            artistClone.classList.remove('hidden'); 
            artistsContainer.appendChild(artistClone);
            artistFound = true;
        }
    });

        
    if (!artistFound) {
        const noResults = document.createElement('p');
        noResults.textContent = 'Nenhum artista encontrado';
        artistsContainer.appendChild(noResults);
    }
});
