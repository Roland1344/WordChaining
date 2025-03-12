const startButton = document.getElementById("start") as HTMLButtonElement;
const leftInput = document.getElementById("left") as HTMLInputElement;
const middleInput = document.getElementById("middle") as HTMLInputElement;
const rightInput = document.getElementById("right") as HTMLInputElement;
const wordCount = document.getElementById("wordCount") as HTMLElement;

export const init = (controller: any) => {
    startButton.addEventListener("click", () => controller.startGame());
    middleInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            controller.handleInput(middleInput.value);
        }
    });
};

export const renderWords = (startWord: string, endWord: string) => {
    leftInput.value = startWord;
    rightInput.value = endWord;
    middleInput.value = "";
    wordCount.textContent = `Felhasznált szavak száma: 0`;
};

export const updateWordCount = (inputValues: string[]) => {
    wordCount.textContent = `Felhasznált szavak száma: ${inputValues.length}`;
};

export const disableMiddleInput = () => {
    middleInput.disabled = true;
};

export const clearMiddleInput = () => {
    middleInput.value = "";
    middleInput.focus();
};
