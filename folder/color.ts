import {Iname} from './common';

export class Color implements Iname {
    constructor(public name: string){
    }
}
export class Colors extends Array<Color>{
    constructor(){
    super();[
        'red',
        'orange',
        'blue',
        'yellow',
        'white',
        'blue',
        'indigo',
        'violet',
        'violet'
    ].forEach(
        color => this.push(new Color(color)));
    }
}