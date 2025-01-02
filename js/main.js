// Main file of js

fetch('/data/player.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.name); // Access data here
    })
    .catch(error => console.error('Error:', error));
