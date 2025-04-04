const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let tvShows = [
{ tvShow: "Breaking Bad", yearCreated: 2008, genre: "Crime", starring: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"] },
{ tvShow: "Game of Thrones", yearCreated: 2011, genre: "Fantasy", starring: ["Emilia Clarke", "Kit Harington", "Lena Headey"] },
{ tvShow: "The Office", yearCreated: 2005, genre: "Comedy", starring: ["Steve Carell", "John Krasinski", "Jenna Fischer"] },
{ tvShow: "The Wire", yearCreated: 2002, genre: "Crime", starring: ["Dominic West", "Wendell Pierce", "Idris Elba"] },
{ tvShow: "Stranger Things", yearCreated: 2016, genre: "Sci-Fi", starring: ["Winona Ryder", "Millie Bobby Brown", "Finn Wolfhard"] }
];

// GET route for all TV shows
app.get('/tvshows', (req, res) => {
res.json(tvShows);
});

// GET route for TV shows by year
app.get('/tvshows/year/:year', (req, res) => {
const year = parseInt(req.params.year);
const filteredShows = tvShows.filter(show => show.yearCreated === year);
res.json(filteredShows);
});

// DELETE route for a specific TV show by title
app.delete('/tvshows/:title', (req, res) => {
const title = req.params.title;
tvShows = tvShows.filter(show => show.tvShow !== title);
res.json(tvShows);
});

// PATCH route to update the starring property of a TV show
app.patch('/tvshows/:title', (req, res) => {
const title = req.params.title;
const newStarring = req.body.starring;

tvShows = tvShows.map(show => {
    if (show.tvShow === title) {
    return { ...show, starring: newStarring };
    }
    return show;
});
res.json(tvShows);
});

app.listen(port, () => {
console.log(`Server running on http://localhost:5000`);
});
