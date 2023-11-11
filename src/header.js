import { createHTMLelement } from "./html_element_creator";
import { container } from "./index";

function render_header(){
    const header = createHTMLelement('div', 'header-div', null);

    const title = createHTMLelement('h1', 'header-title', 'To-Do-List');

    header.appendChild(title);

    container.appendChild(header);
}

export { render_header } 