

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
        //shouldn't happen??
        if(this.state !== newState) return;
        this.state = newState;
        this.component.update(); 
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
        //shouldn't happen??
        if(this.state !== newState) return;
        this.state = newState;
        this.component.update(); 
    }

}


export class OutputPin {

    private dest: InputPin[];
    priavte

}



export class Component {
    

    update();
    hook();

}