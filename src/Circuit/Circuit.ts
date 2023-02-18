import { Component } from "./Component";
import { MissingComponentError } from "./MissingComponentError";
import { InputPin } from "./Pin/InputPin";
import { OutputPin } from "./Pin/OutputPin";
import { WireError } from "./WireError";

export class Circuit {

    readonly wires: Map<OutputPin, InputPin[]>;
    readonly outputNames: Map<string, OutputPin>;

    constructor(components: Component<any>[], wires: Map<OutputPin, InputPin[]>, outputNames?: Map<string, OutputPin>) {
        if(!Circuit.verifyWires(wires)) throw new WireError();
        if(!Circuit.verifyComponents(components, wires, outputNames)) throw new MissingComponentError();
        this.wires = wires;
        this.outputNames = outputNames? outputNames: new Map(); 
    }

    static verifyWires(wires: Map<OutputPin, InputPin[]>): boolean {
        const inputSet = new Set();
        for(let inputPins of wires) {
            for(let inputPin of inputPins) {
                if(inputSet.has(inputPin)) return false;
                inputSet.add(inputPin);
            }
        }
        return true;
    }

    static verifyComponents(components: Component<any>[], wires: Map<OutputPin, InputPin[]>, outputNames?: Map<string, OutputPin>) {
        const componentSet = new Set(components);
        for(let outputPin of wires.keys()) {
            if(!componentSet.has(outputPin.component)) return false;
        }
        for(let inputPins of wires.values()) {
            for(let inputPin of inputPins) {
                if(!componentSet.has(inputPin.component)) return false;
            }
        }
        if(!outputNames) return true;
        for(let outputPin of outputNames.values()) {
            if(!componentSet.has(outputPin.component)) return false;
        }
        return true;
    }

    
}