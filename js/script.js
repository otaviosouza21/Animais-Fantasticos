import ScrollSuave from './modules/scroll-suave.js';
import animacaoScroll from './modules/scroll-animacao.js';
import initFaq from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropMenu from './modules/drop-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetachAnimais from './modules/fetch-animais.js';
import initFetachBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()


animacaoScroll();
initFaq();
initTabNav();
initModal();
initTooltip();
initDropMenu();
initMenuMobile();
initFuncionamento();
initFetachAnimais();
initFetachBitcoin();


