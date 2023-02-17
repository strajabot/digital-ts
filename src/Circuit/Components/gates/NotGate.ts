import { Component, ComponentState } from "../../Component";
import { InputBus } from "../../Pin/InputBus";
import { OutputBus } from "../../Pin/OutputBus";
import { PinState } from "../../Pin/PinState";

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
        this.inputBus = new InputBus(this, size, PinState.UNDEF);
        this.outputBus = new OutputBus(this, size);
    }

    createState(): NotGateState {
        const inputState = this.inputBus.createState();
        const outputState = this.outputBus.createState();
        return new NotGateState(inputState, outputState);
    }

    compute(state: NotGateState): boolean {    
        const inputBusState = state.inputBus;
        const outputBusState = state.outputBus;

        //check undefined state;
        let isUndef: boolean = false;
        for(let i=0; i<this.size; i++) {
            if(inputBusState[i] !== PinState.UNDEF) continue;
            isUndef = true; 
            break;
        }

        //update output state;
        let isChanged = false;
        for(let i=0; i<this.size; i++) {
            let nextState = inputBusState[i] == PinState.HIGH? PinState.LOW: PinState.HIGH;
            nextState = isUndef? PinState.UNDEF: nextState; 
            if(outputBusState[i] === nextState) continue;
            outputBusState[i] = nextState;
            isChanged = true;
        }
        return isChanged;
    }

}

