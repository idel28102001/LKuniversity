
// ==UserScript==
// @name         Admin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lk.neural-university.ru/admin/app/homeworkresult/list
// @icon         https://www.google.com/s2/favicons?domain=neural-university.ru
// @include      https://lk.neural-university.ru/admin/*
// @grant        none
// @grant          GM_addStyle
// @run-at document-end
// ==/UserScript==

(function() {
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

    const btnRed = 'red';
    const btnRedH = 'Brown';
    const textColor = 'white';

    const btnBlue = 'CornflowerBlue';
    const btnBlueH = 'Blue';

    const btnRegul = 'dimgrey';
    const regBlack = 'Black';
    const btnRegulH = 'grey';

    const smallIcon = 'https://lh3.google.com/u/0/d/1bk9O_nTyynwDA-gaafz-tox-FT8F2CNx=w1920-h947-iv1';

    let resText;
    let regularText = `Добрый день, ${pureName}. Задание принято. Все задачи выполнены верно. Жду следующих работ. Успехов.)`;
    resText = regularText;
    const extraMess = `Добрый день, ${pureName}. Задание необходимо доработать.`;
    const dictTopics = {1:'Тема зачтена. Интересная тема для выбора, жду следующего шага. Успехов.)',
                       2: 'База зачтена. Всё хорошо, жду от вас 3-его шага. Успехов.)',
                       3: 'Парсинг засчитываю. Хорошо поработали, жду от вас хорошего прототипа нейронки. Успехов.)',
                       4: 'Хорошая точность, засчитываю прототип. Жду итогового результата по нейронке. Успехов.)',
                       5: 'Финальная нейронка впечатляет. Жду от вас презентации. Успехов.)',
                       6: 'Замечательная презентация - засчитываю. Жду вас на защите и экзамене. Успехов.)'};
    const videoMessage = `Добрый день, ${pureName}. Задание принято, разбор скоро будет.)`


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

    const currList = document.querySelectorAll('.control-label');
    const currContList = document.querySelectorAll('.form-group');
    if (currList.length===9) {
    if (currList[7].textContent.trim()==='Ссылка на видеоразбор домашней работы') {
        resText = videoMessage;
        newVideoBlank.classList.add('newVideoBlank');
        currContList[0].append(newVideoBlank);

    };
    };

    const textTopicArr = [706, 707, 708, 750, 751, 752, 753, 754, 755, 756, 757, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780,
                          781, 782, 783, 784, 785, 786, 787, 788, 822, 823, 824, 825, 826, 827, 828, 829] //Все текстовые занятия
    const notMainTopics = [8, 9, 10, 11, 12, 13, 14, 15, 119, 120, 121, 122, 152, 153, 154, 155, 156, 157, 158, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
                           176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 729, 733, 734, 735,
                           736, 737, 739, 740, 741, 791, 792, 793, 794, 798, 800, 802, 804, 805, 808, 830, 833, 836, 838, 842, 843, 845, 847, 848, 849, 851]; // Уроки не из основной программы

    const namesTopicArr = ['гринь александр витальевич','чаевский алексей валерьевич','попов дмитрий владимирович','буньков александр андреевич','миних владимир анатольевич','кротов никита михайлович',
                          'корепин павел александр','еремин евгений александрович','тухватуллин руслан рафикович','ли анатолий  евгеньевич'];

    if (currLinks) {
        let currLinkText = currLinks.lastChild.href.split('/');
        currLinkText = Number(currLinkText[currLinkText.length-1]);
    const currTopText = currLinks.lastChild.textContent.trim().toLowerCase();
        const currNameText = currName[0].textContent.trim().split(':')[1].trim().toLowerCase();
        if (currList.length===9) {
        if (namesTopicArr.includes(currNameText)) {
        resVideoText = `${videoReq} Участнику по договору требуется видеоразбор.`;
        } else if (textTopicArr.includes(currLinkText)) {
                   resVideoText = `${videoTextNew} Это текстовое занятие.`;
                   newVideoBlank.classList.add('newVideoBlank-blue');
        } else if (notMainTopics.includes(currLinkText)){
                   resVideoText = `${videoTextNew} Урок не из основной программы.`;
                   newVideoBlank.classList.add('newVideoBlank-blue');

        } else {
                   resVideoText = `${videoReq} Урок не числиться в списке текстовых занятий.`;
                   };

        };
        newVideoBlank.textContent = resVideoText;
        if (notMainTopics.includes(currLinkText) && !namesTopicArr.includes(currNameText)) {
        resText = regularText;
        };
    };
    function topicFuncs(StudName, num) {
    return `Добрый день, ${StudName}. ${dictTopics[num]}`;
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
    color: ${btnRegul}
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
                 background-color: ${btnRegul} !important;}`);
    GM_addStyle(` a.logo, th a, .select2-container .select2-choice, .select2-container .select2-choices, .select2-container .select2-choices .select2-search-field input{
                 color:${textColor};
                 background-color: ${btnRegul} !important;}`);
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

    const paramsString = window.location.pathname
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
               currSomeSelect[4].addEventListener('mouseout', ()=>{
        const currLinks = document.querySelector('#select2-results-1');
                   if (currLinks.children.length) {
                   for (let i=0; i<currLinks.children.length;i++) {
                   currLinks.children[i].addEventListener('mouseover', e=>{
                   const currSomeText = e.currentTarget.firstChild.textContent.trim();
                   if (currSomeText.toLowerCase()!=='сдал') {
                       currNum[1].value=0;
                   currPreset[2].children[0].textContent = extraMess;
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

















})();