const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0222ded952msh2fbbac2652fb37bp1a66fbjsn12ed29bdd4bb',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=dragon%20ball', options)
	.then(response => response.json())
    .then(data => {
         console.log(data)
        const arrayMovies =  data.d
        arrayMovies.map( (movie) => {
            console.log(movie)
            const title = movie.l;
            const image = movie.i.imageUrl;
            const cast = movie.s
            const date = movie.y;

            const poster = `
            <div>
              <img src="${image}" />
              <h2>${title}</h2>
              <small>${cast}</small>,
              <small>${date}</small>
            </div>
            `
            document.getElementById('conteiner').innerHTML += poster
            })
    })
	.catch(err => console.log(err));