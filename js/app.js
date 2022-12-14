/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/*** Iterate over DOM objects */

var section = document.getElementsByTagName('section');
 console.log("section: ", section);

// skapa nya html-noder 
// sätt in i meny

//Iterate over DOM

var arrayFrom = Array.from(section);
var newSpan = document.createElement('span');
//var pageHeader = docume
var navBarList = document.getElementsByClassName('navbar__list');
var navBarListQ = document.querySelector("#navbar__list");


arrayFrom.forEach(element => {
  console.log("element: ", element.id)
    var listItem = document.createElement('li');
    var aItem = document.createElement('a');
    
    aItem.href="#"+element.id;
    aItem.textContent = element.id;
    listItem.appendChild(aItem);
    navBarListQ.appendChild(listItem);


});


/* var section3 = document.querySelector("#section3");
section3.scrollIntoView({behavior: "smooth"}) */

// document.body.appendChild();
// interface html <..-> js script include

/** #include "./js/app.js" **/

/***/

/**
 * Navigation

Navigation is built dynamically as an unordered list. 
Start with empty ul and dynamically 
build navigation using Append, appendChild, and innerHTML.
 */

/**
 * 
 * 
 * Scroll to Anchor

When clicking an item from the navigation menu, the link should scroll to the appropriate section.
You can use the following methods to fulfill this criterion:

Use addEventListener('click',....) to listen to the click event.
Use preventDefault() as if there is a default event occurring we need to stop that.
There are several javascript methods for scrolling, scroll(), scrollBy(), and scrollIntoView() are all acceptable.
A smooth scrolling behavior is expected in the project.
 */