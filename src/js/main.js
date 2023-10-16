import modals from './modules/modals';
import sliders from './modules/sliders';
import sendForms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals();
    sliders('.main-slider-item', 'vertical')
    sliders('.feedback-slider-item', 'horizontical', '.main-prev-btn', '.main-next-btn');
    sendForms();
    showMoreStyles('.button-styles', '.styles-2')
})