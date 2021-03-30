import { crags } from './crags.js';
import { createCragCard, checkCragCardContent, clearCragContent } from './renderCragCard.js';

const navLinks = document.querySelectorAll(".nav-link");
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