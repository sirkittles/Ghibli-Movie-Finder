# P1

**App Title**: Ghibli Movie Finder

**App Description**: A one-stop search tool which allows the user to find info regarding a Ghibli movie by title or title keyword.  The app will receive data from the Ghibli API and provide the user with any movies that match the search parameters. 

**API**: [Studio Ghibli API](https://ghibliapi.herokuapp.com/#)

**API Snippet: 

``` JSON
[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
    "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
    "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
    "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
    "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  },
```

**Wireframes:** https://wireframe.cc/5G1lgr

**MVP:** 
Allow user to search in one search bar.
Results will provide full info about movie.
Search bars will clear after each search.

**PostMVP:**
Divide search parameters by a drop down menu.
Create a header of clickable poster images that will pull up search results for that movie.
Add additional searchable parameters.
Allow for searches to not be case sensitive.
Results will pull poster images from OMDB API

**Goals:**
|  Day | Deliverable | Status
|---|---| ---|
|August 15-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval / Start basic HTML, CSS, JS includingn data import| Complete
|August 18| Build on JS and HTML | Complete
|August 19| Complete CSS, start Post MVP work | Complete
|August 20| Post MVP | Partial
|August 21| Presentations | Incomplete

**Priority Matrix:**
https://app.lucidchart.com/invitations/accept/c267e70e-fbc8-4001-9c41-784e9b1939ab


**Timetable:**
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML | M | 3hrs | 2hrs | 2hrs | 
| Basic CSS | M | 3hrs| 2hrs | 2hrs |
| Basic JS | M | 3hrs| 2hrs | 2hrs |
| Explore Data | M | 5hrs| 8hrs | 8hrs |
| JS - Search Box | H | 4hrs | 3hrs | 3hrs |
| JS - Result Box | H | 4hrs| 9hrs | 9hrs |
| JS - Result Image | H | 2hrs| 7hrs | 7hrs |
| CSS - Search Box | H | 2hrs| 2hrs | 2hrs |
| CSS - Result Box/Image | H | 3hrs| 5hrs | 5hrs |
| Post MVP - Add Drop Down Search | L | 3hrs| 0hrs | 0hrs |
| Post MVP - Add Image Carousel Header | L | 5hrs | 0hrs | 0hrs |
| Post MVP - Add FS Landing Page | L | 3hrs | 4hrs | 4hrs |
| Total | -- | 40hrs| 42hrs | 42hrs |

## Code Snippet
``` JS
function retrieveMovie (movieData, keyword) {
  const resultsHeading = document.createElement('h2')
  resultsHeading.textContent = 'Search Result(s)'
  const searchResult = document.querySelector('.search-results')
  searchResult.append(resultsHeading)

  movieData.forEach(async (movie) => {
    let movieTitle = movie.title
    
    if (movieTitle.toLowerCase().includes(keyword)) {
      // console.log(movieTitle)
      const imgUrl = await getMoviePoster(movieTitle)
      // console.log(imgUrl)
      const movieResult = document.createElement('ul')
      movieResult.className = 'movie-details'
      searchResult.append(movieResult)
```

## Change Log
Added a link to the Rotten Tomatoes site for movie in the movie score.

Added full screen landing page.

Added two small animations for a subtle effect.

Added a themed cursor.
