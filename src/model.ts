
export { initializeWords, addInputValue, getCurrentWord, getTargetWord, getInputValues };
const words = [
    "ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár",
    "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg",
    "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr",
    "lúd", "lég", "lát", "sál"
];

let currentWord = "";
let targetWord = "";
let inputValues: string[] = [];

const initializeWords = () => {
    const randomIndex = () => Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex()];
    targetWord = words[randomIndex()];
};

const addInputValue = (value: string) => {
    if (value && !value.includes(" ")) {
        inputValues.push(value);
    }
};

const getCurrentWord = () => currentWord;
const getTargetWord = () => targetWord;
const getInputValues = () => inputValues;


