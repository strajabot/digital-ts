import { InputPin } from "./InputPin";
import { OutputPin } from "./OutputPin";
import { DuplexPin } from "./DuplexPin";

export class Wire {
    
    private inputPins: InputPin[] = [];
    private outputPins: OutputPin[] = [];
    private duplexPins: DuplexPin[] = [];

    addInput(pin: InputPin) {
        this.inputPins.push(pin);
    }

    addOutput(pin: OutputPin) {
        this.outputPins.push(pin);
    }
    
    addDuplex(pin: DuplexPin) {
        this.duplexPins.push(pin);
    }

    getInputPins(): InputPin[] {
        return this.inputPins;
    } 

    getOutputPins(): OutputPin[] {
        return this.outputPins;
    }

    getDuplexPins(): DuplexPin[] {
        return this.duplexPins;
    } 

}

export class WireAlreadyConnectedError extends Error {

    constructor() {
        super("Tried to connect a new wire to a pin that is already connected to a wire");
    }

}
