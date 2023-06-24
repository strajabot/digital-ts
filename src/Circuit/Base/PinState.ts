import { Pin } from "./Pin";

export enum PinValue {
    HIGH, LOW, UNDEF, HZ
}

export class PinState {
	value: PinValue;
	pin: Pin;

	constructor(pin: Pin, value: PinValue) {
		this.pin = pin;
		this.value = value;
	}

}