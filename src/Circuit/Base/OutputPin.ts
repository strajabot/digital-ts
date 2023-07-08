import { Component } from "../Component";
import { InputPin } from "./InputPin";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";
import { Wire, WireAlreadyConnectedError } from "./Wire";

export class OutputPin extends Pin {
    
    private out?: Wire;

    constructor(component: Component<any>) {
		super(component);
	}

    createState(): PinState {
		return new PinState(this, PinValue.UNDEF);
    }

    connectInput(pin: InputPin): void {
        if(!this.out) this.out = new Wire()    
        pin.connectWire(this.out);
    }

    connectWire(wire: Wire): void {
        if(this.out) throw new WireAlreadyConnectedError();
        this.out = wire; 
    }

    getWire(): Wire|undefined {
        return this.out;
    }
}
