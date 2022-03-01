
// call search button and get input field 
const searchPhone = () => {
    const searchInput = document.getElementById('search-field');
    const searchInputText = searchInput.value;
    searchInput.value = '';

// get API link and fetch 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data));
}