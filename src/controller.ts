
import * as view from "./view.js";
import * as model from "./model.js";

const createController = () => {

    const startGame = () => {
        model.initializeWords(); 
        view.renderWords(model.getCurrentWord(), model.getTargetWord());
    };

    const handleInput = (value: string) => {
        if (model.getCurrentWord() === model.getTargetWord()) {
            return; 
        }

        model.addInputValue(value);
        view.updateWordCount(model.getInputValues());

        if (model.getCurrentWord() === model.getTargetWord()) {
            view.disableMiddleInput();
        }
    };

    view.init({
        startGame,
        handleInput,
    });
};

createController();
