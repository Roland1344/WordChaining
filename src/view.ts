interface Model {
    currentWord: string;
    targetWord: string;
    inputValues: string[];
}

const View = {
    startButton: document.getElementById("start") as HTMLButtonElement,
    leftInput: document.getElementById("left") as HTMLInputElement,
    middleInput: document.getElementById("middle") as HTMLInputElement,
    rightInput: document.getElementById("right") as HTMLInputElement,
    wordCount: document.getElementById("wordCount") as HTMLElement,

    init(controller: any) {
        this.startButton.addEventListener("click", () => controller.startGame());
        this.middleInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                controller.handleInput(this.middleInput.value);
            }
        });
    },

    render(model: Model) {
        this.leftInput.value = model.currentWord;
        this.rightInput.value = model.targetWord;
        this.middleInput.value = "";
        this.wordCount.textContent = `Felhasznált szavak száma: ${model.inputValues.length}`;
    }
};
