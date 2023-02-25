import { Component } from "../Component";
import { Pin } from "./Pin";
import { PinState, PinValue } from "./PinState";

export class OutputPin extends Pin {
    
    constructor(component: Component<any>) {
		super(component);
	}

    createState(): Map<Pin, PinState> {
		const tuple: [Pin, PinState] = [this, new PinState(PinValue.UNDEF)];
        return new Map([tuple]);
    }
}
