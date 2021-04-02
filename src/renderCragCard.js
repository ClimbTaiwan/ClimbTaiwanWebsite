let currentCrag = '';
const cragCard = document.querySelector('#cragCard')
const cragName = document.querySelector("#cragName");
const map = document.querySelector('#map');
const mapBtn = document.querySelector('#mapBtn');

mapBtn.addEventListener('click', () => {
  if(map.innerHTML == "") {
    if(screen.width < 500) {
      map.innerHTML = currentCrag.mobileMapHTML;
    } else {
      map.innerHTML = currentCrag.mapHTML;
      console.log('map');
    }
  } else {
    map.innerHTML = "";
    console.log('clear');
  }
});

const createCragCard = function(crag) {
    currentCrag = crag;
    //If information
    if(crag.name == "Information") {
      const cragOverviewText = document.createTextNode(crag.content);
      const cragOverview = document.querySelector('#cragOverview');
      cragOverview.appendChild(cragOverviewText);

      const cragTravel = document.querySelector("#cragTravel");
      const cragTravelText = document.createTextNode(crag.warning);
      cragTravel.appendChild(cragTravelText);
    }

    if(crag.name == "Information") {
      cragTravel.style.color = 'red';
    } else {
      cragTravel.style.color = 'black';
    }
    //Set up headers
    if(crag.overview && crag.overview != "") {
      const overviewHeader = document.querySelector('#overviewHeader');
      const overviewHeaderText = document.createTextNode('Overview');
      overviewHeader.appendChild(overviewHeaderText);

      const cragOverview = document.querySelector("#cragOverview");
      const cragOverviewText = document.createTextNode(crag.overview);
      cragOverview.appendChild(cragOverviewText);
    }

    if(crag.travel && crag.travel != "") {
      const travelHeader = document.querySelector('#travelHeader');
      const travelHeaderText = document.createTextNode('How to get there:');
      travelHeader.appendChild(travelHeaderText);

      const cragTravel = document.querySelector("#cragTravel");
      const cragTravelText = document.createTextNode(crag.travel);
      cragTravel.appendChild(cragTravelText);
    }

    if(crag.guidebook && crag.guidebook != "") {
      const guidebookHeader = document.querySelector('#guidebookHeader');
      const guidebookHeaderText = document.createTextNode('Guidebook');
      guidebookHeader.appendChild(guidebookHeaderText);

      const cragGuidebook = document.querySelector("#cragGuidebook");
      const cragGuidebookURL = document.querySelector("#cragGuidebookURL");
      const cragGuidebookText = document.createTextNode(crag.guidebook);
      cragGuidebook.appendChild(cragGuidebookText);
      const cragGuidebookURLText = document.createTextNode('Check out the guidebook here!');
      cragGuidebookURL.appendChild(cragGuidebookURLText);
      cragGuidebookURL.setAttribute("href", crag.guidebookURL);
    }

    if(crag.mapHTML && crag.mapHTML != "") {
      mapBtn.classList.remove('d-none');
    } else {
      mapBtn.classList.add('d-none');
    }
    //Crag info
    const cragImg = document.querySelector("#cragImg");
    cragImg.setAttribute("src", crag.imgURL);

    const cragNameText = document.createTextNode(crag.name);
    cragName.appendChild(cragNameText);

    //Table
    const table = document.querySelector("#climbTable");
    if(crag.rocks) {
      crag.rocks.forEach((rock) => {
          //Add rock name row to top of table
          const thead = document.createElement("thead");
          const titletr = document.createElement('tr');
          const titleth = document.createElement('th');
          const titlethText = document.createTextNode(rock.name);
          titleth.appendChild(titlethText);
          //Set it to extend across 4 rows of the table
          titleth.setAttribute("colspan", "4");
          titletr.appendChild(titleth);
          titletr.classList.add('rockTitleRow');
          thead.appendChild(titletr);
          thead.classList.add('rockName');
          table.appendChild(thead);
  
          //Routes
          const tbody = document.createElement('tbody');
          //for each route
          rock.routes.forEach((route) => {
              const tr = document.createElement('tr');
              const th = document.createElement('th');
              const thText = document.createTextNode(route.name);
              th.appendChild(thText);
              th.setAttribute("scope", "row");
              th.classList.add('route');
              tr.classList.add('route');
              const tdRating = document.createElement('td');
              const tdStyle = document.createElement('td');
              const tdRatingText = document.createTextNode(route.rating);
              const tdStyleText = document.createTextNode(route.style);
              tdRating.appendChild(tdRatingText);
              tdStyle.appendChild(tdStyleText);
              //add route name to table
              tr.appendChild(th);
              //add route rating to table
              tr.appendChild(tdRating);
              //add route style to table
              tr.appendChild(tdStyle);
              //Put row in tbody
              tbody.appendChild(tr);
              //Put tbody in table
              table.appendChild(tbody);
          })
          //Allows user to "collapse" climbing route lists
          titleth.addEventListener('click', () => {
            tbody.classList.toggle('d-none');
          })
      })
    }
}

const checkCragCardContent = function(crag) {
    if(cragName.innerHTML !== crag.name) {
        clearCragContent();
        createCragCard(crag)
    } else if (cragName.innerHTML == "") {
        createCragCard(crag);
    }
}

const clearCragContent = () => {
    cragName.innerHTML = "";
    overviewHeader.innerHTML = "";
    cragOverview.innerHTML = "";
    travelHeader.innerHTML = "";
    cragTravel.innerHTML = "";
    guidebookHeader.innerHTML = "";
    cragGuidebook.innerHTML = "";
    map.innerHTML = "";
    const table = document.querySelector('table');
    const thead = document.querySelector('thead');
    const tbodies = document.querySelectorAll('tbody');
    const rockNames = document.querySelectorAll('.rockName');
    //remove all rockNames (all theads on the table of rock names)
    rockNames.forEach((rockName) => {
        table.removeChild(rockName);
    });
    //remove all routes that were added under the theads of rock names
    tbodies.forEach((tbody) => {
        table.removeChild(tbody)
    })
}

export {
    createCragCard,
    checkCragCardContent,
    clearCragContent
}