import { Component, ComponentState } from "../../Component";
import { InputBus } from "../../Base/InputBus";
import { OutputBus } from "../../Base/OutputBus";
import { Pin } from "../../Base/Pin";
import { PinState, PinValue } from "../../Base/PinState";


export class AndGateState implements ComponentState {
    inputBusArr: PinState[][];
    outputBus: PinState[];
    
    constructor(inputBusArr: PinState[][], outputBus: PinState[]) {
        this.inputBusArr = inputBusArr;
        this.outputBus = outputBus;
    }
    
}

export class AndGate implements Component<AndGateState> {
    readonly size: number;
    readonly width: number;
    readonly input: InputBus[];
    readonly outputBus: OutputBus;
    
    constructor(size: number, width: number) {
        this.size = size;
        this.width = width;
        this.outputBus = new OutputBus(this, width);
        
        const tempBusArr: InputBus[] = [];
        for(let i=0; i<this.size; i++) {
            tempBusArr.push(new InputBus(this, width, PinValue.HIGH));
        }
        this.input = tempBusArr;
    }

    createState(): { componentState: AndGateState } {
        const inputState: PinState[][] = [];
        for(let i=0; i<this.size; i++) {
			const inputStateMap = this.input[i].createState();
			const inputState = [...inputStateMap]
			inputState.push(this.input[i].createState());
        }
        const outputBusState: PinState[] = this.outputBus.createState();
        return new AndGateState(inputState, outputBusState)
    }
 
    compute(state: AndGateState) {
        const inputState = state.inputBusArr;
        const outputBusState = state.outputBus;

        //check undefined state;
        let isUndef = false;
        for(let i=0; i<this.size; i++) {
            for(let j=0; j<this.width; j++) {
                if(inputState[i][j] !== PinState.UNDEF) continue;
                isUndef = true;
                break;
            }
        }

        //update output state;
        let isChanged = false;
        for(let i=0; i<this.width; i++) {
            let nextState: PinState = PinState.HIGH;
            for(let j=0; j<this.size; j++) {
                if(inputState[j][i] === PinState.HIGH) continue;
                nextState = PinState.LOW;
            }
            nextState = isUndef? PinState.UNDEF:  nextState;
            if(outputBusState[i] === nextState) continue;
            outputBusState[i] = nextState;
            isChanged = true;
        }

        return isChanged;
    }

}
