export class Model {
    private words: string[] = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj", "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "tőr", "lúd", "lég", "lát", "sál"];
    private startWord: string = "";
    private endWord: string = "";
    private inputValues: string[] = [];
    
    constructor() {
        this.setRandomWords();
    }

    private setRandomWords() {
        const shuffled = this.words.sort(() => Math.random() - 0.5);
        this.startWord = shuffled[0];
        this.endWord = shuffled[1];
    }

    public getStartWord() {
        return this.startWord;
    }
    public getEndWord() {
        return this.endWord;
    }
    public addInputWord(word: string) {
        this.inputValues.push(word);
    }
    public getInputWords() {
        return this.inputValues;
    }
}
