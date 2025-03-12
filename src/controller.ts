import { Model } from "./model.js";
import { View } from "./view.js";

class Controller {
    private model: Model;
    private view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        
        this.view.onStartClick(() => this.startGame());
    }

    private startGame() {
        this.view.renderWords(this.model.getStartWord(), this.model.getEndWord());
    }
}

const app = new Controller(new Model(), new View());
