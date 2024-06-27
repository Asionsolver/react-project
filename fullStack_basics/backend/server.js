// const express = require('express');

// modern syntax
import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Valentine\'s Day Jokes',
            joke: 'What do you call a very small valentine? A valen-tiny!',
            author: 'Author 1',
        },
        {
            id: 2,
            title: 'Dog Jokes',
            joke: 'What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!',
            author: 'Author 2',
        },
        {
            id: 3,
            title: 'Shark Jokes',
            joke: 'Why don\'t sharks like to eat clowns? Because they taste funny!',
            author: 'Author 3',
        },
        {
            id: 4,
            title: 'Cat Jokes',
            joke: 'What did the boy cat say',
            author: 'Author 4',
        },
        {
            id: 5,
            title: 'Frog Jokes',
            joke: 'What is a frog\'s favorite outdoor sport? Fly Fishing!', 
            author: 'Author 5',
        },
    ];
    
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
