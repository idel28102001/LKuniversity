// ==UserScript==
// @name         Admin-extra
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lk.neural-university.ru/admin/app/user/join_to_rc_room
// @icon         https://www.google.com/s2/favicons?domain=neural-university.ru
// @grant        none
// @grant          GM_addStyle
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
    const btnBlue = 'CornflowerBlue';

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
})();