const words = [
    "ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár",
    "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg",
    "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr",
    "lúd", "lég", "lát", "sál"
];

let currentWord = "";
let targetWord = "";
let inputValues: string[] = [];

export const initializeWords = () => {
    const randomIndex = () => Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex()];
    targetWord = words[randomIndex()];
};

export const addInputValue = (value: string) => {
    if (value && value.length === 3 && !value.includes(" ")) {
        inputValues.push(value);
        return true;
    }
    return false;
};

export const getCurrentWord = () => currentWord;
export const getTargetWord = () => targetWord;
export const getInputValues = () => inputValues;

export const setCurrentWord = (newWord: string) => {
    currentWord = newWord;
};
