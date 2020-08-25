//https://ghibliapi.herokuapp.com/#
const base_url = `https://ghibliapi.herokuapp.com/films`
const base_img_url = `https://www.omdbapi.com/?apikey=f827ccf7&`


const getData = async (keyword) => {
  try {
    const res = await axios.get(base_url)
    let data = res.data

    removeResults()
    retrieveMovie(data, keyword)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
// getData('Kiki')

const getMoviePoster = async (movieTitle) => {
  try {
    const imgRes = await axios.get(`${base_img_url}t=${movieTitle}`)
    return imgRes.data.Poster
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const button = document.querySelector('#search')
button.addEventListener('click', (e) => {
  e.preventDefault()
  let inputValue = document.querySelector('input').value.toLowerCase()
  getData(inputValue)
  document.querySelector('input').value = '' //clears searchbox after search
})

function removeResults() {
  const oldSearch = document.querySelector('.search-results')
  oldSearch.innerHTML = '' //clears out everything made after search-results
}

function retrieveMovie (movieData, keyword) {
  const resultsHeading = document.createElement('h2')
  resultsHeading.textContent = 'Search Result(s)'
  const searchResult = document.querySelector('.search-results')
  searchResult.append(resultsHeading)

  movieData.forEach(async (movie) => {
    let movieTitle = movie.title
    
    if (movieTitle.toLowerCase().includes(keyword)) {
      const imgUrl = await getMoviePoster(movieTitle)
      const movieResult = document.createElement('ul')
      movieResult.className = 'movie-details'
      searchResult.append(movieResult)

      const resultsImage = document.createElement('li')
      const resultsTitle = document.createElement('li')
      const resultsDirector = document.createElement('li')
      const resultsProducer = document.createElement('li')
      const resultsDate = document.createElement('li')
      const resultsScore = document.createElement('li')
      const resultsDescription = document.createElement('li')
      const posterImg = document.createElement('img')
      posterImg.src = imgUrl
            
      resultsImage.append(posterImg)
      resultsTitle.innerHTML = `<span class="bold">Title:</span> ${movie.title}` 
      resultsDirector.innerHTML = `<span class="bold">Director:</span> ${movie.director}` 
      resultsProducer.innerHTML = `<span class="bold">Producer:</span> ${movie.producer}`
      resultsDate.innerHTML = `<span class="bold">Release Date:</span> ${movie.release_date}`
      resultsScore.innerHTML = `<span class="bold">Rotten Tomatoes Score:</span> <a href="https://www.rottentomatoes.com/m/${movieTitle.split(' ').join('_').split("'").join('')}" target="_blank">${movie.rt_score}<a>`
      resultsDescription.innerHTML = `<span class="bold">Synopsis:</span> ${movie.description}`
      
      movieResult.append(resultsImage)
      movieResult.append(resultsTitle)
      movieResult.append(resultsDescription)
      movieResult.append(resultsDirector)
      movieResult.append(resultsProducer)
      movieResult.append(resultsDate)
      movieResult.append(resultsScore)
      
    } 
  })
}