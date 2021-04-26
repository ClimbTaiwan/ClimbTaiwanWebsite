let currentCrag = '';
const cragCard = document.querySelector('#cragCard')
const cragName = document.querySelector("#cragName");
const map = document.querySelector('#map');
const mapBtn = document.querySelector('#mapBtn');
const totalClimbs = document.querySelector('#totalClimbs');

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
      const cragOverview = document.querySelector('#cragOverview');

      const p1 = document.createElement('p');
      const p1Text = document.createTextNode(crag.p1);
      p1.appendChild(p1Text);

      const p2 = document.createElement('p');
      const p2Text = document.createTextNode(crag.p2);
      p2.appendChild(p2Text);

      const p3 = document.createElement('p');
      const p3Text = document.createTextNode(crag.p3);
      p3.appendChild(p3Text);
      const br = document.createElement('br');
      p3.appendChild(br);

      const emailAddress = document.createElement('a');
      emailAddress.setAttribute('href', 'mailto:info@climbtaiwan.com');
      const emailAddressText = document.createTextNode('info@climbtaiwan.com');
      emailAddress.appendChild(emailAddressText);
      p3.appendChild(emailAddress);

      const cragTravel = document.querySelector('#cragTravel');
      const warningP = document.createElement('p');
      const warningText = document.createTextNode(crag.warning);
      warningP.appendChild(warningText);
      warningP.style.fontWeight = "bold";
      warningP.style.color = 'red';
      
      cragOverview.appendChild(p1);
      cragOverview.appendChild(p2);
      cragOverview.appendChild(p3);
      cragOverview.appendChild(warningP);
    }
    const climbTable = document.querySelector('#climbTable');
    if(crag.name == "Information") {
      climbTable.classList.add('d-none');
    } else {
      climbTable.classList.remove('d-none');
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

      crag.guidebook.forEach((guidebook) => {
        const guidebookDiv = document.querySelector('#guidebookDiv')
        const guidebookText = document.createTextNode(guidebook.text);
        const guidebookURLText = document.createTextNode(guidebook.urlText);
        const br = document.createElement('br');

        const guidebookTextP = document.createElement('p');
        const guidebookURLA = document.createElement('a');

        guidebookTextP.appendChild(guidebookText);
        guidebookTextP.appendChild(br);
        guidebookURLA.appendChild(guidebookURLText);
        guidebookURLA.setAttribute("href", guidebook.url);

        guidebookTextP.appendChild(guidebookURLA);
        guidebookDiv.appendChild(guidebookTextP);
      })
    }

    if(crag.mapHTML && crag.mapHTML != "") {
      mapBtn.classList.remove('d-none');
    } else {
      mapBtn.classList.add('d-none');
    }
    //Crag info
    const cragImg = document.querySelector("#cragImg");
    cragImg.setAttribute("src", crag.imgURL);

    if(crag.name != "Information") {
      const cragNameText = document.createTextNode(crag.name   +' │ ' + crag.chineseName);
      cragName.appendChild(cragNameText);
    } else {
      const cragNameText = document.createTextNode(crag.h1);
      cragName.appendChild(cragNameText);
    }

    if(crag.totalClimbs) {
      const totalClimbsText = document.createTextNode(crag.totalClimbs);
      totalClimbs.appendChild(totalClimbsText);
    }

    //Table
    const table = document.querySelector("#climbTable");
    if(crag.rocks) {
      crag.rocks.forEach((rock) => {
          //Add rock name row to top of table
          const thead = document.createElement("thead");
          const titletr = document.createElement('tr');
          const titleth = document.createElement('th');
          const titlethText = document.createTextNode(' '+rock.name);
          //Create down arrow icon
          const arrowIcon = document.createElement('i');
          arrowIcon.classList.add('fas');
          arrowIcon.classList.add('fa-chevron-down');
          const arrowIconSpan = document.createElement('span');
          arrowIconSpan.appendChild(arrowIcon);
          arrowIconSpan.classList.add('float-right');
          // Add rock name text & arrow Icon
          titleth.appendChild(titlethText);
          titleth.appendChild(arrowIconSpan);
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
              th.classList.add('th');
              tdRating.classList.add('td');
              tdStyle.classList.add('td');
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
              //tbody appears as only table header at first
              tbody.classList.add('d-none');
          })
          //Allows user to "collapse" climbing route lists
          titleth.addEventListener('click', () => {
            tbody.classList.toggle('d-none');
            // Switch arrow icon up/down
            arrowIcon.classList.toggle('fa-chevron-down');
            arrowIcon.classList.toggle('fa-chevron-up');
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
    guidebookDiv.innerHTML = "";
    map.innerHTML = "";
    totalClimbs.innerHTML = "";
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