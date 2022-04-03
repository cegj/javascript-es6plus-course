export default function initDropdownMenu(){

    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach((menu) => {

        ['click', 'touchstart'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        })
    })

    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, () => {
            this.classList.remove('active')
        });
        }
    }

    function outsideClick(element, callback){
        const html = document.documentElement;
        const dataOutside = 'data-outside';

        if (!element.hasAttribute(dataOutside)){
            element.setAttribute(dataOutside, '');
            html.addEventListener('click', handleOutsideClick);
        }

        function handleOutsideClick(event){
            if (!element.contains(event.target)) {
                html.removeEventListener('click', handleOutsideClick)
                element.removeAttribute(dataOutside);
                callback();
            } 
        }
    }