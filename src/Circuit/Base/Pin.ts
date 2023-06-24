import { Component } from "../Component";
import {PinState} from "./PinState";

export abstract class Pin {
	
	readonly component: Component<any>;

	constructor(component: Component<any>) {
		this.component = component;
	}

	abstract createState(): PinState;
}



