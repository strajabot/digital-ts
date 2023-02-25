import { Component } from "../Component";
import { OutputPin } from "./OutputPin";
import { Pin } from "./Pin";
import { PinState } from "./PinState";

export class OutputBus {
    
    readonly size: number;
    readonly outputs: OutputPin[] = [];

    constructor(component: Component<any>, size: number) {
        this.size = size;
        
        const tempInputArr: OutputPin[] = [];
        for(let i = 0; i<size; i++) {
            tempInputArr.push(new OutputPin(component));
        }
        this.outputs = tempInputArr;
    }

    createState(): Map<Pin, PinState> {
		const outputState: Map<Pin, PinState> = new Map();
        for(let i=0; i<this.size; i++) {
			const pin = this.outputs[i];
			const state = pin.createState().get(pin);
			if(state === undefined) {
				throw new Error("InputPin::createState() returned invalid state map");
			}
			outputState.set(pin, state);
        }
        return outputState;
    }

} 

