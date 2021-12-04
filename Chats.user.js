// ==UserScript==
// @name         Chats
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.neural-university.ru/home
// @include        https://chat.neural-university.ru/*
// @icon         https://www.google.com/s2/favicons?domain=neural-university.ru
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
        async function GM_addStyle(css) {
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

    const dimGray = 'dimgrey';
    const regBlack = 'Black';
    const textColor = 'white';
    const btnRegulH = 'grey';
    const anotherGrey = 'darkgrey';
    const btnBlue = 'CornflowerBlue';

    const btnGreen = 'Lightgreen';
    const btnOrange = 'orange';
    const btnsomeRed = 'Crimson';
    const btnPurple = 'DarkOrchid';
        function changeTimezone() {

    let date = new Date();
    let formatter = new Intl.DateTimeFormat('en-US', { timeZone: "Europe/Moscow", timeStyle: 'short' });
    let usDate = formatter.format(date);
    let newDate = Number(usDate.split(':')[0]);
    newDate = usDate.includes('PM') ? newDate+12 : newDate;
            console.log(newDate);
    return newDate;

}

    let currTime = changeTimezone();
    let currTimeText = 'Приветсвую';
    let pureName = 'Коллега';
    let resText = `${currTimeText}, ${pureName}.`;
    const timeDict = {0: 'ночь',6: 'утро',12: 'день',18:'вечер'};

    GM_addStyle(`.currBtn:hover {
    border: 3px solid ${textColor};
    }`);
        GM_addStyle(`.currBtn:active {
    border: 2px solid ${textColor};
    }`);

        GM_addStyle(`.currBtn {
    box-sizing: border-box;
    transition: border 100ms ease;
    }`);

    GM_addStyle(`button, section, div, span, p, textarea, .rcx-css-dlop43,blockquote .rcx-css-1d5cod7,div .rcx-css-ps0pgs{
    background-color:${dimGray} !important;
    color:${textColor} !important;
    }`);
        GM_addStyle(`.message:hover {
    background-color:${btnRegulH} !important;
    }`);
        GM_addStyle(`.message.new-day:before, .rcx-tag--secondary {
    background-color:${regBlack};
    }`);

    GM_addStyle(`.rcx-sidebar-item__title {
    color:${anotherGrey} !important;
    }`);

               GM_addStyle(`.rcx-sidebar-item__icon--highlighted, .rcx-sidebar-item--highlighted {
    color:${textColor} !important;
    }`);
                   GM_addStyle(`.rcx-sidebar-item:active, .rcx-sidebar-item--selected {
    background-color:${regBlack} !important;
    }`);
                   GM_addStyle(`.message a, div .rcx-css-4wru5q a {
    color: ${btnBlue} !important;
    }`);
                       GM_addStyle(`.rc-popover.rc-popover--message-box, .rc-modal-wrapper {
        background-color: transparent !important;
    }`);
                           GM_addStyle(`.BIG {
        display: inline-block;
        position:fixed;
        font-size: 100px;
        background-color: darkred !important;
        height: 150px;
        z-index: 10000;
        padding: 50px 30px;
        bottom: 500px;
        left: 700px;
        border-radius: 50px;
    }`);
                               GM_addStyle(`.currAAA {
            color: ${btnBlue};
            font-weight: 900;
    }`);

                                   GM_addStyle(`.currEClass:hover {
            border: 2px solid red;
    }`);
                                   GM_addStyle(`.currEClass {
            transition: border 100ms ease-in-out;
    }`);





                                       GM_addStyle(`.startButton,.leftButton,.medButton, .rightButton {
    font-weight: 600;
    padding: 6px 11px;
    margin-right: 22px;
    border-radius: 5px;
    font-size: 16px;
    }`);

                                           GM_addStyle(`.startButton {
                         background-color: ${btnGreen} !important;
    }`);
                                               GM_addStyle(`.leftButton {
                           background-color: ${btnOrange} !important;
    }`);
                                               GM_addStyle(`.medButton {
                           background-color: ${btnsomeRed} !important;
    }`);
                                               GM_addStyle(`.rightButton {
                          background-color: ${btnPurple} !important;
    }`);


    setTimeout(()=>{
    const currError = document.querySelector('.toast.toast-error');
        if (currError) {
        currError.remove();
        };


    const curr = document.querySelector('.rc-header');
    }, 1000);

        setInterval(()=>{

   const allButtons = document.querySelectorAll('div.rcx-box.rcx-box--full.rcx-sidebar-item__wrapper div div figure img.rcx-avatar__element.rcx-avatar--x16');
   const allLinks = document.querySelectorAll('a.rc-box.rcx-box--full.rcx-sidebar-item.rcx-sidebar-item--clickable');
            const someAd = document.querySelector('audio');
   const currBell = document.createElement('button');

            document.body.append(currBell);

        currBell.addEventListener('click',()=>{
        someAd.play();
        });

        allLinks.forEach(e=>{

        const mainCharacther = e.children[0].children[1].children[1];

        if (mainCharacther.classList.contains('rcx-sidebar-item--highlighted')) {
            if (!mainCharacther.hasAttribute('data-bell')) {
                mainCharacther.setAttribute('data-bell', 'false');
                currBell.click();
            } else {
            if (mainCharacther.getAttribute('data-bell')==='true') {
                mainCharacther.removeAttribute('data-bell');
            }
            }
        };

        const currLab = e.getAttribute('aria-label');
        const currE = e.children[0].children[0].children[0].children[0].children[0];
        if (!currE.hasAttribute('data-eventList') && currLab.startsWith('question_')) {





            e.addEventListener('click', ()=>{
            setTimeout(()=>{
            const extraMesseges = document.querySelector('div.rcx-box.rcx-box--full.rcx-css-1yimpo4');


            const startButton = document.createElement('button');
                startButton.classList.add('startButton');
                startButton.setAttribute('data-message', 'welcome');
                startButton.textContent = 'Приветствие';

            const leftButton = document.createElement('button');
                leftButton.classList.add('leftButton');
                leftButton.setAttribute('data-message', 'another');
                leftButton.textContent = 'Прощание';

            const medButton = document.createElement('button');
                medButton.classList.add('medButton');
                medButton.setAttribute('data-message', 'exit-shift');
                medButton.textContent = 'Конец смены';

            const rightButton = document.createElement('button');
                rightButton.classList.add('rightButton');
                rightButton.setAttribute('data-message', 'another-shift');
                rightButton.textContent = 'Передача смены';

                if (!extraMesseges.classList.contains('hasButtons')) {
                extraMesseges.append(startButton,leftButton,medButton, rightButton);
                extraMesseges.children[0].remove();
                extraMesseges.children[0].remove();
                extraMesseges.children[0].remove();
                    };
                extraMesseges.classList.add('hasButtons');





                mainCharacther.setAttribute('data-bell', 'true');

            let currElement = document.querySelector('.rcx-box.rcx-box--full.rcx-box--with-inline-elements.rcx-css-1te28na');

                const currA = document.createElement('a');
                currA.classList.add('rcx-box','rcx-box--full','rcx-box--with-inline-elements', 'rcx-css-1te28na','currAAA');
                currA.textContent = currElement.textContent;
                currA.href = document.querySelector('a[rel="noopener noreferrer"]').href;
                currElement.parentNode.replaceChild(currA,currElement);


            startButton.addEventListener('click',addMessage);
                leftButton.addEventListener('click',addMessage);
                medButton.addEventListener('click',addMessage);
                rightButton.addEventListener('click',addMessage);

           const dateDictNew = {'ночь':'Доброй ночи.)','день':'Хорошего дня.)','утро':'Продуктивного утра.)','вечер':'Хорошего вечера'}

            function createMessage(attr,name, date) {
            switch (attr) {
                case 'welcome':
                    if (date==='ночь') {
                    return `Доброй ночи, ${name}.)`
                    }
                    return `Добрый ${date}, ${name}.)`
                case 'exit-shift':
                    return `${name}, уже ${date} и к сожалению моя смена окончилась. Надеюсь я смог вам помочь. `;
                case 'another-shift':
                    return `${name}, уже ${date} и к сожалению моя смена окончилась. Я передам вас следующему куратору. `;
                case 'another':

                    return `${name}, надеюсь я смог вам помочь. ${dateDictNew[date]}`;
            };

            }

            function addMessage(btn){
            const currButton = btn.currentTarget

            const currAttr = currButton.getAttribute('data-message');


            currElement = document.querySelector('.rcx-box.rcx-box--full.rcx-box--with-inline-elements.rcx-css-1te28na');
            if (currElement) {
            let currText = currElement.textContent;
                currText = currText.split('#');
                currText = currText[currText.length-1].split(' ').slice(1).filter(e=>e!=='');
           switch (currText.length) {
           case 1:
               pureName = currText[0];
               break;
           case 2:
           case 3:
               pureName = currText[1];
               break;
       };
                const currDate = new Date();
                currTimeText = Object.entries(timeDict)[0][1];
                for (let [time, text] of Object.entries(timeDict)) {
                if (currTime> time) {
                    currTimeText = text;
                };
                }

                resText = `${currTimeText}, ${pureName}.)`;
                const currTextArea = document.querySelector('textarea[aria-label="Сообщение"]');
                currTextArea.value = createMessage(currAttr,pureName,currTimeText);
                currTextArea.focus();
            };
            }


            },300)
            });

            currE.classList.add('currEClass');
        currE.setAttribute('data-eventList','true');
        currE.addEventListener('click', ()=>{
            setTimeout(()=>{
        const currBtnForInfo = document.querySelector(`[data-toolbox="0"]`);
        currBtnForInfo.click();
                setTimeout(()=>{
                    const currEdit = document.querySelector(`[aria-label="Редактировать"]`);
                    currEdit.click();
                    setTimeout(()=>{
                    const currCheckbox = document.querySelectorAll(`.rcx-box.rcx-box--full.rcx-css-zqz844`)[1];
                    currCheckbox.children[1].children[0].click();

                    const currSave = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button.rcx-button-group__item.rcx-css-t3n91h`);
                    currSave.click();

                    const currBack = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button--tiny-square.rcx-button--square.rcx-button--ghost.rcx-button.rcx-css-x7bl3q.rcx-css-1yzvz7u`);
                    currBack.click();
                        setTimeout(()=>{
                        const currMen = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button--square.rcx-button.rcx-button-group__item.rcx-css-1k1r0f9`);
                        currMen.click();

                        setTimeout(()=>{
                        const currMnaa = document.querySelectorAll(`ol[role="listbox"] li`);
                            for (let i = 0; i<3; i++) {
                            currMnaa[i].style.display = 'none';
                            };
                            currMnaa[3].children[0].children[1].classList.add('BIG');
                        }, 200);
                        }, 200);
                    }, 200);
                }, 500);
            }, 100)
        })
        };
        })

    const curr = document.querySelector('.rc-header');
    }, 1000);

})();