export default function outsideClick(element, callback){
    const html = document.documentElement;
    const dataOutside = 'data-outside';

    if (!element.hasAttribute(dataOutside)){
        element.setAttribute(dataOutside, '');
        setTimeout(() => {html.addEventListener('click', handleOutsideClick);})
    }

    function handleOutsideClick(event){
        if (!element.contains(event.target)) {
            html.removeEventListener('click', handleOutsideClick)
            element.removeAttribute(dataOutside);
            callback();
        } 
    }
}