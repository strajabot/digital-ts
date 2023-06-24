import { Component } from "../Component";
import { InputPin } from "./InputPin";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class InputBus {

    readonly width: number;
    readonly pins: InputPin[];

    constructor(component: Component<any>, unusedValue: PinValue, width: number) {
        this.width = width;

        const tempPins: InputPin[] = [];
        for(let i = 0; i<width; i++) {
            tempPins.push(new InputPin(component, unusedValue));
        }
        this.pins = tempPins;
    }
	
	createState(): PinState[] {
        const inputState: PinState[] = [];
        for(let i=0; i<this.width; i++) {
			const state = this.pins[i].createState();
			inputState.push(state);
        }
        return inputState;
    }

}
