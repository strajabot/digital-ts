import { Component } from "../Component";
import { DuplexPin } from "./DuplexPin";
import { PinValue } from "./PinState";

export class DuplexBus {


    readonly width: number;
    readonly pins: DuplexPin[];

    constructor(component: Component<any>, unusedValue: PinValue, width: number) {
        this.width = width;

        const tempPins: DuplexPin[] = [];
        for(let i = 0; i<width; i++) {
            tempPins.push(new DuplexPin(component, unusedValue));
        }
        this.pins = tempPins;
    }

}