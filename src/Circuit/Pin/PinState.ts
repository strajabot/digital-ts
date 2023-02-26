
export class PinState {
	value: PinValue;
	
	constructor(value: PinValue) {
		this.value = value;
	}

}

export enum PinValue {
    HIGH, LOW, UNDEF,
}
