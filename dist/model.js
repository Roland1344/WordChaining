"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentWord = exports.getInputValues = exports.getTargetWord = exports.getCurrentWord = exports.addInputValue = exports.initializeWords = void 0;
const words = [
    "ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár",
    "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg",
    "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr",
    "lúd", "lég", "lát", "sál"
];
let currentWord = "";
let targetWord = "";
let inputValues = [];
const initializeWords = () => {
    const randomIndex = () => Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex()];
    targetWord = words[randomIndex()];
};
exports.initializeWords = initializeWords;
const addInputValue = (value) => {
    // 3 karakter legalabb
    if (value && value.length === 3 && !value.includes(" ")) {
        inputValues.push(value);
        return true;
    }
    return false;
};
exports.addInputValue = addInputValue;
const getCurrentWord = () => currentWord;
exports.getCurrentWord = getCurrentWord;
const getTargetWord = () => targetWord;
exports.getTargetWord = getTargetWord;
const getInputValues = () => inputValues;
exports.getInputValues = getInputValues;
const setCurrentWord = (newWord) => {
    currentWord = newWord;
};
exports.setCurrentWord = setCurrentWord;
