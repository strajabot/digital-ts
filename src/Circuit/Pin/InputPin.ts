import { Component } from "../Compontent";
import { PinState } from "./PinState";
import { OutputPin } from "./OutputPin";

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