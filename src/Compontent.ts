

export enum PinState {
    HIGH, LOW, UNDEF
}

export class InputPin {
    
    private component: Component;
    private source: OutputPin;
    private state: PinState = PinState.UNDEF;

    constructor(component: Component, defaultSource: OutputPin) {
        this.component = component;
        this.source = defaultSource;
    }

    update(newState: PinState) {
        if(this.state !== newState) return;
        this.state = newState;
        this.component.update(this);
    }
}

export class OutputPin {
    
    private component: Component;
    private dest: InputPin[] = [];
    private state: PinState = PinState.UNDEF;

    constructor(component: Component) {
        this.component = component;
    }

    update(newState: PinState) {
        if(this.state !== newState) return;
        this.state = newState;
        this.dest.forEach((pin) => { pin.update(newState) });
    }

}

export class InputBus {
    
    size: number;
    inputs: InputPin[] = [];

    constructor(size: number, inputs: InputPin[], defaultSource: OutputPin | OutputBus) {
        this.size = size;
        //todo:implement;
    }

    get(idx: number): InputPin {
        return this.inputs[idx];
    }


}

export class OutputBus {
    
    size: number;
    outputs: OutputPin[] = [];

    constructor(size: number, outputs: OutputPin[]) {
        this.size = size;
        //todo:implement;
    }

    get(idx: number): OutputPin {
        return this.outputs[idx];
    }

} 

export class Component {


    update(pin: InputPin): void {
        //todo:
    }

    
}