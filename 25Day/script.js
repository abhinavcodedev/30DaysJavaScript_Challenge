document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    const resultContainer = document.getElementById('results');

    if(!query){
        resultContainer.innerHTML='<p>Please enter a movie name.</p>'
    }

    fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=Your_API_KEY`)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not Ok' + response.statusText);
        }
        return response.json();
    })
    .then(data=>{
        console.log(data); //Log data to the console

        resultContainer.innerHTML='';

        if(data.Response === "True"){
            data.Search.forEach(movie => {
                const moviEl = document.createElement('div');
                moviEl.classList.add('movie');

                const moviePoster = document.createElement('img');
                moviePoster.src= movie.Poster!=="N/A"? movie.Poster: 'noImage.png';
                moviePoster.alt=`${movie.Title} Poster`;

                const movieTitle = document.createElement('div');
                movieTitle.classList.add('movie-title');
                movieTitle.textContent = movie.Title;

                const movieYear = document.createElement('div');
                movieYear.classList.add('movie-year');
                movieYear.textContent = movie.Year;

                const moreInfo = document.createElement('button');
                moreInfo.textContent = 'More Info';
                moreInfo.addEventListener('click', function(){
                    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=72faf0fc`)
                    .then(response=>{
                        if(!response.ok){
                            throw new Error('Network response was OK' + response.statusText);
                        }
                        return response.json();
                    })

                    .then(movieDetails =>{
                        console.log(movieDetails); //Log detailed movie data to console
                        displayMovieDetails(movieDetails);
                    })
                    .catch(error =>{
                        console.error('Error fetching movie details: ', error);
                    });
                });

                moviEl.appendChild(moviePoster);
                moviEl.appendChild(movieTitle);
                moviEl.appendChild(movieYear);
                moviEl.appendChild(moreInfo);

                resultContainer.appendChild(moviEl);
            });
        } else{
            resultContainer.innerHTML = '<p>No movie found.</p>';
        }
    })
    .catch(error=>{
        console.error('Error fetching movie data:', error);
        resultContainer.innerHTML = '<p>There was an error fetching the movie data. Please try again later.</p>';
    
    });
});

function displayMovieDetails(movieDetails){
    const modal = document.getElementById('modal');
    const movieDetailsContainer = document.getElementById('movie-details');

    movieDetailsContainer.innerHTML = 
    `<h2>${movieDetails.Title}</h2>
    <img src="${movieDetails.Poster !== "N/A" ? movieDetails.Poster : 'noImage.png'}" alt="${movieDetails.Title} Poster">
    <p><strong>Year:</strong> ${movieDetails.Year}</p>
    <p><strong>Director:</strong> ${movieDetails.Director}</p>
    <p><strong>Actors:</strong> ${movieDetails.Actors}</p>
    <p><strong>Plot:</strong> ${movieDetails.Plot}</p>`;

    modal.style.display = 'block';
    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function(){
        modal.style.display = "none";
    };

    window.onclick = function(event){
       if(event.target == modal){
            modal.style.display = 'none';
        }
    };
}
