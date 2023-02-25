import { Component } from "../Component";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class InputPin extends Pin {
    
    readonly unusedValue: PinValue;

    constructor(component: Component<any>, unusedValue: PinValue) {
		super(component);
		this.unusedValue = unusedValue;
    }
    
    createState(): Map<Pin, PinState> {
		const tuple: [Pin, PinState] = [this, new PinState(PinValue.UNDEF)];
        return new Map([tuple]);
    }
}
