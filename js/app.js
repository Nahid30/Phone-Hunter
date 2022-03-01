
// call search button and get input field 
const searchPhone = () => {
    const searchInput = document.getElementById('search-field');
    const searchInputText = searchInput.value;
    searchInput.value = '';

// get API link and fetch 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

// display result and create card dynamically by using for of loop

const displaySearchResult = datas =>{
    const searchResult = document.getElementById('search-result');

    for(const data of datas){
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 m-4 bg-light rounded ">
            <img src="${data.image}" class="card-img-top ps-2 pt-4 w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">${data.brand}</p>
                <button onclick="" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);

    }
}

