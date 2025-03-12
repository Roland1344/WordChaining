import * as view from "./view.js";
import * as model from "./model.js";

const startGame = () => {
    model.initializeWords();
    view.renderWords(model.getCurrentWord(), model.getTargetWord());
};

const handleInput = (value: string) => {
    if (model.getCurrentWord() === model.getTargetWord()) {
        return;
    }
    const valid = model.addInputValue(value);

    if (valid) {
        view.updateWordCount(model.getInputValues());
        view.clearMiddleInput();
        model.setCurrentWord(value);

        if (model.getCurrentWord() === model.getTargetWord()) {
            view.disableMiddleInput();
        }
    } else {
        alert("Érvénytelen szó!\n Kérlek, adj meg egy három karakterből álló szót.");
        view.clearMiddleInput();
    }
};

view.init({
    startGame,
    handleInput,
});
