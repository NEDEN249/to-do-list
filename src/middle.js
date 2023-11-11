import { createHTMLelement } from "./html_element_creator";
import { container } from "./index";

function render_middle_div(){
    const middle_div = createHTMLelement('div', 'middle-div', null);
    container.appendChild(middle_div);
    return document.getElementById('middle-div');
}

export { render_middle_div }