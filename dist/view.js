"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View = {
    startButton: document.getElementById("start"),
    leftInput: document.getElementById("left"),
    middleInput: document.getElementById("middle"),
    rightInput: document.getElementById("right"),
    wordCount: document.getElementById("wordCount"),
    init(controller) {
        this.startButton.addEventListener("click", () => controller.startGame());
        this.middleInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                controller.handleInput(this.middleInput.value);
            }
        });
    },
    render(model) {
        this.leftInput.value = model.currentWord;
        this.rightInput.value = model.targetWord;
        this.middleInput.value = "";
        this.wordCount.textContent = `Felhasznált szavak száma: ${model.inputValues.length}`;
    }
};
