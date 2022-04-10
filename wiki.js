// ==UserScript==
// @name         Wikipedia is a Highlighter
// @namespace    http://wikipedia.org./
// @version      0.3
// @description  Highlight the "is a" relation in the summary section of a wikipedia article for quick access.
// @author       me
// @match        https://en.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log('wiki.js v0.2');

  let i = 0;
  for (i = 0; i < 3; i++) {
    console.log(i);
    console.log(i.toString());

    let text = document.getElementsByClassName('mw-parser-output')[0].getElementsByTagName('p')[i];

    let modifiedText = text.innerHTML;

    modifiedText = modifiedText.replace(
      //' was a ',
      // /(wa|i)s\san?/,
      /\s(was|is)\s(an?|the)\s/,
      match => {
        console.log(`match found`);

        return `<span \
        style="\
        padding: 0 1.5em 0 1.5em;\
        background: linear-gradient(150deg, #013766 20%, #f62b2c 70%, #313584 100%);\
        border: 0.2em solid white;\
        color: black;\
        border-radius:1em;\
        box-shadow: 0 0 0.5em gray;\
        "> ${match} </span>`;
      }
    );
    text.innerHTML = modifiedText;
  }

  // console.log(modifiedText);
  // containerElement.innerHTML = modifiedText;
})();
