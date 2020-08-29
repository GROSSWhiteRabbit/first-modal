import modal from './modulModal/modal.js';
import {showModal, closeModal} from './modulModal/modal.js';

const timerID = setTimeout (()=>showModal('.modal', timerID), 10000 );

modal('.modal','.btn', timerID);