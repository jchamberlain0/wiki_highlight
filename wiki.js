// ==UserScript==
// @name         Wikipedia Highlighter
// @namespace    http://wikipedia.org.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://en.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  console.log('hello');
  console.log('hello');

  //let containerElement = document.getElementsByClassName('mw-parser-output')[0].children[18];
  let containerElement = document.getElementsByClassName('mw-parser-output')[0].getElementsByTagName('p')[0];
  let containerElement2 = document.getElementsByClassName('mw-parser-output')[0].getElementsByTagName('p')[0];
  // var firstParagraph = document.getElementById('container').getElementsByTagName('p')[0];
  let originalText = containerElement.innerHTML;

  let modifiedText = originalText;

  modifiedText = modifiedText.replace(
    //' was a ',
    /(wa|i)s\san?/,
    '<span style="padding: 0 1.5em 0 1.5em; background: linear-gradient(150deg, #013766 20%, #f62b2c 70%, #313584 100%); border: 0.2em solid white; color: black; border-radius:1em; box-shadow: 0 0 0.5em gray"> was a </span>'
  );

  console.log(modifiedText);
  containerElement.innerHTML = modifiedText;
})();
