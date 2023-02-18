import { Component } from "../Component";
import { PinState } from "./PinState";
import { InputPin } from "./InputPin";

export class OutputPin {
    
    readonly component: Component<any>;

    constructor(component: Component<any>) {
        this.component = component;
    }

    createState(): PinState {
        return PinState.UNDEF;
    }

}
