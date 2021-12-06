
// ==UserScript==
// @name         Admin
// @namespace    http://tampermonkey.net/
// @version      0.1.3.14
// @description  try to take over the world!
// @author       You
// @icon         https://www.google.com/s2/favicons?domain=neural-university.ru
// @include      https://lk.neural-university.ru/*
// @include        https://chat.neural-university.ru/*
// @grant        none
// @grant          GM_addStyle
// @run-at document-end
// ==/UserScript==

(function() {



    const btnRed = 'red';
    const btnRedH = 'Brown';
    const textColor = 'white';

    const btnBlue = 'CornflowerBlue';
    const btnBlueH = 'Blue';

    const regBlack = 'Black';
    const btnRegulH = 'grey';
    const dimGray = 'dimgray';
    const anotherGrey = 'darkgrey';

    const btnGreen = 'Lightgreen';
    const btnOrange = 'orange';
    const btnsomeRed = 'Crimson';
    const btnPurple = 'DarkOrchid';


    const smallIcon = 'https://lh3.google.com/u/0/d/1bk9O_nTyynwDA-gaafz-tox-FT8F2CNx=w1920-h947-iv1';
    const themePage = 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/09/09/spider-man-2-will-pit-miles-peter-against-venom-on-ps5-in-2023_feature.jpg';


    let regularText = `Задание принято. Все задачи выполнены верно. Жду следующих работ. Успехов.)`;
    const extraMess = `Задание необходимо доработать.`;
    const dictTopics = {1:'Тема зачтена. Интересная тема для выбора, жду следующего шага. Успехов.)',
                       2: 'База зачтена. Всё хорошо, жду от вас 3-его шага. Успехов.)',
                       3: 'Парсинг засчитываю. Хорошо поработали, жду от вас хорошего прототипа нейронки. Успехов.)',
                       4: 'Хорошая точность, засчитываю прототип. Жду итогового результата по нейронке. Успехов.)',
                       5: 'Финальная нейронка впечатляет. Жду от вас презентации. Успехов.)',
                       6: 'Замечательная презентация - засчитываю. Жду вас на защите и экзамене. Успехов.)',
                       7: 'Поздравляю с защитой Вашего проекта!',
                       8:'Поздравляю с успешной экзаминацией!',
                       9:'Замечательная интеграция нейронки!',};
    const videoMessage = `Задание принято, разбор скоро будет.)`
    let resText;



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
    const paramsString = window.location.pathname
    const currLinkLocation = window.location.origin





    if (paramsString === '/admin/app/user/join_to_rc_room') {

   const currBtn = document.querySelector('#join_to_chat_room_form_submit');
    currBtn.classList.add('currBtn', 'btn', 'btn-sm');

    const currInp = document.querySelector('#join_to_chat_room_form_roomName');
    currInp.placeholder = 'Введите комнату';
    currInp.classList.add('currInp');

    GM_addStyle(`.currInp {
    font-size: 30px;
    outline: none;
    padding: 10px;
    border-radius: 20px;
    border: none;
                }`);
        GM_addStyle(`.currBtn {
    font-size: 20px;
    outline: none;
    padding: 6px;
    border-radius: 10px;
    border: none;
    background-color: ${btnBlue};
                }`);



    }

    if (paramsString.includes('/admin')) {

        GM_addStyle(`.form-actions.stuck{
        position: static;
        margin-left: 0;
        }`)

                GM_addStyle(`.body__scroll {
    overflow-y: scroll;
                }`);
     document.body.classList.add('body__scroll');


     const currAnswer = document.querySelector('.form-group.col-md-6.p-l-0');
        if (currAnswer) {
        console.log(currAnswer.style.width='100%');
        }

           const currCheckList = document.querySelectorAll('.form-group.col-md-6.p-r-0');
          currCheckList.forEach(e=>{
          if (e.children[0].textContent.trim() === 'Чек-лист проверки') {
        e.remove();
       };
        })



    const currLink = document.querySelector('.select2-choice');
const currSelect = document.querySelector('select');
    const currNum = document.querySelectorAll("input.form-control");
    if (currLink) {
    currSelect.children[2].setAttribute('selected', 'true');
        currNum[1].value = 10;
        if (currNum[1].max) {
        currNum[1].value = currNum[1].max;
        };
    };
    let pureName = 'Коллега';
    const currName = document.querySelectorAll('.control-label');
    const currLinks = document.querySelector('.help-block.sonata-ba-field-help')
    if (currName.length) {
    if (currName[0].textContent.toLowerCase()!=='id') {
       const currN = currName[0].textContent.trim().split(':')[1].trim().split(' ').filter(e=>e!=='');
       switch (currN.length) {
           case 1:
               pureName = currN[0];
               break;
           case 2:
           case 3:
               pureName = currN[1];
               break;
       };
    };
    };






    const currSome = document.querySelectorAll('.ck-link_selected');
    if (currSome.length) {
    currSome.forEach(e=>{
    e.setAttribute('tabIndex',0);
    });
    };

    if (currLink) {
    currLink.children[0].textContent = 'Сдал';
    };


    const currPreset = document.querySelectorAll('.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline');


    function checkIfpartInWord(arg, array) {
    for (let i=0; i<array.length; i++) {
        if (arg.startsWith(array[i])) {
        return true;
        };
    }
        return false;
    };

    const videoReq = 'Разбор обязателен. Причина:';
    const videoTextNew = 'Разбор не нужен. Причина:';
    const newVideoBlank = document.createElement('p');
    let resVideoText;
    function topicFuncs(StudName, num) {
    return `Добрый день, ${StudName}. ${dictTopics[num]}`;
    };

            function funcName(StudName, text) {
    return `Добрый день, ${StudName}. ${text}`;
    };

    resText = funcName(pureName, regularText);
    const currList = document.querySelectorAll('.control-label');
    const currContList = document.querySelectorAll('.form-group');
    if (currList.length===8) {
    if (currList[6].textContent.trim()==='Ссылка на видеоразбор домашней работы') {
        resText = funcName(pureName, videoMessage);
        newVideoBlank.classList.add('newVideoBlank');
        currContList[0].append(newVideoBlank);

    };
    };

    const textTopicArr = [706, 707, 708, 750, 751, 752, 753, 754, 755, 756, 757, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780,
                          781, 782, 783, 784, 785, 786, 787, 788, 822, 823, 824, 825, 826, 827, 828, 829] //Все текстовые занятия
    const notMainTopics = [8, 9, 10, 11, 12, 13, 14, 15, 32, 44, 49, 50, 52, 53, 54, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 79, 80, 81, 82, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
                           100, 101, 102, 103, 111, 112, 113, 114, 115, 116, 119, 120, 121, 122, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 151, 152,
                           153, 154, 155, 156, 157, 158, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
                           189, 190, 191, 192, 193, 194, 195, 197, 198, 199, 200, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
                           225, 226, 227, 228, 229, 230, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 729, 733, 734,
                           735, 736, 737, 739, 740, 741, 791, 792, 793, 794, 798, 800, 802, 804, 805, 808, 810, 811, 812, 813, 818, 819, 820, 821, 830, 833, 836, 838, 842, 843, 845, 847, 848,
                           849, 851]; // Уроки не из основной программы

    const graduateTopics = [238,240,241,242,243,244,245,246,247, 743, 744,745]; // Все дипломные занятия.

    const namesTopicArr = ['гринь александр витальевич','чаевский алексей валерьевич','попов дмитрий владимирович','буньков александр андреевич','миних владимир анатольевич','кротов никита михайлович',
                          'корепин павел александр','еремин евгений александрович','тухватуллин руслан рафикович','ли анатолий  евгеньевич'];

    if (currLinks) {
        let currLinkText = currLinks.lastChild.href.split('/');
        currLinkText = Number(currLinkText[currLinkText.length-1]);
    const currTopText = currLinks.lastChild.textContent.trim().toLowerCase();
        const currNameText = currName[0].textContent.trim().split(':')[1].trim().toLowerCase();
        if (currList.length===8) {
        if (namesTopicArr.includes(currNameText)) {
        resVideoText = `${videoReq} Участнику по договору требуется видеоразбор.`;
        } else if (textTopicArr.includes(currLinkText)) {
                   resVideoText = `${videoTextNew} Это текстовое занятие.`;
                   newVideoBlank.classList.add('newVideoBlank-blue');
        } else if (notMainTopics.includes(currLinkText)){
                   resVideoText = `${videoTextNew} Урок не из основной программы.`;
                   newVideoBlank.classList.add('newVideoBlank-blue');

        }else if (graduateTopics.includes(currLinkText)){
                   resVideoText = `${videoTextNew} Тематика дипломной работы.`;
                   newVideoBlank.classList.add('newVideoBlank-blue');

        } else {
                   resVideoText = `${videoReq} Урок не числится в списке текстовых занятий.`;
                   };

        };
        newVideoBlank.textContent = resVideoText;
        if ((notMainTopics.includes(currLinkText) || textTopicArr.includes(currLinkText)) && !namesTopicArr.includes(currNameText)) {
        resText = funcName(pureName,regularText);
        };
    };

    const currTopic = document.querySelectorAll('.sonata-ba-field.sonata-ba-field-standard-natural');
    if (currTopic.length) {
    let topicText = currTopic[0].children[0].value;
        topicText = /Этап № \d/.exec(topicText);
        if (topicText) {
        const currNumber = Number(/\d/.exec(topicText)[0]);
        resText = topicFuncs(pureName, currNumber);
        };
    };

    if (currPreset.length) {
    currPreset[2].children[0].textContent = resText;
    };


   GM_addStyle(`a {
    color: ${textColor};
    font-weight: 900;
    }`);
       GM_addStyle(`.navbar-default .navbar-nav>li>a, .navbar-default .navbar-nav>li>a:focus{
    color: ${textColor};
    font-weight: 900;
    }`);
       GM_addStyle(`a.btn-link {
    color: ${textColor};
    font-weight: 900;
    }`);

    document.querySelectorAll(`a`).forEach(e=>{
        switch (e.textContent.trim()) {
            case "Выйти из всех help_desk_room's":
                e.remove();
                break;
            case "Добавить себя в комнату":
                e.classList.add('newRoom');

        }

    });

    GM_addStyle(`.newVideoBlank {
    background-color: ${btnRed};
    font-size: 20px;
    border-radius: 10px;
    font-weight: 600;
    padding: 10px 20px;
    }`);
    GM_addStyle(`.newVideoBlank-blue {
    background-color: ${btnBlue};
    }`);

        GM_addStyle(`.newRoom {
    display: inline-block;
    background-color: ${btnBlue};
    padding: 10px;
    border-radius: 10px;
    color: ${textColor};
    margin:10px 0;
    }`);

            GM_addStyle(`.newRoom:hover, .newRoom:focus {
    background-color: ${btnBlueH};
    color: ${textColor};
        transform: scale(1.02);
    }`);
                GM_addStyle(`.newRoom:active {
    transform: scale(0.98);
    }`);

                    GM_addStyle(`input.input {
    color: ${regBlack}
    }`);
                        GM_addStyle(`input.input::placeholder {
    color: ${dimGray}
    }`);

                        GM_addStyle(`.form__label.label-left.required {
    display: none;
    }`);






    GM_addStyle(`.text-red:hover {
                 background-color: ${btnRedH} !important;}`);
    GM_addStyle(`.text-red:focus {
                 background-color: ${btnRedH} !important;}`);


    GM_addStyle(`td {
                 color:${textColor};
                 background-color: ${btnRegulH};}`);
    GM_addStyle(`body, div, nav, span {
                 color:${textColor} !important;
                 background-color: ${dimGray} !important;}`);
    GM_addStyle(` a.logo, th a, .select2-container .select2-choice, .select2-container .select2-choices, .select2-container .select2-choices .select2-search-field input{
                 color:${textColor};
                 background-color: ${dimGray} !important;}`);
   GM_addStyle(`td a.sonata-link-identifier, ul li.active {
                 color:${textColor};
                 background-color: transparent;}`);
   GM_addStyle(`.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
   color:${textColor};
                 background-color: ${regBlack};
                 border-color: ${regBlack}}`);

    GM_addStyle(`.customImg {
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    }`);

        GM_addStyle(`.box.box-primary {
    border: none;
    }`);
        GM_addStyle(`.btn-primary {
    background-color: ${btnRegulH};
    border-color: ${btnRegulH};
    }`);
            GM_addStyle(`.btn-primary:hover, .btn-primary:focus, .btn-primary:active:hover{
    background-color: ${regBlack};
    border-color: ${regBlack};
    }`);

                GM_addStyle(`.btn-primary:active{
    opacity: 0.95;
        background-color: ${regBlack};
    border-color: ${regBlack};
    }`);

                    GM_addStyle(`.sticky-wrapper, .navbar{
    border: none;
    }`);

                        GM_addStyle(`.container-fluid{
    border-radius: 20px;
    border: 2px solid ${textColor};
    }`);


    GM_addStyle(`td div.btn-group {
                 border-radius: 20px;}`);

    GM_addStyle(`td div .btn.btn-sm, .text-red {
                 font-size: 16px;
                 transition-property: color, background-color, transform;
                 color: ${textColor};
                 border-radius: 20px;
                 transition: .1s ease-in-out;
                 font-weight: 600;}`);

        GM_addStyle(`td div .btn.btn-sm {
                 background-color: ${btnBlue} !important;}`);
         GM_addStyle(`td div .btn.btn-sm.text-red {
                 color: ${textColor} !important;
                 background-color: ${btnRed} !important;}`);



    GM_addStyle(`.btn.btn-sm:hover {
                 color:${textColor} !important;
                 background-color: ${btnBlueH} !important;
                 transform: scale(1.02)}`);
    GM_addStyle(`.btn.btn-sm:focus {
                 color:${textColor} !important;
                 background-color: ${btnBlueH} !important;}`);
    GM_addStyle(`.btn.btn-sm:active {
                 opacity: 0.9;
                 transform:scale(0.96);}`);

        GM_addStyle(`td div .btn.btn-sm.text-red:hover {
                 color:${textColor} !important;
                 background-color: ${btnRedH} !important;
                 transform: scale(1.02)}`);
    GM_addStyle(`td div .btn.btn-sm.text-red:focus {
                 color:${textColor} !important;
                 background-color: ${btnRedH} !important;}`);
    GM_addStyle(`td div .btn.btn-sm.text-red:active {
                 opacity: 0.9;
                 transform:scale(0.96);}`);
    GM_addStyle(`.info-box-icon.bg-aqua {
                 background-color: ${regBlack} !important;}`);
    GM_addStyle(`.sonata-toggle-filter.sonata-ba-action {
                 color: ${regBlack} !important;}`);

    GM_addStyle(`.customFlex {
                 display:flex;
                 justify-content: space-between;}`);
    GM_addStyle(`th, td {
                 background-color: ${btnRegulH} !important;}`);
    GM_addStyle(`.btn-success {
                 font-size: 30px;
    padding: 10px 20px;
    border-radius: 20px;}`);
    document.querySelectorAll('.logo')[0].href = '/';
    document.querySelectorAll('.logo')[0].children[0].src = smallIcon;
    document.querySelectorAll('.logo')[0].children[1].remove();

    document.body.classList.add('sidebar-collapse');

    const currPlace = document.querySelectorAll('td div a.btn.btn-sm');
    const newBtn = document.createElement('btn');
    newBtn.classList.add('btn','btn-sm');
    GM_addStyle(`btn.btn.btn-sm {
                 color: ${textColor};
                 background-color:${btnBlue};
                 font-weight: 600;
                 border-radius: 10px;
                 font-size:16px;}`);
    newBtn.textContent = 'Простые домашки';
    newBtn.addEventListener('click', () => {
                            currPlace.forEach(e=>{
        if (!e.classList.contains('text-red')){
    window.open(e.href)
        };
    })
    });

    const redBtn = document.createElement('btn');
    redBtn.classList.add('text-red');
    GM_addStyle(`btn.text-red {
                 color: ${textColor} !important;
                 border:none;
                 padding: 7px 10px;
                 background-color:${btnRed};
                 font-weight: 600;
                 border-radius: 10px;
                 font-size:16px;}`);
    redBtn.textContent = 'ВИП домашки';
    redBtn.addEventListener('click', () => {
                            currPlace.forEach(e=>{
        if (e.classList.contains('text-red')){
    window.open(e.href)
        };
    })
    });

    let i = 0;
    const currGroup = document.querySelectorAll('.form-group');
    currGroup.forEach(e=>{
    if (i+1 === currGroup.length) {
    e.style.display = 'none';
    } else if (i+1 === currGroup.length-1) {
        if (currGroup[i].children[0].textContent.trim().toLowerCase()==='фильтровать') {
        currGroup[i].append(newBtn,redBtn);
       currGroup[i].classList.add('customFlex');
        };
    };
     i++;
    });

    if (document.querySelector('div.form-group a.btn.btn-default')) {
    document.querySelector('div.form-group a.btn.btn-default').style.display='none';
    };
    document.querySelectorAll('td .btn-group .btn.btn-sm').forEach(e=>{
    e.tabIndex = 1000;
    });
    if (paramsString.includes('/admin/app/commenttreehomeworkresult/create')) {
        const currCont = document.querySelector('.content-header');
        if (currCont) {
        currCont.remove();
        };
    GM_addStyle(`
    a {
    color: ${textColor};
    }
    `);
        const currSomeSelect = document.querySelectorAll('.sonata-ba-field.sonata-ba-field-standard-natural');
               currSomeSelect[3].addEventListener('mouseout', ()=>{
        const currLinks = document.querySelector('#select2-results-1');
                   if (currLinks.children.length) {
                   for (let i=0; i<currLinks.children.length;i++) {
                   currLinks.children[i].addEventListener('mouseover', e=>{
                   const currSomeText = e.currentTarget.firstChild.textContent.trim();
                   if (currSomeText.toLowerCase()!=='сдал') {
                       currNum[1].value=0;
                   currPreset[2].children[0].textContent = funcName(pureName,extraMess);
                   } else {
                       currNum[1].value = 10;
                       if (currNum[1].max) {
                           currNum[1].value = currNum[1].max;
                       };
                   currPreset[2].children[0].textContent = resText;
                   };
                   });
                   };
                   };
        });
};



    } else if (currLinkLocation==='https://chat.neural-university.ru') {


            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////    //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////    //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////

         function changeTimezone() {

    let date = new Date();
    let formatter = new Intl.DateTimeFormat('en-US', { timeZone: "Europe/Moscow", timeStyle: 'short' });
    let usDate = formatter.format(date);
    let newDate = (Number(usDate.split(':')[0])+1) % 12;
    newDate = usDate.includes('PM') ? newDate+12 : newDate;
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
            color: ${btnBlue} !important;
            font-weight: 900 !important;
    }`);

                                   GM_addStyle(`.currEClass:hover {
            border: 2px solid red;
    }`);
                                   GM_addStyle(`.currEClass {
            transition: border 100ms ease-in-out;
    }`);





                                       GM_addStyle(`.startButton,.leftButton,.medButton, .rightButton, .buttonTextMenu {
    font-weight: 600;
    padding: 6px 11px;
    margin-right: 22px;
    border-radius: 5px;
    font-size: 16px;
    }`);
                                       GM_addStyle(`.rc-old .dropzone .dropzone-overlay {
    z-index: 1;
    }`);

                                           GM_addStyle(`.startButton {
                         background-color: ${btnGreen} !important;
    }`);
                                                   GM_addStyle(`.buttonTextMenu {
                         background-color: ${btnRedH} !important;
    }`);
                                               GM_addStyle(`.leftButton {
                           background-color: ${btnOrange} !important;
    }`);
                                               GM_addStyle(`.medButton {
                           background-color: ${btnsomeRed} !important;
    }`);
                                               GM_addStyle(`.rightButton {
                          background-color: ${btnPurple} !important;
currAAA    }`);
        function loopForElement(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(someClass)) {
                ///////
                ///////
                ///////
                clearInterval(checkExist);
            }}, 50);};


        function loopForElement1(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(someClass)) {
                document.querySelector(someClass).remove();
                clearInterval(checkExist);
            }}, 50);};


        loopForElement1('.toast.toast-error');

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



        function loopForElement2(someClass='') {
        let forText;
        const checkExist = setInterval(function() {
            if (document.querySelector('div.rcx-box.rcx-box--full.rcx-css-1yimpo4') && document.querySelector('.rcx-box.rcx-box--full.rcx-box--with-inline-elements.rcx-css-1te28na') && document.querySelector('a[rel="noopener noreferrer"]')) {
                GM_addStyle(`.buttonTextMenu {
                    z-index: 1;
                    right: 30px;
                    transform: translateX(-50%);
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    top: 28px;
                }`);

             GM_addStyle(`.menuButtonField {
                    overflow: hidden;
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    background-color: ${btnRedH} !important;
                    border: 1px solid gold;
                    border-radius: 10px;
                    transition-property: height, border;
                    transition: 1000ms ease-in-out;
                }`);
             GM_addStyle(`.fieldButtonText {
                    background-color: transparent !important;
                    padding: 5px;
                    text-align: center;
                    opacity: 0.7;
                }`);
             GM_addStyle(`.fieldButtonText:not(:last-child) {
                    border-bottom: 1px solid gold;
                }`);
             GM_addStyle(`.currFieldTexts {
                    position: relative !important;
                }`);
             GM_addStyle(`.fieldButtonText:hover {
                    opacity: 1;
                }`);
             GM_addStyle(`.menuButtonField-hidden {
                    height: 0;
                    border:none;
                }`);


            function createButtonWithText(label, text) {

           const Button1 = document.createElement('button');
                Button1.classList.add('Button1','buttonText','fieldButtonText');
                Button1.setAttribute('data-message', 'text');
                Button1.setAttribute('data-text', text);
                Button1.textContent = label;
                return Button1;
            }



                const extraMesseges = document.querySelector('div.rcx-box.rcx-box--full.rcx-css-1yimpo4');
            const startButton = document.createElement('button');
                startButton.classList.add('startButton','buttonText');
                startButton.setAttribute('data-message', 'welcome');
                startButton.textContent = 'Приветствие';

            const leftButton = document.createElement('button');
                leftButton.classList.add('leftButton','buttonText');
                leftButton.setAttribute('data-message', 'another');
                leftButton.textContent = 'Прощание';

            const medButton = document.createElement('button');
                medButton.classList.add('medButton','buttonText');
                medButton.setAttribute('data-message', 'exit-shift');
                medButton.textContent = 'Конец смены';

            const rightButton = document.createElement('button');
                rightButton.classList.add('rightButton','buttonText');
                rightButton.setAttribute('data-message', 'another-shift');
                rightButton.textContent = 'Передача смены';

                const forTextArray = {'Нет доступа':`нет доступа к Вашему ноутбуку, откройте, пожалуйста, доступ. Вот ссылка на инструкцию по открытию доступа: https://docs.google.com/document/d/1HXxLTORTUy0aacte6jHFpDfbHisoZys-9TJJQcWKHTA/edit?usp=sharing`,
                                     'Запрос в УЧ':`я сделал запрос в учебную часть по вашему обращению.`,
                                      'Учебная часть':`по такому вопросу вам нужно обратиться в учебную часть.`};
                const menuButtonField = document.createElement('div');
                menuButtonField.classList.add('menuButtonField');

                const menuButton = document.createElement('button');
                menuButton.classList.add('buttonTextMenu');
                menuButton.textContent = 'Ещё';
                menuButtonField.classList.toggle('menuButtonField-hidden', true);
                menuButton.addEventListener('click', ()=>{
                menuButtonField.classList.toggle('menuButtonField-hidden');
                });


                for (let [label, text] of Object.entries(forTextArray)) {
                const currBtn = createButtonWithText(label, text);
                menuButtonField.append(createButtonWithText(label, text));
                }

                const currField = document.querySelector('.rcx-box.rcx-box--full.rcx-css-1rdomle');
                currField.classList.add('currFieldTexts');
                if (!document.querySelectorAll('.buttonTextMenu').length) {
                menuButton.append(menuButtonField);
                currField.append(menuButton);
                }

                if (!extraMesseges.classList.contains('hasButtons')) {
                extraMesseges.append(startButton,leftButton,medButton, rightButton);
                extraMesseges.children[0].remove();
                extraMesseges.children[0].remove();
                extraMesseges.children[0].remove();
                    };
                extraMesseges.classList.add('hasButtons');
                mainCharacther.setAttribute('data-bell', 'true');

                if (document.querySelector('a[rel="noopener noreferrer"]').href.includes('lesson')) {
            let currElement = document.querySelector('.rcx-box.rcx-box--full.rcx-box--with-inline-elements.rcx-css-1te28na');
                const currA = document.createElement('a');
                currA.classList.add('currAAA');
                currA.textContent = currElement.textContent;
                currA.href = document.querySelector('a[rel="noopener noreferrer"]').href;
                currElement.textContent = '';
                if (currElement.children[0]) {
               currElement.children[0].remove();
                }
                currElement.append(currA);
                }


            document.querySelectorAll('.buttonText').forEach(e=>{
            e.addEventListener('click',addMessage);
            })

           const dateDictNew = {'ночь':'Доброй ночи.)','день':'Хорошего дня.)','утро':'Продуктивного утра.)','вечер':'Хорошего вечера.)'}
            function createMessage(attr,name, date, text='') {
            switch (attr) {
                case 'welcome':
                    if (date==='ночь') {
                    return `Доброй ночи, ${name}.)`
                    }
                    if (date==='утро') {
                    return `Доброго утра, ${name}.)`
                    }
                    return `Добрый ${date}, ${name}.)`
                case 'exit-shift':
                    return `${name}, уже ${date} и к сожалению моя смена окончилась. Надеюсь я смог вам помочь. Досвидания.)`;
                case 'another-shift':
                    return `${name}, уже ${date} и к сожалению моя смена окончилась. Я передам вас следующему куратору. Досвидания.)`;
                case 'another':
                    return `${name}, надеюсь я смог вам помочь. ${dateDictNew[date]}`;
                case 'text':
                    return `${name}, ${text}`;
            };



            }

           function createMessageCustom(name, text) {
                  return `${name}, ${text}`;
            };
            function addMessage(btn){
            const currButton = btn.currentTarget
            const currAttr = currButton.getAttribute('data-message');
            const currElement = document.querySelector('.rcx-box.rcx-box--full.rcx-box--with-inline-elements.rcx-css-1te28na');
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
                console.log(currButton);
                if (!currButton.hasAttribute('data-text')) {
                currTextArea.value = createMessage(currAttr,pureName,currTimeText);
            } else {
                const currRegText = currButton.getAttribute('data-text');
                currTextArea.value = createMessage(currAttr,pureName,currTimeText, currRegText);
            }
                currTextArea.focus();
            };
            }


                clearInterval(checkExist);

            }}, 50);};


            e.addEventListener('click', loopForElement2);

            currE.classList.add('currEClass');
        currE.setAttribute('data-eventList','true');
        currE.addEventListener('click', ()=>{

                    function loopForElement7(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(`[data-toolbox="0"]`)) {
        const currBtnForInfo = document.querySelector(`[data-toolbox="0"]`);
        currBtnForInfo.click();

                        function loopForElement4(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button--square.rcx-button.rcx-button-group__item.rcx-css-1k1r0f9`)) {
                        const currMen = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button--square.rcx-button.rcx-button-group__item.rcx-css-1k1r0f9`);
                        currMen.click();
                 function loopForElement3(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(`ol[role="listbox"] li`)) {
                  const currMnaa = document.querySelectorAll(`ol[role="listbox"] li`);
                            for (let i = 0; i<3; i++) {
                            currMnaa[i].style.display = 'none';
                            };
                            currMnaa[3].children[0].children[1].classList.add('BIG');
                clearInterval(checkExist);
            }}, 50);};
                            loopForElement3();
                clearInterval(checkExist);
            }}, 50);};


                        function loopForElement5(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(`.rcx-box.rcx-box--full.rcx-css-zqz844`)) {
                    const currCheckbox = document.querySelectorAll(`.rcx-box.rcx-box--full.rcx-css-zqz844`)[1];
                    if (!currCheckbox.children[1].children[0].children[0].hasAttribute('checked')) {
                    currCheckbox.children[1].children[0].click();
                    const currSave = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button.rcx-button-group__item.rcx-css-t3n91h`);
                    currSave.click();
                    }


                    const currBack = document.querySelector(`button[type="button"].rcx-box.rcx-box--full.rcx-box--animated.rcx-button--tiny-square.rcx-button--square.rcx-button--ghost.rcx-button.rcx-css-x7bl3q.rcx-css-1yzvz7u`);
                    currBack.click();
                currBack.click();
                currBack.click();
                        loopForElement4();
                clearInterval(checkExist);
            }}, 50);};

                        function loopForElement6(someClass) {
        const checkExist = setInterval(function() {
            if (document.querySelector(`[aria-label="Редактировать"]`)) {
                    const currEdit = document.querySelector(`[aria-label="Редактировать"]`);
                    currEdit.click();
                    loopForElement5();
                clearInterval(checkExist);
            }}, 50);};
                loopForElement6();
                clearInterval(checkExist);
            }}, 50);};

            loopForElement7();
        })
        };
        })

    const curr = document.querySelector('.rc-header');
    }, 1000);




    } else if (paramsString.includes('/security/login')) {
            GM_addStyle(`.customLink {
                 background-color: ${dimGray};
    display: inline-block;
    font-size: 40px;
    padding: 10px 40px;
    border-radius: 10px;
    margin: 10px 0;
    color: ${textColor};
    font-weight: 600;
}`);

            GM_addStyle(`.customLink:hover, .customLink:focus {
                 text-decoration: none !important;
                 background-color: ${btnRegulH};
                 color: ${textColor};
                 transform: scale(1.02);}`);
    GM_addStyle(`.customLink:active {
                 transform: scale(1,0.98) !important;}`);



        GM_addStyle(`.customImg {
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    }`);
                GM_addStyle(`h1, label, a.link-standard {
                color: ${textColor};
    }`);

                        GM_addStyle(`a.link-standard {
                font-weight: 600;
    }`);


                 const currImg = document.createElement('img');
        document.querySelector('button.button').classList.add('customLink');
    currImg.src = themePage;
    currImg.classList.add('customImg');
        if (document.querySelector('.app')) {
    document.querySelector('.app').append(currImg);
        }
        } else


    //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////    //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////    //////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////
    {
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
                 background-color: ${dimGray};
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
        background-color: ${dimGray};
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
    const currLinkNew = document.createElement('a');
        currLinkNew.href = link;
        currLinkNew.textContent = name;
        if (someClass) {
        currLinkNew.classList.add(someClass);
        } else {
        currLinkNew.classList.add('customLink');
        };
        return currLinkNew;
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
        if (menu) {
    menu.append(newMenu,createLink("Чаты","/chats"));
        }

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
        if (document.querySelector('.app')) {
    document.querySelector('.app').append(currImg);
        }


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
    background-color: ${dimGray};
     }
    `);
       GM_addStyle(`
    .button:hover {
    box-shadow: 5px 8px 15px ${textColor};
     }
    `);
           GM_addStyle(`
    .button:active {
    background-color: ${dimGray};
    box-shadow: 1px 4px 15px ${textColor};
     }
    `);
           GM_addStyle(`
    .tabs._alt .tabs__item.active{
    border-color: ${dimGray};
     }
    `);

           GM_addStyle(`
    .checkbox__input:checked~.checkbox__border:not([class*="_clear"]){
    border-color: ${dimGray};
    box-shadow: 0 0 0 1px ${dimGray};
     }
    `);
        GM_addStyle(`
    .checkbox__input:checked~.checkbox__border .checkbox__mask, .checkbox__input:checked~.checkbox__mask {
    border-color: ${dimGray};
    background-color: ${dimGray};
    box-shadow: 0 0 0 1px ${dimGray};
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
              background-color: ${dimGray};
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
            background-color: ${dimGray}}`);

            GM_addStyle(`a, div, span {
            color:${textColor} !important;
            }`);
             GM_addStyle(`p a.text-link {
            display:inline-block;
            }`);

           GM_addStyle(`.pagination__item.active, .notes {
           background-color: ${dimGray} !important;
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



    }

















})();