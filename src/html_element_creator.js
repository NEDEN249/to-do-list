//this module contains a function that creates HTML elements with an id and text content

function createHTMLelement(type, id, content){
    const element = document.createElement(type); //creates a new element of type type 
    if (id){ //creates a new element with the id attribute if id is passed
        element.id = id;
    }
    if(content){ //adds the content to the element if content is passed
        element.innerHTML = content;
    }
    return element; //returns the element
}

export { createHTMLelement }

//createHTMLelement(type of html element you wish to create, id selector you wish to give the element, any content you wish to give the element)