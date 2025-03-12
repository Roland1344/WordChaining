"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableMiddleInput = exports.updateWordCount = exports.renderWords = exports.init = void 0;
const startButton = document.getElementById("start");
const leftInput = document.getElementById("left");
const middleInput = document.getElementById("middle");
const rightInput = document.getElementById("right");
const wordCount = document.getElementById("wordCount");
const init = (controller) => {
    startButton.addEventListener("click", () => controller.startGame());
    middleInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            controller.handleInput(middleInput.value);
        }
    });
};
exports.init = init;
const renderWords = (startWord, endWord) => {
    leftInput.value = startWord;
    rightInput.value = endWord;
    middleInput.value = "";
    wordCount.textContent = `Felhasznált szavak száma: 0`;
};
exports.renderWords = renderWords;
const updateWordCount = (inputValues) => {
    wordCount.textContent = `Felhasznált szavak száma: ${inputValues.length}`;
};
exports.updateWordCount = updateWordCount;
const disableMiddleInput = () => {
    middleInput.disabled = true;
};
exports.disableMiddleInput = disableMiddleInput;
