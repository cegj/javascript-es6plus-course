import initTooltip from "./modules/tooltip.js";

import initModal from "./modules/modal.js";

import initDropdownMenu from "./modules/dropdownmenu.js";

import initMobileMenu from "./modules/mobilemenu.js";

import initNumberAnimation from "./modules/numbers.js";

import {initSearchCEP, initBitcoinSearch, initChuckNorrisJokes} from "./modules/fetch_api.js";

import {Slide, SlideNav} from './slider/js/slide.js';

initTooltip();

initModal();

initDropdownMenu();

initMobileMenu();

initNumberAnimation();

initSearchCEP();

initBitcoinSearch();

initChuckNorrisJokes();

const slide = new SlideNav('.slide', '.slide-wrapper');

slide.init();

slide.changeSlide(2);

slide.addArrow('.prev', '.next');

slide.addControl();