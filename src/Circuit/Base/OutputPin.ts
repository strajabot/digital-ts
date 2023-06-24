import { Component } from "../Component";
import { InputPin } from "./InputPin";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class OutputPin extends Pin {
    
    private out: Wire|null = null;

    constructor(component: Component<any>) {
		super(component);
	}

    createState(): PinState {
		return new PinState(this, PinValue.UNDEF);
    }

    connect(pin: InputPin): void {
        if(this.wire === null) this.out = new Wire()    
        pin.wire(this.wire);
    }

    wire(wire: Wire): void {
        if(this.wire !== null) throw new WireAlreadyExistError();
        this.wire = wire; 
    }

}
