import { Pin } from "./Pin/Pin";
import { PinState } from "./Pin/PinState"; 

export interface ComponentState {
    
}

export interface Component<T extends ComponentState> {
    createState(): {pinStateMap: Map<Pin, PinState>, componentState: T};
    compute(state: T): boolean;
}
