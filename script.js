const LongDong = {
    name: "Long Dong",
    overview: "Long Dong is without a doubt the premier climbing area of Taiwan. It offers world class climbing on bullet hard sandstone, against an atmospheric coastal backdrop. There are a huge number of bolted sport routes and trad routes across a wide range of grades, as well as a handful of deep water solo and bouldering routes. Long Dong is divided up into six main crags.",
    travel: "Long Dong is about one hour away from Taipei by car.",
    imgURL: "./imgs/longDong.jpg",
    rocks: [
        {
            name: "Back Door - B1",
            routes: [
                {
                    name: "Bo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Po",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Mo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Fo",
                    rating: 5.7,
                    style: "Trad"
                }
            ]
        }
    ]
}

const ReHai = {
    name: "Re Hai",
    overview: "Long Dong is without a doubt the premier climbing area of Taiwan. It offers world class climbing on bullet hard sandstone, against an atmospheric coastal backdrop. There are a huge number of bolted sport routes and trad routes across a wide range of grades, as well as a handful of deep water solo and bouldering routes. Long Dong is divided up into six main crags.",
    travel: "Long Dong is about one hour away from Taipei by car.",
    imgURL: "./imgs/longDong.jpg",
    rocks: [
        {
            name: "Back Door - B1",
            routes: [
                {
                    name: "Fo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Mo",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Po",
                    rating: 5.7,
                    style: "Trad"
                },
                {
                    name: "Bo",
                    rating: 5.7,
                    style: "Trad"
                }
            ]
        }
    ]
}

const crags = []

crags.push(LongDong);
crags.push(ReHai);

const navLinks = document.querySelectorAll(".nav-link");
const cragCard = document.querySelector('#cragCard')

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const linkText = e.target.innerHTML;
        crags.forEach((crag) => {
            if(crag.name == linkText) {
                checkCragCardContent(crag);
                cragCard.classList.toggle('d-none');
            }
        })
    })
});

const createCragCard = function(crag) {
    //Crag info
    const cragName = document.querySelector("#cragName");
    const cragOverview = document.querySelector("#cragOverview");
    const cragTravel = document.querySelector("#cragTravel");
    const cragImg = document.querySelector("#cragImg");
    cragImg.setAttribute("src", crag.imgURL);

    const cragNameText = document.createTextNode(crag.name);
    const cragOverviewText = document.createTextNode(crag.overview);
    const cragTravelText = document.createTextNode(crag.travel);
    cragName.appendChild(cragNameText);
    cragOverview.appendChild(cragOverviewText);
    cragTravel.appendChild(cragTravelText);

    //Table
    const table = document.querySelector("#climbTable");
    crag.rocks.forEach((rock) => {
        //Add rock name row to top of table
        const thead = document.createElement("thead");
        const titletr = document.createElement('tr');
        const titleth = document.createElement('th');
        const titlethText = document.createTextNode(rock.name);
        titleth.appendChild(titlethText);
        titleth.setAttribute("colspan", "4");
        titletr.appendChild(titleth);
        thead.appendChild(titletr);
        thead.classList.add('rockName');
        table.appendChild(thead);

        //Routes
        const tbody = document.createElement('tbody');
        rock.routes.forEach((route) => {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            const thText = document.createTextNode(route.name);
            th.appendChild(thText);
            th.setAttribute("scope", "row");
            const tdRating = document.createElement('td');
            const tdStyle = document.createElement('td');
            const tdRatingText = document.createTextNode(route.rating);
            const tdStyleText = document.createTextNode(route.style);
            tdRating.appendChild(tdRatingText);
            tdStyle.appendChild(tdStyleText);
            tr.appendChild(th);
            tr.appendChild(tdRating);
            tr.appendChild(tdStyle);
            tbody.appendChild(tr);
        })
        table.appendChild(tbody);
    })
}

const checkCragCardContent = function(crag) {
    if(cragName.innerHTML == "") {
        createCragCard(crag)
    } else if (cragName.innerHTML !== crag.name) {
        cragName.innerHTML = "";
        cragOverview.innerHTMl = "";
        cragTravel.innerHTML = "";
        const table = document.querySelector('table');
        const thead = document.querySelector('thead');
        const tbody = document.querySelector('tbody');
        const rockName = document.querySelector('.rockName');
        table.removeChild(rockName);
        table.removeChild(tbody);
        createCragCard(crag);
    }
}