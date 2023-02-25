import { Component, ComponentState } from "../../Component";
import { OutputBus } from "../../Pin/OutputBus";
import { Pin } from "../../Pin/Pin";
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
        this.constant = constant;
        this.outputBus = new OutputBus(this, width);
    }

	createState(): { pinStateMap: Map<Pin, PinState>, componentState: ConstantState} {
        const outputStateMap = this.outputBus.createState();
		const outputState: PinState[] = [...outputStateMap.values()];
		return { pinStateMap: outputStateMap, componentState: new ConstantState(outputState) };
    } 

    compute(state: ConstantState): boolean {
		//TODO: implement;
		return false;
	}

}
