/**
 * Sample interface
 */
interface IPerson {

}

export default class Person implements IPerson {
    readonly _name: string = "";
    /**
     * Class to take care of a person
     * @param name Name of the person
     */
    constructor(name: string) {
        this._name = name;
    }

    /**
     * Writes the name to the console
     */
    dump(): void {
        console.log(`Name is: ${this._name}`);
    }
}