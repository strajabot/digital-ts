
export class PinState {
	value: PinValue;
	
	constructor(pinValue: PinValue) {
		this.pinValue = pinValue;
	}

}

export enum PinValue {
    HIGH, LOW, UNDEF,
}
