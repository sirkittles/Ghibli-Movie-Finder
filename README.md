# P1

**App Title**: Ghibli Movie Finder

**App Description**: A one-stop search tool which allows the user to find info regarding a Ghibli movie by title or title keyword.  The app will receive data from the Ghibli API and provide the user with any movies that match the search parameters. 

**API**: [Studio Ghibli API] (https://ghibliapi.herokuapp.com/#)

**API Snippet: 

``` JSON
[
  {
    "id": "603428ba-8a86-4b0b-a9f1-65df6abef3d3",
    "name": "Cat",
    "classification": "Mammal",
    "eye_colors": "Brown, Black, Yellow, White, Emerald, Blue, Green",
    "hair_colors": "White, Black, Brown, Beige, Grey, Yellow",
    "url": "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
    "people": [
      "https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
      "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
      "https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa",
      "https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8",
      "https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57",
      "https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
      "https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
      "https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32",
      "https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b"
    ],
    "films": [
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
      "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6"
    ]
  }
]
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


## Change Log
Added a link to the Rotten Tomatoes site for movie in the movie score.
Added full screen landing page.
Added two small animations for a subtle effect.
Added a themed cursor.
