import { Component, ComponentState } from "../../Component";
import { InputBus } from "../../Base/InputBus";
import { OutputBus } from "../../Base/OutputBus";
import { PinState, PinValue } from "../../Base/PinState";

export class NotGateState implements ComponentState {
    inputBus: PinState[];
    outputBus: PinState[];

    constructor(inputBus: PinState[], outputBus: PinState[]) {
        this.inputBus = inputBus;
        this.outputBus = outputBus;
    }
}

export class NotGate extends Component<NotGateState> {
    private size: number;
    private inputBus: InputBus;
    private outputBus: OutputBus;
    
    constructor(width?: number) {
        super()
        if(!width) width = 1;
        this.size = width;
        this.inputBus = this.createInputBus(PinValue.UNDEF, width);
        this.outputBus = this.createOutputBus(width);
    }

    createState(): NotGateState {
        const inputStateMap = this.inputBus.createState();
		const outputStateMap= this.outputBus.createState();

		const inputState: PinState[] = [...inputStateMap.values()];
		const outputState: PinState[] = [...outputStateMap.values()];
        
		return new NotGateState(inputState, outputState);
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

