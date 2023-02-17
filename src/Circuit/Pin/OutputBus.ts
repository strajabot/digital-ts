import { Component } from "../Component";
import { OutputPin } from "./OutputPin";
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

    createState(): PinState[] {
        const outputState: PinState[] = [];
        for(let i=0; i<this.size; i++) {
            outputState.push(PinState.UNDEF);
        }
        return outputState;
    }

} 

