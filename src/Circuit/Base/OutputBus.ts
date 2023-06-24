import { Component } from "../Component";
import { OutputPin } from "./OutputPin";
import { Pin } from "./Pin";
import { PinState } from "./PinState";

export class OutputBus {

    readonly width: number;
    readonly pins: OutputPin[] = [];

    constructor(component: Component<any>, width: number) {
        this.width = width;

        const tempPins: OutputPin[] = [];
        for(let i = 0; i<width; i++) {
            tempPins.push(new OutputPin(component));
        }
        this.pins = tempPins;
    }

    createState(): PinState[] {
		const outputState: PinState[] = [];
        for(let i=0; i<this.width; i++) {
			const state = this.pins[i].createState();
			outputState.push(state);
        }
        return outputState;
    }

} 

