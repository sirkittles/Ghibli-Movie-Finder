//https://ghibliapi.herokuapp.com/#
const base_url = `http://ghibliapi.herokuapp.com/films`
const base_img_url = `http://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=f827ccf7&`
// const title = `${title}`
// removeResults()
const getData = async (keyword) => {
  // const url = `${base_url}`

  try {
    const res = await axios.get(base_url)
    let data = res.data
    // let movieImg = imgRes.data
    // console.log(data)
    // console.log(movieImg)
    removeResults()
    retrieveMovie(data, keyword)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// getData('Kiki')

const button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  let inputValue = document.querySelector('input').value.toLowerCase()
  getData(inputValue)
  document.querySelector('input').value = ''
})

function removeResults() {
  const oldSearch = document.querySelector('.search-results')
  oldSearch.innerHTML = ''
}

function retrieveMovie (movieData, keyword) {
  const resultsHeading = document.createElement('h2')
  resultsHeading.textContent = 'Search Result(s)'
  const searchResult = document.querySelector('.search-results')
  searchResult.append(resultsHeading)

  movieData.forEach((movie) => {
    let movieTitle = movie.title
    
    if (movieTitle.toLowerCase().includes(keyword)) {
      console.log(movieTitle)
      // const img = document.createElement('img')
      // const movieApi = `${imgRes}t=${movieTitle}`
      // img.src = movieApi.poster 
      const movieResult = document.createElement('ul')
      movieResult.className = 'movie-details'
      searchResult.append(movieResult)

      // const resultsImage = document.createElement('li')
      const resultsTitle = document.createElement('li')
      const resultsDirector = document.createElement('li')
      const resultsProducer = document.createElement('li')
      const resultsDate = document.createElement('li')
      const resultsScore = document.createElement('li')
      const resultsDescription = document.createElement('li')
      
      // resultsImage.append(img)
      resultsTitle.innerHTML = `<strong>Title:</strong> ${movie.title}` 
      resultsDirector.innerHTML = `<strong>Director:</strong> ${movie.director}` 
      resultsProducer.innerHTML = `<strong>Producer:</strong> ${movie.producer}`
      resultsDate.innerHTML = `<strong>Release Date:</strong> ${movie.release_date}`
      resultsScore.innerHTML = `<strong>Rotten Tomatoes Score:</strong> <a href="https://www.rottentomatoes.com/m/${movieTitle.split(' ').join('_').split("'").join('')}">${movie.rt_score}<a>`
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