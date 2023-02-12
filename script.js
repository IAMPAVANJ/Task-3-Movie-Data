var inp = document.getElementById("searchBar")
var button = document.getElementById("btn")
var result = document.getElementById("display")


button.addEventListener("click",function(){
    let inputvalue = inp.value;
    let key = "1afd811b";
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${inputvalue}`

    const image = ` http://img.omdbapi.com/?apikey=${key}&`;

    fetch(url)
    .then((response)=>response.json())
    .then((res)=>{
        const movie = res;
        const  PosterUrl = `${image}&i=${movie.imdbID}`;
        const html = `
        <div>
            <img src="${PosterUrl}" alt="${movie.Title}">
            <p>Realeased In:${movie.Year}</p>
            <p>IMDB Rating:${movie.imdbRating}</p>
            <p>Cast Name:${movie.Actors}</p>
            <p>Director Name:${movie.Director}</p>
        </div>
        `
        result.innerHTML = html
    })

  
   
})