import { Component } from "../Component";
import { InputPin } from "./InputPin";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class InputBus {
    
    readonly size: number;
    readonly inputs: InputPin[];
    
    constructor(component: Component<any>, size: number, unusedValue: PinValue) {
        this.size = size;

        const tempInputs: InputPin[] = [];
        for(let i = 0; i<size; i++) {
            tempInputs.push(new InputPin(component, unusedValue));
        }
        this.inputs = tempInputs;
    }
	
	createState(): Map<Pin, PinState> {
        const inputState: Map<Pin, PinState> = new Map();
        for(let i=0; i<this.size; i++) {
			const pin = this.inputs[i];
			const state = pin.createState().get(pin);
			if(state === undefined) {
				throw new Error("InputPin::createState() returned invalid state map");
			}
			inputState.set(pin, state);
        }
        return inputState;
    }

}
