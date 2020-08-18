//https://ghibliapi.herokuapp.com/#
const base_url = `http://ghibliapi.herokuapp.com/films`
// const title = `${title}`

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
  let inputValue = document.querySelector('input').value.toLowerCase()
  getData(inputValue)
  document.querySelector('input').value = ''
})

function retrieveMovie (movieData, keyword) {
  movieData.forEach((movie) => {
    let movieTitle = movie.title
    if (movieTitle.toLowerCase().includes(keyword)) {
      console.log(movieTitle)
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