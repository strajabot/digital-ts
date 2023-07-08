import { Component, ComponentState } from "./Component";
import { Pin } from "./Base/Pin";
import { Wire } from "./Base/Wire";
import { Circuit } from "./Circuit";

export class CircuitBuilder {

    private wires: Map<Pin, Wire>;
    private components: Component<any>[];

    constructor() {
        this.wires = new Map<Pin,Wire>();
        this.components = [];
	}

    add(component: Component<any>): CircuitBuilder {
        this.components.push(component);
        return this;
    }

    connect(pin: Pin, wire: Wire): CircuitBuilder {
        if(!this.components.includes(pin.component)) throw new Error("Couldnt connect pin to wire: you need to add components to circuit before trying to connect");
        this.wires.set(pin, wire);
        return this;
    }

    build(): Circuit {
        return new Circuit(this.components, this.wires);
    }    


}