import { sampleSize } from "lodash";
import { DragElement } from "../components/DragElement";
import "../css/reset.css";
import "../css/style.css";

const wrapParagraphWords = function () {
  const paragraph = document.querySelectorAll("p");
  let count = 0;
  paragraph.forEach((p) => {
    let words = p.textContent
      .split(/\s/)
      .map(function (word) {
        if (word.length > 0) {
          count++;
          return `<span data-index='${count}'>${word}</span>`;
        }
      })
      .join(" ");
    p.innerHTML = words;
  });

  return count;
};

const selectWordElements = function () {
  const wordNodeList = document.querySelectorAll("p span");
  const r = sampleSize(wordNodeList, 20);
  return r;
};

const createDraggableCensor = function () {
  selectedWordElements.forEach((el) => {
    el.classList.add("active");
    let draggableElement = document.createElement("div");
    draggableElement.classList.add("draggable");
    draggableElement.setAttribute("draggable", "true");
    el.appendChild(draggableElement);
    DragElement(draggableElement);
  });
};

const wordCount = wrapParagraphWords();
const selectedWordElements = selectWordElements();
createDraggableCensor();
