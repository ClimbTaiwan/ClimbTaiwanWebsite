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
    overview: "Re Hai is a small outcrop of volcanic rock overlooking the Xinbeitou district of Taipei. It has a distinct jungly feel with scenic views of Xinbeitou and Yangmingshan National Park from the top. There are a total of 23 documented routes, up to around 15 meters in length. All areas are in the shade until around noon. Whilst the trees do provide some cover from the sun in the afternoon, unfortunately they are also prime territory for mosquitos!",
    travel: "Re Hai is approximately a 30 minute walk from the Xinbeitou MRT station. From the MRT station, you need to walk along Guangming Road past Beitou Park (and Burger King) until you get to the Spa Sring Resort. From here, follow the road up to the right and continue walking along Wenquan Road until you reach a steep upward winding road. Follow the road round to the second bend until you arrive at a trail entrance marked by a post inscribed with red painted Chinese characters (GPS coordinates 25.135342, 121.516474). Head up the trail until you reach a large boulder and then take the path the to the right. Continue upwards and shortly after the path levels out you will arrive at the First Wall.",
    imgURL: "./imgs/ReHai.jpg",
    rocks: [
        {
            name: "First Wall",
            routes: [
                {
                    name: "Yi",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Er",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "San",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Si",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Wu",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Liu",
                    rating: 5.9,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Overhang Wall",
            routes: [
                {
                    name: "Left Arete",
                    rating: 5.7,
                    style: "Sport"
                },
                {
                    name: "Layback Roof",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Dual Overhangs",
                    rating: "5.11b",
                    style: "Sport"
                },
                {
                    name: "Crack Romp",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Crack Jump",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Gully Route",
                    rating: "5.10a",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Skinny Wall",
            routes: [
                {
                    name: "Skinny Arete",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Skinny Slab",
                    rating: 5.7,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Fat Wall",
            routes: [
                {
                    name: "Fat Bulge",
                    rating: 5.5,
                    style: "Sport"
                },
                {
                    name: "Fat Jugs",
                    rating: 5.8,
                    style: "Sport"
                }
            ]
        },
        {
            name: "White-streak Wall",
            routes: [
                {
                    name: "Left Edge",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "White Streak",
                    rating: "5.10b",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Last Wall",
            routes: [
                {
                    name: "Chimney Face",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crack Face",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Slab Left",
                    rating: "5.10b",
                    style: "Sport"
                },
                {
                    name: "Slab Right",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crimpfest",
                    rating: "5.11a",
                    style: "Sport"
                }
            ]
        }
    ]
}

const BigCannonCliff = {
    name: "Big Cannon Cliff",
    overview: "",
    travel: "",
    imgURL: "./imgs/BigCannonCliff.jpg",
    rocks: []
}

const GuanZiLing = {
    name: "Guan Zi Ling",
    overview: "",
    travel: "",
    imgURL: "./imgs/GuanZiLing.jpg",
    rocks: []
}

const ShouShan = {
    name: "Shou Shan",
    overview: "",
    travel: "",
    imgURL: "./imgs/ShouShan.jpg",
    rocks: []
}

const crags = []

crags.push(LongDong);
crags.push(ReHai);
crags.push(BigCannonCliff);
crags.push(GuanZiLing);
crags.push(ShouShan);

const navLinks = document.querySelectorAll(".nav-link");
const cragCard = document.querySelector('#cragCard')
const cragName = document.querySelector("#cragName");

//For each link in the navbar
navLinks.forEach((link) => {
    //when the link is clicked
    link.addEventListener('click', (e) => {
        //text of the link
        const linkText = e.target.innerHTML;
        //if the information card's name is the same as the link text,
        //take it off the page and clear its content
        if(cragName.innerHTML == linkText) {
            cragCard.classList.add('d-none');
            clearCragContent();
        // if that is not the case
        } else {
            //check each crag in the crags array
            crags.forEach((crag) => {
                //if a crag's name matches the link text:
                if(crag.name == linkText) {
                    //fill out the card with the crag's info
                    checkCragCardContent(crag);
                    //remove the class that makes the card not displayed
                    cragCard.classList.remove('d-none');
                }
            })
        }
    })
});

const createCragCard = function(crag) {
    //Crag info
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
        //Set it to extend across 4 rows of the table
        titleth.setAttribute("colspan", "4");
        titletr.appendChild(titleth);
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
    })
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
        cragOverview.innerHTML = "";
        cragTravel.innerHTML = "";
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