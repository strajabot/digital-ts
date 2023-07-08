import { DuplexBus } from "./Base/DuplexBus";
import { DuplexPin } from "./Base/DuplexPin";
import { InputBus } from "./Base/InputBus";
import { InputPin } from "./Base/InputPin";
import { OutputBus } from "./Base/OutputBus";
import { OutputPin } from "./Base/OutputPin";
import { Pin } from "./Base/Pin";
import { PinState, PinValue } from "./Base/PinState"; 

export interface ComponentState {

}

export abstract class Component<T extends ComponentState> {
    private inputPins: InputPin[] = []
    private outputPins: OutputPin[] = [];
    private duplexPins: DuplexPin[] = [];
    
    abstract createState(): {pinStateMap: Map<Pin, PinState>, componentState: T};
    abstract cloneState(state: T): T;
    abstract compute(state: T): boolean;

    createInputPin(unusedValue: PinValue): InputPin {
        const inputPin = new InputPin(this, unusedValue);        
        this.inputPins.push(inputPin);
        return inputPin;
    } 

    createOutputPin(): OutputPin {
        const outputPin = new OutputPin(this);
        this.outputPins.push(outputPin);
        return outputPin;
    }

    createDuplexPin(unusedValue: number): DuplexPin {
        const duplexPin = new DuplexPin(this, unusedValue);
        this.duplexPins.push(duplexPin);
        return duplexPin;
    }

    createInputBus(unusedValue: PinValue, width: number): InputBus {
        const inputBus = new InputBus(this, unusedValue, width);
        this.inputPins.push(...inputBus.pins);
        return inputBus;
    } 

    createOutputBus(width: number): OutputBus {
        const outputBus = new OutputBus(this, width);
        this.outputPins.push(...outputBus.pins);
        return outputBus;
    }

    createDuplexBus(unusedValue: PinValue, width: number): DuplexBus {
        const duplexBus = new DuplexBus(this, width, unusedValue);
        this.duplexPins.push(...duplexBus.pins);
        return duplexBus;
        
    }


}
