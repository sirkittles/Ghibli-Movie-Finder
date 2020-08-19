//https://ghibliapi.herokuapp.com/#
const base_url = `http://ghibliapi.herokuapp.com/films`
// const title = `${title}`
// removeResults()
const getData = async (keyword) => {
  // const url = `${base_url}`

  try {
    const res = await axios.get(base_url)
    let data = res.data
    console.log(data)
    retrieveMovie(data, keyword)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// getData('Kiki')

const button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  removeResults()
  let inputValue = document.querySelector('input').value.toLowerCase()
  getData(inputValue)
  document.querySelector('input').value = ''
})

function removeResults() {
  const oldSearch = document.querySelector('.search-results')
  oldSearch.textContent = ''
  const resultsUl = document.querySelector(".movie-details")
  while (resultsUl.firstChild)
    resultsUl.removeChild(ul.firstChild)
}

function retrieveMovie (movieData, keyword) {
  movieData.forEach((movie) => {
    let movieTitle = movie.title
    if (movieTitle.toLowerCase().includes(keyword)) {
      console.log(movieTitle)
      const searchResult = document.querySelector('.search-results')
      const resultsHeading = document.createElement('h2')
      const movieResult = document.querySelector('.movie-details')
      resultsHeading.textContent = 'Search Result(s)'
      searchResult.append(resultsHeading)
      searchResult.append(movieResult)

      const resultsTitle = document.createElement('li')
      const resultsDirector = document.createElement('li')
      const resultsProducer = document.createElement('li')
      const resultsDate = document.createElement('li')
      const resultsScore = document.createElement('li')
      const resultsDescription = document.createElement('li')
        
      resultsTitle.innerHTML = `<strong>Title:</strong> ${movie.title}` 
      resultsDirector.innerHTML = `<strong>Director:</strong> ${movie.director}` 
      resultsProducer.innerHTML = `<strong>Producer:</strong> ${movie.producer}`
      resultsDate.innerHTML = `<strong>Release Date:</strong> ${movie.release_date}`
      resultsScore.innerHTML = `<strong>Rotten Tomatoes Score:</strong> ${movie.rt_score}`
      resultsDescription.innerHTML = `<strong>Synopsis:</strong> ${movie.description}`
      
      movieResult.append(resultsTitle)
      movieResult.append(resultsDescription)
      movieResult.append(resultsDirector)
      movieResult.append(resultsProducer)
      movieResult.append(resultsDate)
      movieResult.append(resultsScore)
      // console.log(movieTitle.split(' ').join('_').split("'").join('')) //for rottentomatoes link. rottentomatoes.com/m/movieTitle spaces replaced with _
    }
  })
  
  // titles.forEach((movie) => {
  //   if (movie.includes(keyword)) {
  //     // return movie;
  //     console.log(movie)
  //   }
  // })
}