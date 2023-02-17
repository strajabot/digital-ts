import { Component, ComponentState } from "../Component";
import { InputPin } from "./InputPin";
import { PinState } from "./PinState";

export class InputBus {
    
    readonly size: number;
    readonly inputs: InputPin[];
    
    constructor(component: Component<any>, size: number, unusedState: PinState) {
        this.size = size;

        const tempInputs: InputPin[] = [];
        for(let i = 0; i<size; i++) {
            tempInputs.push(new InputPin(component, unusedState));
        }
        this.inputs = tempInputs;
    }

    createState(): PinState[] {
        const tempPinArr: PinState[] = [];
        for(let i=0; i<this.size; i++) {
            tempPinArr.push(PinState.UNDEF);
        }
        return tempPinArr;
    }


}
