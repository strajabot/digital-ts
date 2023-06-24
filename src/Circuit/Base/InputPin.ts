import { Component } from "../Component";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class InputPin extends Pin {
    
    readonly unusedValue: PinValue;

    constructor(component: Component<any>, unusedValue: PinValue) {
		  super(component);
		  this.unusedValue = unusedValue;
    }
    
    createState(): PinState {
		  return new PinState(this, PinValue.UNDEF);
    }
}
