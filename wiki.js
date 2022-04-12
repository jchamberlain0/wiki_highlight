// ==UserScript==
// @name         Wikipedia is a Highlighter
// @namespace    http://wikipedia.org./
// @version      0.3
// @description  Style the "is-a" relation in the summary section of a wikipedia article for quick access.
// @author       me
// @match        https://en.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log('wiki.js v0.2');

  let matchFound = 0;

  let i = 0;
  for (i = 0; i < 5; i++) {
    matchFound = 0;
    console.log(i.toString());

    let text = document.getElementsByClassName('mw-parser-output')[0].getElementsByTagName('p')[i];

    // let modifiedText = text.innerHTML;

    let modifiedText = text.innerHTML.replace(
      //' was a ',
      // /(wa|i)s\san?/,
      /\s(was|is)\s(a|an|the)\s/,
      match => {
        console.log(`match found`);
        matchFound = 1;

        // todo: get offset of string and get the next word

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
    if (matchFound === 1) {
      text.innerHTML = modifiedText;
      break;
    }
  }

  // console.log(modifiedText);
  // containerElement.innerHTML = modifiedText;
})();
