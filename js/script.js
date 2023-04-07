import ScrollSuave from './modules/scroll-suave.js';
import Faq from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropMenu from './modules/drop-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetachAnimais from './modules/fetch-animais.js';
import initFetachBitcoin from './modules/fetch-bitcoin.js';
import animacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()


const accordion = new Faq('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init()


initModal();
initTooltip();
initDropMenu();
initMenuMobile();
initFuncionamento();
initFetachAnimais();
initFetachBitcoin();
animacaoScroll();


