export { init, renderWords, updateWordCount, disableMiddleInput, clearMiddleInput };

const startButton = document.getElementById("start") as HTMLButtonElement;
const leftInput = document.getElementById("left") as HTMLInputElement;
const middleInput = document.getElementById("middle") as HTMLInputElement;
const rightInput = document.getElementById("right") as HTMLInputElement;
const wordCount = document.getElementById("wordCount") as HTMLElement;

const init = (controller: any) => {
    startButton.addEventListener("click", () => controller.startGame());
    middleInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            controller.handleInput(middleInput.value);
        }
    });
};

const renderWords = (startWord: string, endWord: string) => {
    leftInput.value = startWord;
    rightInput.value = endWord;
    middleInput.value = "";
    wordCount.textContent = `Felhasznált szavak száma: 0`;
};

const updateWordCount = (inputValues: string[]) => {
    wordCount.textContent = `Felhasznált szavak száma: ${inputValues.length}`;
};

const disableMiddleInput = () => {
    middleInput.disabled = true;
};

const clearMiddleInput = () => {
    middleInput.value = "";
    middleInput.focus();
};
