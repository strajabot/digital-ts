import { Component, ComponentState } from "../../Component";
import { InputBus } from "../../Pin/InputBus";
import { OutputBus } from "../../Pin/OutputBus";
import {Pin} from "../../Pin/Pin";
import { PinState, PinValue } from "../../Pin/PinState";

export class NotGateState implements ComponentState {
    inputBus: PinState[];
    outputBus: PinState[];

    constructor(inputBus: PinState[], outputBus: PinState[]) {
        this.inputBus = inputBus;
        this.outputBus = outputBus;
    }
}

export class NotGate implements Component<NotGateState> {
    private size: number;
    private inputBus: InputBus;
    private outputBus: OutputBus;
    
    constructor(size: number) {
        this.size = size;
        this.inputBus = new InputBus(this, size, PinValue.UNDEF);
        this.outputBus = new OutputBus(this, size);
    }

    createState():{pinStateMap: Map<Pin, PinState>, componentState: NotGateState }{
        const inputStateMap = this.inputBus.createState();
		const outputStateMap= this.outputBus.createState();

		const inputState: PinState[] = [...inputStateMap.values()];
		const outputState: PinState[] = [...outputStateMap.values()];

		const pinStateMap = new Map([...inputStateMap, ...outputStateMap]);
		const componentState = new NotGateState(inputState, outputState);
		return {pinStateMap: pinStateMap, componentState: componentState};
    }

    compute(state: NotGateState): boolean {    
        const inputBusState = state.inputBus;
        const outputBusState = state.outputBus;

        //check undefined state;
        let isUndef: boolean = false;
        for(let i=0; i<this.size; i++) {
            if(inputBusState[i].value !== PinValue.UNDEF) continue;
            isUndef = true; 
            break;
        }

        //update output state;
        let isChanged = false;
        for(let i=0; i<this.size; i++) {
            let nextState = inputBusState[i].value == PinValue.HIGH? PinValue.LOW: PinValue.HIGH;
            nextState = isUndef? PinValue.UNDEF: nextState; 
            if(outputBusState[i].value === nextState) continue;
            outputBusState[i].value = nextState;
            isChanged = true;
        }
        return isChanged;
    }

}

