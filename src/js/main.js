import modals from './modules/modals';
import sliders from './modules/sliders';
import sendForms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals();
    sliders('.main-slider-item', 'vertical')
    sliders('.feedback-slider-item', 'horizontical', '.main-prev-btn', '.main-next-btn');
    sendForms();
    showMoreStyles('.button-styles', '#styles .row')
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter();
    pictureSize('.sizes-block')
    accordion('.accordion-heading')
    burger('.burger', '.burger-menu')
    scrolling('.pageup');
})