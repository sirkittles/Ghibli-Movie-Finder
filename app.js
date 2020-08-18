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

getData('Kiki')

function retrieveMovie (movieData, keyword) {
  const titles = [];
  movieData.forEach((element) => {
    titles.push(element.title)
  })
  console.log(titles)
  
  titles.forEach((movie) => {
    if (movie.includes(keyword)) {
      // return movie;
      console.log(movie)
    }
  })
}