fetch(
    'https://api.weatherapi.com/v1/current.json?key=3ea407ec618d4126a6190344241906&q=london'
)
    .then((response) => response.json())
    .then((response) => console.log(response.current.temp_f));

const searchBar = document.getElementById('search');

searchBar.addEventListener('click', function (e) {
    console.log(e);
});
