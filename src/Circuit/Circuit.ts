import { Component, ComponentState } from "./Component";
import { MissingComponentError } from "./MissingComponentError";
import { InputPin } from "./Base/InputPin";
import { OutputPin } from "./Base/OutputPin";
import { Pin } from "./Base/Pin";
import { PinState } from "./Base/PinState";
import { WireError } from "./WireError";


export class Circuit {

    readonly wires: Map<OutputPin, InputPin[]>;
    readonly outputNames: Map<string, OutputPin>;
	readonly components: Component<any>[];

    constructor(components: Component<any>[], wires: Map<Pin, Wire>, outputNames?: Map<string, OutputPin>) {
        if(!Circuit.verifyWires(wires)) throw new WireError();
        if(!Circuit.verifyComponents(components, wires, outputNames)) throw new MissingComponentError();
        this.wires = wires;
        this.outputNames = outputNames? outputNames: new Map(); 
		this.components = components
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


	createState(): {pinStateMap: Map<Pin, PinState>, circuitState: Map<Component<any>, ComponentState>} {
		//TODO:
		const pinStateMapUnion: Map<Pin, PinState> = new Map();
		const circuitState: Map<Component<any>, ComponentState> = new Map();
		for(let component of this.components) {
			const {pinStateMap, componentState} = component.createState();
			circuitState.set(component, componentState);
			for(let entry of pinStateMap) {
				pinStateMapUnion.set(entry[0], entry[1]);
			}
		}
		return {pinStateMap: pinStateMapUnion, circuitState: circuitState };
	}
    
}
