import { Component, ComponentState } from "./Circuit/Component";
import { Circuit } from "./Circuit/Circuit";
import { Pin } from "./Circuit/Base/Pin"
import { PinState } from "./Circuit/Base/PinState";


export class Simulation {
    
	readonly circuit: Circuit;
	readonly pinStateMap: Map<Pin, PinState>;
	readonly circuitState: Map<Component<any>, ComponentState>; 

	constructor(circuit: Circuit) {
		this.circuit = circuit;
		const {pinStateMap, circuitState} = this.circuit.createState();
		this.pinStateMap = pinStateMap;
		this.circuitState = circuitState;
	}

}
