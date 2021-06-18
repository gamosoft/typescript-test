import SomeMethodHere from "./somemethod";
import Person from "./person";
let st: string = 'Text';

/**
 * 
 * @param param 
 * @returns Nothing
 */
function pepe(param: string): void {
    console.log(param);
}

/**
 * This method is great
 * @param name The name to work with
 * @returns A greeting with the provided name
 */
 function createGreeting(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'No name';
    }
}

function greet(name?: string) {
    console.log(`Hello, ${name || 'Anonymous'}!`);
}

function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}

let k = new Person('Pepe');
k.dump();


// SomeMethodHere(3);
// pepe('Fistro');
// proclaim();
// proclaim('ready?');
// proclaim('ready!', 3);
// greet();
// greet('Antoine');
// console.log(createGreeting('Pepe'));
// console.log(createGreeting());
// console.log(st + st + st);