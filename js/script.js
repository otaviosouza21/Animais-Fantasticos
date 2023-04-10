import ScrollSuave from './modules/scroll-suave.js';
import Faq from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropMenu from './modules/drop-menu.js'; 

import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';



const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Faq('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init()

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="conteiner"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

fetchAnimais('../../animaisapi.json','.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker','.btn-preco');

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropMenu = new DropMenu("[data-dropmenu]")
dropMenu.init();

initMenuMobile();
initFuncionamento();




