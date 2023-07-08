import { Component, ComponentState } from "./Component";
import { Pin } from "./Base/Pin";
import { Wire } from "./Base/Wire";

export class Circuit {

    readonly wires: Map<Pin, Wire>;
    readonly components: Component<any>[];

    constructor(components: Component<any>[], wires: Map<Pin, Wire>) {
        //TODO: verify components and wires;
        this.wires = wires;
        this.components = components
	}

	createState(): Map<Component<any>, ComponentState> {
		//TODO: does this even work?
		const circuitState: Map<Component<any>, ComponentState> = new Map();
		for(let component of this.components) {
 			circuitState.set(component, component.createState());
		}
		return circuitState;
	}
    
}
