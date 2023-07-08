import { Component } from "../Component";
import { OutputPin } from "./OutputPin";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";
import { Wire, WireAlreadyConnectedError } from "./Wire";

export class InputPin extends Pin {

    readonly unusedValue: PinValue;

    private in: Wire|null = null;

    constructor(component: Component<any>, unusedValue: PinValue) {
		  super(component);
		  this.unusedValue = unusedValue;
    }
    
    createState(): PinState {
		  return new PinState(this, PinValue.UNDEF);
    }

    connectOutput(pin: OutputPin): void {
        if(pin.)
        if(this.in === null) this.in = new Wire()    
        pin.connectWire(this.in);
    }

    connectWire(wire: Wire): void {
        if(this.in !== null) throw new WireAlreadyConnectedError();
        this.in = wire; 
    }

}
