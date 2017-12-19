// const jokes = require('./jokes');
// ES-2015
import { jokes } from './jokes';
// import fs from 'fs';
jokes.getOne()
    .then(joke => {
        document.getElementById('joke').innerHTML = joke;
        // joke is returned right here which is being sent in jokes.js
    });

// const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');