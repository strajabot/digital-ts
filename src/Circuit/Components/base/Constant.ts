import { Component, ComponentState } from "../../Component";
import { OutputBus } from "../../Pin/OutputBus";
import { PinState } from "../../Pin/PinState";

export class ConstantState implements ComponentState {
    outputBus: PinState[];

    constructor(outputBus: PinState[]) {
        this.outputBus = outputBus;
    }
}

export class Constant implements Component<ConstantState> {

    width: number;
    outputBus: OutputBus;
    constant: PinState[];

    constructor(width: number, constant: PinState[]) {
        this.width = width;
        this.constant = [];
        this.outputBus = new OutputBus(this, width);
    }

    createState(): ConstantState {
        const outputBusState = this.outputBus.createState();
        return new ConstantState(outputBusState);
    } 

    compute(state: ConstantState): boolean {
        const outputState = state.outputBus;
        if(state.outputBus === this.constant) return false;
        state.outputBus = this.constant;
        return true; 
    }

}