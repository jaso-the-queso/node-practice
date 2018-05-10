const request = require('request');
const fs = require('fs');
const path = require('path');

let dataPath = path.join(__dirname, 'popularArticles.json');

fs.readFile(dataPath, 'UTF-8', (err, data) => {
    if (err) console.log(err);

    let arrayOfObjects = JSON.parse(data);

    request('https://reddit.com/r/popular.json', (err, res, body) => {

        if (err) console.log(err);

        JSON.parse(body).data.children.forEach(item => {

            console.log(body);
            arrayOfObjects.popularArticles.push({
                author: "item.data.author",
                title: "item.data.title",
                url: "item.data.url"
            })

            console.log(arrayOfObjects);
            
        })
    })
})

