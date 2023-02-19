import { Component } from "../Component";
import { PinState } from "./PinState";

export class InputPin {
    
    readonly component: Component<any>;
    readonly unusedState: PinState;

    constructor(component: Component<any>, unusedState: PinState) {
        this.component = component;
        this.unusedState = unusedState;
    }
    
    createState(): PinState {
        return PinState.UNDEF;
    }
}