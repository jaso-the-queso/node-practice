const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, "../chirps.json");

fs.readFile(dataPath, 'UTF-8', (err, data) => {
    if (err) console.log(err);

    let arrayOfObjects = JSON.parse(data);
    arrayOfObjects.chirps.push(
    {
        author: "Jason Simons",
        chirp: "Chirp 1"
    },
    {
        author: "Jason Simons",
        chirp: "Chirp 2"
    },
    {
        author: "Jason Simons",
        chirp: "Chirp 3"
    },
    {
        author: "Jason Simons",
        chirp: "Chirp 4"
    },
    {
        author: "Jason Simons",
        chirp: "Chirp 5"
    });

    fs.writeFile(dataPath, JSON.stringify(arrayOfObjects), 'UTF-8', (err) => {
        if (err) console.log(err);
        console.log("Done!");
    })
})