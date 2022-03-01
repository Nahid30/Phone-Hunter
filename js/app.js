// error messager id call display none 
const error = document.getElementById('error').style.display = 'none';

// call search button and get input field 
const searchPhone = () => {
    const searchInput = document.getElementById('search-field');
    const searchInputText = searchInput.value;
    searchInput.value = '';

    // get error text id and throw error message by if else
    const error = document.getElementById('error').style.display = 'block'
    if(searchInputText == ''){
        const errorText = error.innerText;
        console.log(errorText);
        error.innerText = '';
        
    }
    else{
    // get API link and fetch 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}
    }

// display result and create card dynamically by using for of loop

const displaySearchResult = datas =>{
    const searchResult = document.getElementById('search-result');

    // clear previous result before display new result
    searchResult.textContent = '';
    
    for(const data of datas){
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 m-4 bg-light rounded ">
            <img src="${data.image}" class="card-img-top ps-2 pt-4 w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title text-danger">${data.phone_name}</h5>
                <p class="card-text">${data.brand}</p>
                <button onclick="seeDetails('${data.slug}')" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);

    }
}

// get API link and fetch for display single card/data 

const seeDetails = slug =>{
    
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySeeDetails(data.data));
}
// display single card result & created dynamically 

const displaySeeDetails = details =>{
    console.log(details);
    const singleSeeDetails = document.getElementById('single-seeDetails');
    singleSeeDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${details.image}" class="img-fluid w-100 rounded-start mt-3 my-1" alt="...">
            <div class='ms-2 mt-4 pt-4'>
                <h3 class="card-title text-danger">${details.name}</h3>
                <p class="card-text text-secondary">${details.releaseDate}</p>
                <p class="card-text text-secondary">Id : ${details.slug}</p>
            </div>
        </div>

      <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-text text-primary"> Main Features : </h5>
            <p class="text-secondary">1. Chip Set : ${details.mainFeatures.chipSet}</p>
            <p class="text-secondary">2. Display Size : ${details.mainFeatures.displaySize}</p>
            <p class="text-secondary">3. Memory : ${details.mainFeatures.memory}</p>

            <h5 class="card-text text-primary"> Sensors : </h5>
            <p class="text-secondary">1. ${details.mainFeatures.sensors[0]}</p>
            <p class="text-secondary">2. ${details.mainFeatures.sensors[1]}</p>
            <p class="text-secondary">3. ${details.mainFeatures.sensors[2]}</p>
            
            <h5 class="card-text text-success mt-3"> Others : </h5>
            <p class="text-secondary">1. Bluetooth : ${details.others.Bluetooth}</p>
            <p class="text-secondary">2. GPS : ${details.others.GPS} </p>
            <p class="text-secondary">3. WLAN : ${details.others.WLAN} </p>
        </div>
      </div>
    </div>
    `;
    singleSeeDetails.appendChild(div);
}