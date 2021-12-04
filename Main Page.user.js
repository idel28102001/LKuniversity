// ==UserScript==
// @name         Main Page
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://lk.neural-university.ru/profile/29245
// @match        https://lk.neural-university.ru/chats
// @include      https://lk.neural-university.ru/*
// @exclude      https://lk.neural-university.ru/admin/*
// @icon         https://www.google.com/s2/favicons?domain=neural-university.ru
// @grant        none
// @run-at document-end
// ==/UserScript==




(function() {
    function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
};

    GM_addStyle(`.currForm {
    top: 50%;
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, -50%);
    background: steelblue;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    }`);

    GM_addStyle(`.currField{
        background: white;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;
    }`);

    GM_addStyle(`.currEnter{
    color: white;
    background: dimgray;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    transform: scale 100ms ease-in-out;
    }`);
        GM_addStyle(`.currEnter:hover{
    transform: scale(1.02);
    }`);
            GM_addStyle(`.currEnter:active{
    transform: scale(0.98);
    }`);


    const btnRegul = 'dimgrey';
    const btnRegulH = 'grey';
    const textColor = 'white';
    const regBlack = 'Black';
    const smallIcon = 'https://lh3.google.com/u/0/d/1bk9O_nTyynwDA-gaafz-tox-FT8F2CNx=w1920-h947-iv1';
    const themePage = 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/09/09/spider-man-2-will-pit-miles-peter-against-venom-on-ps5-in-2023_feature.jpg';


    const someNew = document.querySelectorAll('.header__submenu');
    if (someNew.length) {
    someNew[1].classList.add('menu__custom');
    for (let i=0; i<someNew[1].children.length; i++ ) {
        someNew[1].children[+i].classList.add(`flex-ordrer-custom_${i}`)};
    };

    GM_addStyle(`.header__menu {
                 justify-content: space-around;}`);
    GM_addStyle(`.text-link {
                 transition-property: transform, color, background-color;
                 transition: 0.1s ease-in-out;
                 cursor: pointer;
                 padding: 10px 0 !important;
                 border-radius: 10px;
                 cursor: pointer;}`);
    GM_addStyle(`.text-link:hover, .text-link:focus, .customLink:hover, .customLink:focus {
                 text-decoration: none !important;
                 background-color: ${btnRegulH};
                 color: ${textColor};
                 transform: scale(1.02);}`);
    GM_addStyle(`a.text-link {
                 display: inline-block;}`);
    GM_addStyle(`.text-link:active, .customLink:active {
                 transform: scale(1,0.98) !important;}`);
    GM_addStyle(`.header__menu-item:hover .header__submenu {
                 display: flex;
                 flex-direction: column;`);

    GM_addStyle(`.flex-ordrer-custom_1 {
                 order: -1`);
    GM_addStyle(`.flex-ordrer-custom_2 {
                 order: -1`);
    GM_addStyle(`.customLink {
                 background-color: ${btnRegul};
    display: inline-block;
    font-size: 40px;
    padding: 10px 40px;
    border-radius: 10px;
    margin: 10px 0;
    color: ${textColor};
    font-weight: 600;
}`);
    GM_addStyle(`div.header__link a.text-link {
    display:none;
    }`);

GM_addStyle(`.customImg {
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    }`);

GM_addStyle(`.header__logo-img {
   margin: 0;
   width: unset;
   min-width: unset;
    }`);

GM_addStyle(`.header__avatar {
   display: none;
    }`);

GM_addStyle(`.header__logo {
   margin: 0;
    }`);

    GM_addStyle(`.header {
    background-color: transparent;
    }`);

    GM_addStyle(`.customLink-0{
    order:1;
        margin: 0;
    }`);
        GM_addStyle(`.customLink-0 .customLink{
    border-radius: 0 10px 10px 0;
    font-size:20px;
        max-width: 210px;

    }`);
        GM_addStyle(`.newMenu {
margin-right:auto;
    }`);
        GM_addStyle(`.customLink-3 {
        border-radius: 10px 0 0 10px;
    }`);
            GM_addStyle(`.customLink-2 {
            position:relative;
        border-radius: 0 10px 10px 0;
        padding: 10px 20px;
        transition:border-radius 50ms ease-in-out;
        transition-delay: 200ms;
    }`);
                GM_addStyle(`.customLink-2H {
            transition: border-radius 0.2s ease-in-out;
            border-radius: 0 10px 0 0;
    }`);
                GM_addStyle(`.customLink-1 {
        border-radius: 10px 0 0 10px;
    }`);
        GM_addStyle(`.header {
        box-shadow: none;
    }`);

        GM_addStyle(`.header__main {
        box-shadow: none;
    }`);

        GM_addStyle(`.header__info {
        flex: 1;
    }`);
            GM_addStyle(`.newBlank {
            overflow:hidden;
            height: 0;
            display:flex;
            flex-direction:column;
            position: absolute;
        width: 100%;
        left: 0;
        top: 67px;
        background-color: ${btnRegul};
        justify-content: center;
        border-radius: 0 0 10px 10px;
        transition: height 0.2s ease-in-out;
        transition-delay: 50ms;
    }`);
                GM_addStyle(`.menu__item {
            padding: 5px 10px;
            font-size: 20px;
            font-weight: 400;
            width: 100%;
    }`);
                    GM_addStyle(`.menu__item:hover {
            background-color: ${btnRegulH};
    }`);
                        GM_addStyle(`.menu__item:last-child {
            border-radius: 0 0 10px 10px;
    }`);


    const wind = document.querySelector('iframe');
    if (wind) {
    wind.style.height = '700px';
    };

    const logoText = document.querySelector('.header__logo-text');
    if (logoText) {
    logoText.style.display = 'None';
    };

    document.querySelectorAll('.header__menu-item._dropdown').forEach(e=>{
    e.style.display = 'None';
    });
    document.querySelectorAll('.header__menu-item').forEach(e=>{
    e.style.display = 'None';
    });
    function createLink(name, link, someClass=null) {
    const currLink = document.createElement('a');
        currLink.href = link;
        currLink.textContent = name;
        if (someClass) {
        currLink.classList.add(someClass);
        } else {
        currLink.classList.add('customLink');
        };
        return currLink;
    };
    const menu = document.querySelector('.header__info');
    const newMenu = document.createElement('div');
    newMenu.classList.add('newMenu');

    const optMenu = document.createElement('button');
    optMenu.classList.add('customLink');
    optMenu.textContent = 'Ещё';
    const newBlank = document.createElement('div');
    newBlank.classList.add('newBlank');
    optMenu.append(newBlank);
    newBlank.append(createLink('ВП','/admin/app/helpquestion/list', 'menu__item'),createLink('База','/lessons', 'menu__item'));


    const newBlankHeight = `${newBlank.children.length * 0.89}em`;
            GM_addStyle(`.newBlank-A {
            height: ${newBlankHeight};
    }`);
    optMenu.addEventListener('click', ()=>{
    optMenu.classList.toggle('customLink-2H');
    newBlank.classList.toggle('newBlank-A');
    });



    newMenu.append(createLink("Админка","/admin/app/homeworkresult/list"),optMenu);
    menu.append(newMenu,createLink("Чаты","/chats"));

    if(document.querySelector('.main.inner')){
    document.querySelector('.main.inner').style.display = 'None';
    };

    const lowMenu = document.querySelector('.header__menu.inner');
    if (lowMenu) {
    lowMenu.style.display = 'none'
    };

    const links = document.querySelectorAll('.header__info-button');
    if (links.length) {
    links[1].style.display = 'None'};

    const currImg = document.createElement('img');
    currImg.src = themePage;
    currImg.classList.add('customImg');

    document.querySelector('.app').append(currImg);

    const currBtn = document.querySelector('button.text-link')
    if (currBtn) {
    currBtn.classList.add('customLink')};

    document.querySelector('.header__logo-img').src = smallIcon;
    let i = 0;
    document.querySelectorAll('.customLink').forEach(e=>{
        if (i!==0) {
    e.classList.add(`customLink-${i}`);
        } else {
        e.tabIndex = 0;
        document.querySelector('.header__info-link').classList.add('customLink-0');
        };
        i++;
    });

    GM_addStyle(`
    .button._full, .button {
    background-color: ${btnRegul};
     }
    `);
       GM_addStyle(`
    .button:hover {
    box-shadow: 5px 8px 15px ${textColor};
     }
    `);
           GM_addStyle(`
    .button:active {
    background-color: ${btnRegul};
    box-shadow: 1px 4px 15px ${textColor};
     }
    `);
           GM_addStyle(`
    .tabs._alt .tabs__item.active{
    border-color: ${btnRegul};
     }
    `);

           GM_addStyle(`
    .checkbox__input:checked~.checkbox__border:not([class*="_clear"]){
    border-color: ${btnRegul};
    box-shadow: 0 0 0 1px ${btnRegul};
     }
    `);
        GM_addStyle(`
    .checkbox__input:checked~.checkbox__border .checkbox__mask, .checkbox__input:checked~.checkbox__mask {
    border-color: ${btnRegul};
    background-color: ${btnRegul};
    box-shadow: 0 0 0 1px ${btnRegul};
     }
    `);

    const paramsString = window.location.pathname;
    if (paramsString==='/notifications' || true) {
    const currMainPage = document.querySelector('.main.two-column.inner');
    const currMain = document.querySelector('.main.inner');
        if (currMainPage || currMain) {
            if (currMainPage && paramsString.includes('lesson') || paramsString.includes('notifications')) {
        currMainPage.style.display = 'flex';
            };
            if (!currMain.classList.contains('two-column') && !paramsString.includes('lesson')) {
                currMain.style.display = 'block';
            };
              GM_addStyle(`
              .number {
              background-color: ${btnRegul};
              }
              `);
              GM_addStyle(`
              .icon.icon-double-arrow {
              color: ${regBlack};
              }
              `);
                          GM_addStyle(`
              .info-row:hover {
              border-bottom-color: ${textColor};
              }
              `);

            GM_addStyle(`.form.bg._dropdowned {
            background-color: ${btnRegul}}`);

            GM_addStyle(`a, div, span {
            color:${textColor} !important;
            }`);
             GM_addStyle(`p a.text-link {
            display:inline-block;
            }`);

           GM_addStyle(`.pagination__item.active, .notes {
           background-color: ${btnRegul} !important;
           }`);

           GM_addStyle(`.header__main, .header__main-inner.inner {
           background-color: transparent !important;
           }`);

            GM_addStyle(`.main__content {
                border-radius: 20px;
    overflow-anchor: none;
    padding: 10px 20px;
}`);
          GM_addStyle(`.blue, .answer__info.bg {
              background-color: ${btnRegulH} !important;
    border-radius: 5px;
}`);


          GM_addStyle(`.event._new .event__header, .info-row__count, .red-dot {
              background-color: ${btnRegulH} !important;
}`);

                      GM_addStyle(`h3 a.text-link {
              display:inline-block;
}`);


        };

    };






})();